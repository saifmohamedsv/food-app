import { useEffect, useState } from "react";
import yelp from "../axios/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(data.businesses);
    } catch (error) {
      setError("Something Went Wrong, please try again later.");
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, error];
};
