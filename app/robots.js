export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vauzi-portfolio.vercel.app/sitemap.xml",
  };
}
