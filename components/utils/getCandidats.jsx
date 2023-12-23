import axios from "axios";

let contactsArr = [];
const token = "pat-eu1-cd5e23e7-7c86-4103-8404-068321db77da";
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const recursiveFetchContacts = async (link) => {
  const token = "pat-eu1-cd5e23e7-7c86-4103-8404-068321db77da";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  if (undefined) {
    return null;
  } else {
    try {
      const promise = new Promise((resolve, reject) => {
        resolve(axios.get(link, config));
      });
      let res = await promise;
      res.data.results.map((candidat) => {
        contactsArr.push(candidat);
      });
      console.log(contactsArr.length);
      if (res.data.paging)
        return recursiveFetchContacts(res.data.paging.next.link);
      else {
        return contactsArr;
      }
    } catch (error) {
      console.log({ Error: error });
    }
  }
};

export default async function getCandidats() {
  contactsArr = [];
  const res = await recursiveFetchContacts(
    "https://api.hubapi.com/crm/v3/objects/contacts?limit=100&archived=false&properties=jobtitle,experience,domaine_s__d_expertise,domaine_s__fonctionnel_s_,departement,city"
  );

  if (!res) {
    throw new Error("failed to recursive candidats");
  } else {
    return await res;
  }
}
