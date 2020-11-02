import axios from "axios";
import image from "images/처음처럼.jpg";

const BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: BASE_URL,
});

const sampleData = [
  {
    id: 0,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 1,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 2,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 3,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 4,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 5,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 6,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 7,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
  {
    id: 8,
    title: "처음처럼",
    image: image,
    category: "소주",
    degree: 16.9,
  },
];

export const drinkApi = {
  getSoju: (category) =>
    api.get("/", {
      params: {
        category: category,
      },
    }),
  getSearch: (query) => sampleData,
  getBest: () => sampleData,
};
