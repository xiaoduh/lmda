export default function robots() {
  const baseUrl = "https://lmda-xiaoduh.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
