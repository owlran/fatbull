import { useEffect, useState } from "react";

import { getTags } from "../services/index";

type TagType = {
  id: string;
  name: string;
  count: number;
};

const useTags = () => {
  const [data, setData] = useState<TagType[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await getTags();
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    tags: data,
    loading,
  };
};

export default useTags;
