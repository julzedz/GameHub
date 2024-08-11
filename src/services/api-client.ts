import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0bd3757a54504d41833ce45b51f8f772",
  },
});
