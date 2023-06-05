import axios from "../axios";

export const GetAllProductsApi = async () => {
  try {
    const url = "/products";
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const GetSingleProduct = async () => {
  try {
    const url = "/products";
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err;
  }
};
