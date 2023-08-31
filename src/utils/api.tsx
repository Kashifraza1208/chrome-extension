import axios from "axios";

export const getLocation = async (): Promise<string> => {
  try {
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    const ip: string = ipResponse.data.ip;

    const token: string | undefined = process.env.REACT_APP_IPINFO_TOKEN;

    const locationResponse = await axios.get(
      `https://ipinfo.io/${ip}/json?token=${token}`
    );
    const locationData: any = locationResponse.data;

    return `Your country is ${locationData.country} and city is ${locationData.city}`;
  } catch (error) {
    throw error;
  }
};
