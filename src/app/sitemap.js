export default function sitemap() {
  const baseUrl = "https://studytaskapk.vercel.app";
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
  ];
}
