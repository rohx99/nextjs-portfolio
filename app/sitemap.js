export default function sitemap() {
  const www_app_url = "https://www.rohitkumaryadav.com";
  const app_url = "https://rohitkumaryadav.com";

  const lastModifiedDate = "2025-11-08";

  return [
    {
      url: www_app_url,
      lastModified: new Date(lastModifiedDate),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: app_url,
      lastModified: new Date(lastModifiedDate),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
