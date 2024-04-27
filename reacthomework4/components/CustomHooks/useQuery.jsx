import { useEffect, useState } from "react";

function useQuery(queryCallback) {
  const [fetchedData, setfetchedData] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await queryCallback();
        setfetchedData(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryCallback]);

  return { fetchedData, hasError, isLoading };
}

export default useQuery;
