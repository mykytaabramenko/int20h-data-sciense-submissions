import { createContext, useContext, useEffect, useMemo, useState } from "react";
import CONSTANTS from "./Constants.js";
// const baseUri = "http://localhost:8000/leaderboard/accuracy_scores";
const Context = createContext();
const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  async function fetchData() {
    setIsLoading(true);
    try {
      let response = await fetch(
        `${CONSTANTS.BASE_URI}/${CONSTANTS.USE_CASES.LEADERBOARD_ACCURACY_SCORES}`,
      );
      response = await response.json();
      setData(response);
    } catch (e) {
      console.error("Error while loading data", e);
    } finally {
      setIsLoading(false);
    }
  }

  async function refreshAccuracyScores() {
    setIsLoading(true);
    try {
      await fetch(
        `${CONSTANTS.BASE_URI}/${CONSTANTS.USE_CASES.LEADERBOARD_REFRESH_ACCURACY_SCORES}`,
        { method: "post" },
      );
    } catch (e) {
      console.error("Error while refreshing data", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const value = useMemo(() => {
    return { data, isLoading, fetchData, refreshAccuracyScores };
  }, [data, isLoading]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useData() {
  const dataContext = useContext(Context);
  if (dataContext === undefined)
    throw new Error("DataContext was used outside the DataProvider");
  return dataContext;
}

export { useData, DataProvider };
export default DataProvider;
