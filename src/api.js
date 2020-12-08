import axios from "axios";
import image from "images/처음처럼.jpg";

const BASE_URL = "http://3.35.139.156:6974/";

const api = axios.create({
  baseURL: BASE_URL,
});

const sampleData = [
  {
    id: 0,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 1,
    ABV: 5.5,
  },
  {
    id: 1,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 2.2,
    ABV: 5.5,
  },
  {
    id: 2,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 1.2,
    ABV: 5.5,
  },
  {
    id: 3,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 4.3,
    ABV: 5.5,
  },
  {
    id: 4,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 3.3,
    ABV: 5.5,
  },
  {
    id: 5,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 4.4,
    ABV: 16.9,
  },
  {
    id: 6,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 2.2,
    ABV: 16.9,
  },
  {
    id: 7,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 4.5,
    ABV: 16.9,
  },
  {
    id: 8,
    name: "처음처럼",
    image: image,
    category: "소주",
    rating: 4.5,
    ABV: 16.9,
  },
];

export const drinkApi = {
  getCategory: (category) => api.get(`drink/items/${category}`),
  getSearch: (query) => sampleData,
  getBest: () => sampleData,
};
