import axios from "axios";
import { contactsArr } from "../utils/getCandidats";

//last update 6/12/23
export const candidatNumber = contactsArr.length;

const token = "pat-eu1-cd5e23e7-7c86-4103-8404-068321db77da";
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export default async function fetchData() {
  const res = await axios.get(
    "https://api.hubapi.com/crm/v3/objects/contacts?limit=100&archived=false",
    config
  );
  console.log(res.data.results.length);
}

export const labelsLocalisation = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
];

//last update 8/12/23
export const dataLocalisation = {
  labelsLocalisation,
  datasets: [
    {
      data: [
        1, 1, 1, 0, 1, 46, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0,
        1, 1, 2, 0, 1, 1, 3, 71, 0, 8, 10, 10, 0, 4, 15, 0, 0, 0, 0, 0, 9, 1, 0,
        1, 4, 0, 0, 1, 0, 1, 0, 2, 0, 8, 0, 0, 2, 2, 2, 1, 7, 5, 16, 1, 2, 1, 1,
        106, 4, 3, 56, 0, 0, 0, 0, 3, 0, 1, 2, 0, 0, 0, 0, 37, 79, 14, 29, 14,
        0, 0, 0, 101,
      ],
      label: "Localisation géographique",
      backgroundColor: "#99C3FF",
    },
  ],
};

//last update 8/12/23
export const dataSeniorite = [60, 66, 90, 28, 43, 10];

//last update 8/12/23
export const weeklyGrowthCVtheque = [113, 176, 254, 145, 164, 172, 359];
