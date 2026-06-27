export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://haile-dev-portifoli.vercel.app/sitemap.xml",
    host: "https://haile-dev-portifoli.vercel.app",
  };
}
