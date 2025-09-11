import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { backendUrl } from "../App";

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {
  const [projects, setProjects] = useState([]);

  const getProject = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/api/v1/projects/listProjects"
      );

      if(response.data.success) {
        setProjects(response.data.data)
        console.log("Project: ", response.data.data)
      }
    } catch (error) {
      console.error("Sender Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const value = {
    projects,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
