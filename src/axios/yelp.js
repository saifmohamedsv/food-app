import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Zn-5wv_Y7p8ls2XWd-bOrFfLtA-7aas0ddsylRcUfjF8-5wBK5U7OUf_KB5T8DaW_JuymdNa5EP2_9J8rklrfSaQjf41c1cjFn-bH-uFS8LiHSZ8iCG2YFxVZtJTY3Yx",
  },
});
