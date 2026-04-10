/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.ahmetalparslansancar.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    additionalSitemaps: [],
    host: siteUrl.replace(/\/$/, ""),
  },
  /** Arama motorlarÄ± iÃ§in Ã¶ncelik / sÄ±klÄ±k ince ayarÄ± */
  transform: async (config, path) => {
    const base = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
    if (path === "/") {
      return { ...base, priority: 1.0, changefreq: "weekly" };
    }
    if (path.startsWith("/hizmetler/") || path === "/online-terapi") {
      return { ...base, priority: 0.85, changefreq: "weekly" };
    }
    if (
      path === "/narsizm-ne-demek" ||
      path === "/toksik-iliski-nedir" ||
      path === "/tukenmislik-sendromu" ||
      path === "/uykuya-dalamama-neden-olur" ||
      path === "/ghosting-ne-demek" ||
      path === "/othello-sendromu" ||
      path === "/love-bombing-nedir" ||
      path === "/manipulasyon-nedir" ||
      path === "/regresyon-nedir" ||
      path === "/kompulsif-ne-demek" ||
      path === "/durtusel-ne-demek"
    ) {
      return { ...base, priority: 0.75, changefreq: "monthly" };
    }
    if (path === "/kvkk" || path === "/gizlilik-politikasi" || path === "/cerez-politikasi") {
      return { ...base, priority: 0.4, changefreq: "yearly" };
    }
    return base;
  },
};

