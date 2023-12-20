import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}${url}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return data;
};

export default useFetchData;
