import axios from "axios";

export default async function sitemap() {
  const baseUrl = "https://lambda-labs.fr";

  const resJobs = await axios.get(
    "https://strapi-vvjo.onrender.com/api/jobs/?populate=*"
  );
  const resProfils = await axios.get(
    "https://strapi-vvjo.onrender.com/api/profils?populate=*"
  );

  const jobsUrl = resJobs.data.data.map((job) => {
    return {
      url: `${baseUrl}/jobs/description/${job.attributes.id}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });

  const profilsUrl = resProfils.data.data.map((profil) => {
    return {
      url: `${baseUrl}/collectif/profil/${profil.attributes.id}/${profil.attributes.title}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/carriere`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/collectif`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partenaire`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rejoindre`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...jobsUrl,
    ...profilsUrl,
  ];
}
