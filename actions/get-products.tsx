import { Product } from "@/types";
import queryString from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
const UrLSearchParams = (query: Query) => {
  const search = new URLSearchParams();
  if (query.categoryId) {
    search.append("categoryId", query.categoryId!);
  }
  if (query.colorId) {
    search.append("colorId", query.colorId!);
  }
  if (query.isFeatured) {
    search.append("isFeatured", String(query.isFeatured)!);
  }
  if (query.sizeId) {
    search.append("sizeId", query.sizeId!);
  }
  return search;
};
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const getProducts = async (query: Query): Promise<Product[]> => {
  // const url=queryString.stringifyUrl({
  //   url:URL,
  //   query:{
  //     colorId:query.colorId,
  //     sizeId:query.sizeId,
  //     categoryId:query.categoryId,
  //     isFeatured:query.isFeatured
  //   }
  // })
  const urlSearch = UrLSearchParams(query);
  // const searchparams=UseUrl(query)
  const res = await fetch(`${URL}?${urlSearch}`, { cache: "no-cache" });
  return res.json();
};
export default getProducts;
