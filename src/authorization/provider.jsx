import { createContext, useContext, useState } from "react";
import CONSTANTS from "../Constants.js";

const Context = createContext();
const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  async function register({ username, apikey, teamname }) {
    const requestUri = `${CONSTANTS.BASE_URI}/${CONSTANTS.USE_CASES.REGISTER}`;
    setIsLoading(true);
    try {
      const response = await fetch(requestUri, {
        method: "post",
        body: JSON.stringify({
          username,
          apikey,
          teamname,
        }),
      });
      if (response.status !== 200) return;
      setIsAuthorized(true);
    } catch (e) {
      console.log("Error while loading data", e);
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    isLoading,
    register,
    isAuthorized,
  };

  return (
    <Context.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </Context.Provider>
  );
};

function useAuthorizationData() {
  const authorizationData = useContext(Context);
  if (!authorizationData) console.error("Authorization data is missed");
  return authorizationData;
}

export { useAuthorizationData, Provider };
export default Provider;
