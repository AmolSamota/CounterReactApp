import axios from "axios";
import { FETCH_URL, UPDATE_URL } from "../util/data";

const fetchCounter = async () => {
  const response = await axios.get(FETCH_URL);
  return response.data;
};

const updateCounter = async (counter) => {
  const response = await axios.put(UPDATE_URL, {
    amolSamota: counter,
  });
  return response.data.amolSamota;
};

export { fetchCounter, updateCounter };
