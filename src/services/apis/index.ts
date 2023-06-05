import axios from "../axios";
import { ProductResponseType } from "./product.types";

export const GetAllProductsApi = async (): Promise<ProductResponseType[]> => {
  try {
    const url = "/products";
    const res = await axios.get<ProductResponseType[]>(url);
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
