"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { articles } from "../page";

const articleContent = {
  "designing-idempotent-payment-apis": {
    sections: [
      {
        heading: "Why Idempotency Matters in Payment Systems",
        body: `When a user taps "Pay" on a mobile app and the request times out, what happens next? In the best case, the client retries and the payment succeeds. In the worst case without idempotency: the payment was already processed by the server before the timeout, and the retry creates a duplicate charge. The user gets billed twice.

This is not a hypothetical. It happens in production every day. Mobile networks drop connections mid-flight. Load balancers restart. Users tap the back button and try again. Any system that processes money must assume requests will be retried, and it must be designed to handle retries correctly.

Idempotency is the property that makes an operation safe to retry. An idempotent endpoint processes a request exactly once, regardless of how many times it is called with the same input.`,
      },
      {
        heading: "The Standard Pattern: Idempotency Keys",
        body: `The most widely used approach is the idempotency key pattern, used by Stripe, Adyen, and most major payment processors:

1. The client generates a unique key (typically a UUID) before sending the payment request and includes it as a header.
2. The server checks if it has seen this key before.
3. If yes: return the stored result immediately without processing.
4. If no: process the payment, store the result against the key, return the result.

The client always sends the same key for a given logical payment attempt. If the first request times out, the client retries with the same key. The server recognises it and returns the original result — whether that was a success, a failure, or an in-progress state.`,
      },
      {
        heading: "Implementation: Redis Distributed Locks",
        body: `The naive implementation — just storing the key in a database before processing — has a race condition: two concurrent requests with the same key can both pass the "have I seen this?" check before either writes the result.

The correct implementation uses a distributed lock:

\`\`\`javascript
async function processPayment(idempotencyKey, paymentData) {
  const lockKey = \`lock:payment:\${idempotencyKey}\`;
  const resultKey = \`result:payment:\${idempotencyKey}\`;

  // Check for existing result first (fast path)
  const existing = await redis.get(resultKey);
  if (existing) return JSON.parse(existing);

  // Acquire distributed lock (SET NX EX)
  const lock = await redis.set(lockKey, "1", "NX", "EX", 30);
  if (!lock) {
    // Another request is processing — wait and return its result
    await sleep(500);
    const result = await redis.get(resultKey);
    return result ? JSON.parse(result) : { status: "processing" };
  }

  try {
    const result = await executePayment(paymentData);
    // Store result with TTL (24h is typical)
    await redis.set(resultKey, JSON.stringify(result), "EX", 86400);
    return result;
  } finally {
    await redis.del(lockKey);
  }
}
\`\`\`

The SET NX (set if not exists) operation is atomic in Redis — only one request can acquire the lock. All others either wait or return an in-progress response.`,
      },
      {
        heading: "What to Store as the Result",
        body: `Store the normalised outcome: success with transaction ID, failure with error code, or a terminal "declined" state. Do not store intermediate states as idempotent results — a request that is "processing" should not be cached as the final result.

Key decisions:
- TTL: 24 hours is standard. Short enough to allow eventual reuse, long enough to cover all retry windows.
- Scope: Keys should be scoped to the merchant and payment type, not global. A key that worked for a $10 charge should not be reusable for a $100 charge.
- Granularity: Key per logical payment attempt, not per API call. A status-check call should not create or consume idempotency keys.`,
      },
      {
        heading: "Lessons from Production",
        body: `At AddisPay, we added the idempotency layer six months after launch, after a batch of duplicate charge complaints from a merchant whose mobile SDK was aggressively retrying. The fix was straightforward once we identified the pattern, but we lost merchant trust in the process.

Build idempotency first. It is not an optimisation — it is a correctness guarantee. Any payment API without it is not production-ready for real-world network conditions.`,
      },
    ],
  },

  "event-driven-microservices-kafka-rabbitmq": {
    sections: [
      {
        heading: "The Common Misconception",
        body: `Teams migrating to microservices often treat Kafka and RabbitMQ as interchangeable message brokers — pick one, configure some queues, done. This leads to using Kafka for task distribution (where RabbitMQ excels) or RabbitMQ for event streaming (where Kafka excels). Both choices create problems that appear gradually and are expensive to fix.

They are not competing tools. They solve fundamentally different problems, and in complex systems you often need both.`,
      },
      {
        heading: "What Kafka Is: A Distributed Log",
        body: `Kafka is a distributed, append-only log. Producers write events to topics. Consumers read from those topics at their own pace — independently, in parallel, and as many times as they want.

This means:
- Events are retained for a configured period (hours, days, weeks), not just until consumed.
- Multiple independent consumer groups can read the same events for different purposes.
- Consumers can replay events from any offset — useful for rebuilding state, reprocessing, or debugging.
- Ordering is guaranteed within a partition (useful when you partition by entity ID — e.g. user ID or transaction ID).

Kafka is the right choice when you need a durable, replayable, high-throughput event backbone. At Dashen Super App, every financial event — payment initiated, wallet topped up, lottery ticket purchased — is published to Kafka. The analytics service, the notification service, and the audit service all consume the same events independently.`,
      },
      {
        heading: "What RabbitMQ Is: A Message Router",
        body: `RabbitMQ is a message broker with sophisticated routing. Producers publish messages to exchanges. Exchanges route messages to queues based on routing keys and bindings. Consumers pull from queues and acknowledge each message individually.

The key difference: once a message is acknowledged, it is gone. RabbitMQ is designed for task distribution, not event streaming.

This gives you:
- Flexible routing: direct, fanout, topic, headers exchanges for different delivery patterns.
- Dead Letter Queues (DLQ) for failed messages — critical for reliable task execution.
- Per-message TTL and queue-level TTL.
- Priority queues.
- Consumer acknowledgement and requeue on failure.

At Dashen Super App, RabbitMQ handles tasks that need exactly-once processing with guaranteed delivery: sending SMS notifications, calling third-party banking APIs, processing scheduled reports. If the SMS service crashes mid-processing, RabbitMQ requeues the message and another consumer picks it up. With Kafka, implementing the same exactly-once guarantee requires significantly more application-level code.`,
      },
      {
        heading: "The Decision Framework",
        body: `Use Kafka when:
- You need multiple independent consumers reading the same events (fan-out to many services)
- Events need to be replayed or reprocessed (analytics, audit, event sourcing)
- You need high throughput (hundreds of thousands of events per second)
- Order within a partition matters
- You need event retention for downstream consumers that come later

Use RabbitMQ when:
- You need a task queue with exactly-once semantics
- Different consumers should each handle different messages (work distribution, not fan-out)
- You need sophisticated routing (route by message type, destination, content)
- Failed tasks need automatic requeue and dead-letter handling
- Per-message TTL or priority matters`,
      },
      {
        heading: "Using Both in the Same System",
        body: `The pattern we use at Dashen: Kafka as the event backbone, RabbitMQ for task execution.

A payment event flows through Kafka to multiple consumers. The notification service reads the event and enqueues a task to RabbitMQ's SMS queue. The SMS worker pulls from the queue, sends the SMS, and acknowledges. If the SMS API is down, the message stays in RabbitMQ until the worker can process it.

Neither broker handles both roles well. Using both — deliberately, for the jobs each is designed for — gives you a more reliable and simpler system than trying to make one tool do everything.`,
      },
    ],
  },

  "redis-caching-strategies-backend": {
    sections: [
      {
        heading: "The Myth of 'Just Add Caching'",
        body: `When performance is slow, "add caching" is the first suggestion in every engineering discussion. It is also one of the most commonly misapplied optimisations. Caching the wrong layer, with the wrong key design, at the wrong TTL produces: stale data bugs, cache invalidation complexity, and often no performance improvement at all because the actual bottleneck was never the query.

The 40% latency reduction we achieved at AddisPay came from profiling first, caching second — and only caching what the data proved needed caching.`,
      },
      {
        heading: "Step 1: Profile Before You Cache",
        body: `Before writing a single line of caching code, instrument your API to measure where time is actually spent per request. In a Node.js/Express app, a simple middleware approach:

\`\`\`javascript
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(\`\${req.method} \${req.path} \${res.statusCode} \${Date.now() - start}ms\`);
  });
  next();
});
\`\`\`

At AddisPay, this revealed that 70% of checkout API latency was a single database query: merchant configuration lookup on every payment request. The same merchant config — rate limits, supported currencies, webhook URLs — was fetched from MongoDB on every single checkout, even though it changed at most once a day.`,
      },
      {
        heading: "Strategy 1: Read-Through Cache for Reference Data",
        body: `Merchant configuration is the canonical example of read-through caching: data that is read frequently but changes rarely. The pattern:

\`\`\`javascript
async function getMerchantConfig(merchantId) {
  const cacheKey = \`merchant:config:\${merchantId}\`;

  // Try cache first
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Cache miss: fetch from DB
  const config = await MerchantConfig.findById(merchantId);
  if (!config) throw new NotFoundError(\`Merchant \${merchantId} not found\`);

  // Cache with TTL (5 minutes)
  await redis.setex(cacheKey, 300, JSON.stringify(config));
  return config;
}
\`\`\`

TTL choice matters. 5 minutes for merchant config is safe because the merchant portal propagates config changes asynchronously and a 5-minute delay is acceptable. For user session data: 15 minutes. For bank provider status that changes by the second: no caching.`,
      },
      {
        heading: "Strategy 2: Cache Invalidation on Write",
        body: `Caching without invalidation is just stale data with a fancier name. When a merchant updates their configuration, the cache must be invalidated immediately:

\`\`\`javascript
async function updateMerchantConfig(merchantId, updates) {
  // Update database first (source of truth)
  const updated = await MerchantConfig.findByIdAndUpdate(
    merchantId, updates, { new: true }
  );

  // Invalidate cache immediately
  await redis.del(\`merchant:config:\${merchantId}\`);

  // Optional: pre-warm the cache with new value
  await redis.setex(
    \`merchant:config:\${merchantId}\`, 300, JSON.stringify(updated)
  );

  return updated;
}
\`\`\`

The critical rule: always write to the database first, then invalidate the cache. Never write to the cache first — a crash between the cache write and the DB write leaves the cache with data the database does not have.`,
      },
      {
        heading: "Strategy 3: Rate Limiting With Redis",
        body: `Redis is also ideal for distributed rate limiting — preventing a single merchant from overwhelming the API with requests.

\`\`\`javascript
async function checkRateLimit(merchantId, limit = 100, windowSeconds = 60) {
  const key = \`rate:\${merchantId}:\${Math.floor(Date.now() / (windowSeconds * 1000))}\`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, windowSeconds);
  return count <= limit;
}
\`\`\`

The sliding window key — incorporating the current time bucket — means each merchant gets a fresh 100 requests per 60-second window without any cleanup jobs.`,
      },
      {
        heading: "What We Did Not Cache (And Why)",
        body: `Transaction records: never cached. Financial data must always come from the authoritative database. A stale cache hit on a transaction record could show a payment as pending when it has already been processed — leading to double-charge attempts.

User authentication tokens: stored in Redis as the primary store, not as a cache. Session data living only in Redis (with appropriate TTL) is a valid pattern; caching auth tokens that also live in a database creates synchronisation complexity.

The lesson: caching is a deliberate design decision, not a default. Know exactly what you are caching, why, what the acceptable staleness window is, and how invalidation works before you write the code.`,
      },
    ],
  },

  "kubernetes-zero-downtime-deployments": {
    sections: [
      {
        heading: "The Problem with 'Rolling Deployments'",
        body: `Kubernetes rolling deployments are often described as zero-downtime by default. This is not accurate. A rolling deployment prevents total unavailability — it doesn't automatically prevent individual requests from failing during the transition.

There are four specific gaps between a rolling deployment and true zero-downtime:

1. The new pod receives traffic before it is ready to serve requests.
2. The old pod is terminated before in-flight requests complete.
3. The load balancer still routes to a pod that has been marked for deletion.
4. The application starts before external dependencies (database connections, cache) are initialised.

Each of these gaps is closeable with specific configuration. Here's how we configured Kubernetes for Dashen Super App's financial services.`,
      },
      {
        heading: "Gap 1: Readiness Probes",
        body: `Kubernetes will not route traffic to a pod until its readiness probe returns success. But many teams configure readiness probes that succeed too early — before the application is actually ready to serve traffic.

For a Go service using gRPC health checks:

\`\`\`yaml
readinessProbe:
  grpc:
    port: 9090
    service: "grpc.health.v1.Health"
  initialDelaySeconds: 5
  periodSeconds: 3
  failureThreshold: 3
\`\`\`

The probe hits the gRPC health endpoint — which the service only marks as SERVING after it has successfully connected to the database, Redis, and all upstream dependencies. If any dependency is unavailable, the pod stays unready and receives no traffic.

For HTTP services:
\`\`\`yaml
readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5
\`\`\`

The /health/ready endpoint should check all dependencies — not just return 200. A service that can accept HTTP connections but cannot reach its database is not ready.`,
      },
      {
        heading: "Gap 2: Graceful Shutdown",
        body: `When Kubernetes terminates a pod, it sends SIGTERM. Without graceful shutdown handling, the process exits immediately, dropping all in-flight requests.

In a Go service:

\`\`\`go
func main() {
    server := &http.Server{Addr: ":8080", Handler: router}

    go func() {
        if err := server.ListenAndServe(); err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()

    // Wait for termination signal
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)
    <-quit

    // Graceful shutdown: wait for in-flight requests (30s timeout)
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()

    if err := server.Shutdown(ctx); err != nil {
        log.Fatal("Server forced shutdown:", err)
    }
}
\`\`\`

Also configure terminationGracePeriodSeconds in the deployment spec to match your shutdown timeout:

\`\`\`yaml
spec:
  terminationGracePeriodSeconds: 60
\`\`\``,
      },
      {
        heading: "Gap 3: Load Balancer Deregistration Delay",
        body: `There is a race condition between Kubernetes removing a pod from its endpoint list and the load balancer (or kube-proxy) propagating that change. During this window — typically 5-15 seconds — new requests can still be routed to a pod that is shutting down.

The fix is a preStop lifecycle hook that adds a sleep before the application begins shutdown:

\`\`\`yaml
lifecycle:
  preStop:
    exec:
      command: ["/bin/sh", "-c", "sleep 15"]
\`\`\`

The sleep gives the load balancer time to deregister the pod before SIGTERM is sent. Combined with graceful shutdown, this eliminates the race condition.`,
      },
      {
        heading: "Gap 4: Deployment Strategy Configuration",
        body: `The default rolling update strategy replaces pods one at a time. For financial services where availability is critical, configure maxUnavailable: 0 to ensure capacity never drops below 100%:

\`\`\`yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 0
    maxSurge: 1
\`\`\`

This keeps all existing pods running while spinning up new ones. Traffic only shifts to new pods after their readiness probes pass. The deployment uses more resources temporarily (100% + 1 pod worth), but guarantees no reduction in serving capacity during the rollout.`,
      },
      {
        heading: "Putting It Together",
        body: `The complete zero-downtime configuration for a financial service combines all four fixes:

1. Readiness probe that checks all dependencies before accepting traffic
2. Graceful shutdown handling SIGTERM and waiting for in-flight requests
3. preStop sleep hook to allow load balancer deregistration
4. RollingUpdate with maxUnavailable: 0 to prevent capacity reduction

This configuration has been running in production for Dashen Super App's payment services since deployment. We have completed over 200 rolling deployments without a single dropped payment request — in a system where dropping a payment request is a financial incident.`,
      },
    ],
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

const categoryColors = {
  "Payment Systems":     "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Distributed Systems": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Performance":         "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "DevOps":              "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const content = articleContent[article.slug];
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <motion.div
      className="min-h-full bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO ─── */}
      <div className="relative border-b border-slate-800/60 px-6 py-14 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/blog">
            <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 mb-8 w-fit group">
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back to Blog
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className={`text-xs font-bold border px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
            <span className="text-xs text-slate-500">{article.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-slate-400 leading-relaxed text-base">{article.excerpt}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 border border-slate-800 px-2.5 py-1 rounded-full bg-slate-900/60">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── AUTHOR STRIP ─── */}
      <div className="bg-slate-900/60 border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            H
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Haylemichael Tsega</p>
            <p className="text-xs text-slate-500">Senior Backend Engineer · Distributed Systems · Fintech</p>
          </div>
        </div>
      </div>

      {/* ─── ARTICLE BODY ─── */}
      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col gap-10">
        {content?.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">{section.heading}</h2>
            <div className="text-slate-300 leading-relaxed text-[15px]">
              {section.body.split("\n\n").map((paragraph, pi) => {
                const isCode = paragraph.includes("```");
                if (isCode) {
                  const parts = paragraph.split(/```(?:\w+)?\n?/);
                  return (
                    <div key={pi}>
                      {parts.map((part, ppi) =>
                        ppi % 2 === 0 ? (
                          part.trim() && <p key={ppi} className="mb-4">{part.trim()}</p>
                        ) : (
                          <pre key={ppi} className="bg-slate-900 border border-slate-700/60 rounded-xl p-5 overflow-x-auto text-sm text-slate-300 font-mono leading-relaxed mb-4 whitespace-pre">
                            <code>{part.replace(/\n$/, "")}</code>
                          </pre>
                        )
                      )}
                    </div>
                  );
                }
                if (paragraph.trim().startsWith("- ") || paragraph.trim().startsWith("1.")) {
                  const lines = paragraph.trim().split("\n");
                  return (
                    <ul key={pi} className="mb-4 flex flex-col gap-1.5">
                      {lines.map((line, li) => (
                        <li key={li} className="flex gap-2.5">
                          <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                          <span>{line.replace(/^[-\d.]\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={pi} className="mb-4">{paragraph}</p>;
              })}
            </div>
          </motion.div>
        ))}

        {/* AUTHOR BIO */}
        <div className="border-t border-slate-800 pt-10">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-4">
            <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
              H
            </div>
            <div>
              <p className="font-bold text-white mb-1">Haylemichael Tsega</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                Senior backend engineer with 4+ years building production systems in fintech
                and distributed infrastructure. Backend architect for the Dashen Super App and
                AddisPay payment gateway.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/Reman-tsega" target="_blank" rel="noreferrer" className="text-xs text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                  GitHub →
                </a>
                <a href="https://www.linkedin.com/in/haylemichael-tsega/" target="_blank" rel="noreferrer" className="text-xs text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MORE ARTICLES */}
        {otherArticles.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-5">
              More Articles
            </p>
            <div className="flex flex-col gap-3">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`}>
                  <div className="group bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 hover:border-violet-700/40 transition-all">
                    <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{a.readTime} · {a.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border border-violet-700/30 rounded-2xl p-7 text-center">
          <p className="font-bold text-white mb-2">Building a distributed system or payment platform?</p>
          <p className="text-slate-400 text-sm mb-5">I&apos;m available for senior backend roles and technical consulting.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <button className="rounded-full bg-violet-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-violet-500 transition-colors">
                Get in Touch
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="rounded-full border border-slate-700 text-slate-300 px-6 py-2.5 text-sm font-semibold hover:bg-slate-800 transition-colors">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
