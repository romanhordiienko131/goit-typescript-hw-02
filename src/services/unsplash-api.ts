import axios from "axios";
import { Image } from "../types/types";

interface IUnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

async function fetchImages(query: string, page: number): Promise<IUnsplashResponse> {
  const response = await axios.get<IUnsplashResponse>("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: import.meta.env.VITE_UNSPLASH_KEY,
      query,
      page,
      per_page: 12,
    },
  });

  
  return response.data;
}

export default fetchImages;
