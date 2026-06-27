const BASE_URL = "https://haile-dev-portifoli.vercel.app";

const caseStudySlugs = [
  "dashen-super-app",
  "addis-pay",
  "addis-bike",
  "dir-link",
  "aurora-plc",
];

const blogSlugs = [
  "designing-idempotent-payment-apis",
  "event-driven-microservices-kafka-rabbitmq",
  "redis-caching-strategies-backend",
  "kubernetes-zero-downtime-deployments",
];

export default function sitemap() {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
