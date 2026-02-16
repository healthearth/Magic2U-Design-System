import { useEffect, useState } from "react";

export function useMetrics() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/mock-data.json")
      .then(res => res.json())
      .then(json => {
        setData({
          members: json.members,
          digitalUsers: json.estimatedDigitalUsers,
          hoursSaved: json.estimatedTimeSavedHours,
          savings: json.estimatedEngineeringSavingsUSD
        });
      });
  }, []);

  return { data };
}

