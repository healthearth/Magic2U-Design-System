// useQuery.ts
// A lightweight data-fetching hook with caching and error handling.

import { useState, useEffect } from "react";
import { cache } from "./cache";

export function useQuery(key: string, fetcher: () => Promise<any>) {
  const [data, setData] = useState(cache.get(key));
  const [loading, setLoading] = useState(!cache.has(key));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache.has(key)) return;

    fetcher()
      .then((res) => {
        cache.set(key, res);
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [key]);

  return { data, loading, error };
}
