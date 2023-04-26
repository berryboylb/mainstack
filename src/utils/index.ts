import toast from "react-hot-toast";
import axios from "axios";
import { Logo, Facebook, Instagram, LinkedIn, Twitter } from "../assets";
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  //   const year = date.getFullYear();

  const formattedDate = `${day} ${monthNames[monthIndex]}`;

  return formattedDate;
}

const COLORS = ["#599EEA", "#0FB77A", "#FAB70A", "#F09468", "#844FF6"];

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`https://fe-task-api.mainstack.io/`);
    return data;
  } catch (err: any) {
    toast.error(err.message);
    toast.error(err.response.data.message);
    return err;
  }
};

export const arrangeData = (obj: any) => {
  const results: any[] = [];
  Object.entries(obj).forEach(([key, value]) =>
    results.push({ name: formatDate(key), pv: value })
  );
  return results;
};

export function getTotal(obj: any) {
  let total = 0;
  Object.entries(obj).forEach(([key, value]) => (total += value as number));
  return total;
}

async function getCountryFlag(countryName: string) {
  // Fetch the country data from the API
  const response = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );
  const countryData = await response.json();
  const flagUrl = await countryData[0].flag;
  return flagUrl;
}

export function arangePieChart(arr: any) {
  const results: any[] = [];
  arr.map(async (item: any, index: number) =>
    results.push({
      ...item,
      color: COLORS[index % COLORS.length],
      flag: await getCountryFlag(item.country),
    })
  );
  const sortedArr = results.sort((a, b) => b.percent - a.percent);
  return sortedArr;
}

type Media = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  google: string;
};

function getSocialMediaLogo(appName: string) {
  // Dictionary of social media app names and their corresponding logos
  const socialMediaLogos: Media = {
    facebook: Facebook,
    twitter: Twitter,
    instagram:
      "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png",
    linkedin: LinkedIn,
    google:
      "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png",
    // Add more social media app names and logos as needed
  };

  // Get the logo URL from the dictionary
  const logoUrl = socialMediaLogos[appName.toLowerCase() as keyof Media];

  return !logoUrl ? "https://placeholder.com/50x50" : logoUrl;
}

export function arrangeSocials(arr: any[]) {
  const results: any[] = [];
  arr.map((item: any, index: number) =>
    results.push({
      ...item,
      color: COLORS[index % COLORS.length],
      flag: getSocialMediaLogo(item.source),
    })
  );
  const sortedArr = results.sort((a, b) => b.percent - a.percent);
  console.log(sortedArr);
  return sortedArr;
}
