import React, { createContext, useState, useEffect } from "react";
import {
  getData,
  getAllData,
  getLikelyhoodData,
  getRelevanceData,
  EndYear,
  AllEndYear,
  AllTopic,
  AllSector,
  AllPEST,
  AllCountry,
  AllRegion,
  AllSource,
} from "./getData.service";

export const GetAllDataContext = createContext();

export const GetAllDataContextProvider = ({ children }, query) => {
  const [data, setData] = useState([]);
  const [likelyhoodData, setLikelyhoodData] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useStauste(false);
  const [endYears, setEndYear] = useState([]);
  const [topics, setTopics] = useState([]);
  const [sector, setSector] = useState([]);
  const [pest, setPest] = useState([]);
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState([]);
  const [source, setSource] = useState([]);

  const retriveData = (params) => {
    const someParams = params;
    setIsLoading(true);
    getData(someParams)
      .then((res) => {
        console.log({ res });
        setIsLoading(false);
        setData(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const retriveAllData = () => {
    setIsLoading(true);
    getAllData()
      .then((res) => {
        setIsLoading(false);
        setAllData(res.data);
        setEndYear(AllEndYear(res.data));
        setTopics(AllTopic(res.data));
        setSector(AllSector(res.data));
        setPest(AllPEST(res.data));
        setCountry(AllCountry(res.data));
        setRegion(AllRegion(res.data));
        setSource(AllSource(res.data));
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  const retriveEndYear = () => {
    setIsLoading(true);
    const allEndYear = AllEndYear(allData);
    // console.log({ allEndYear });
    setIsLoading(false);
    setEndYear(allEndYear);
  };

  const retriveLikelyhoodData = (params) => {
    const someParams = params;
    setIsLoading(true);
    getLikelyhoodData(someParams)
      .then((res) => {
        console.log("likelyhood data->", { res });
        setIsLoading(false);
        setLikelyhoodData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const retriveRelevanceData = (params) => {
    const someParams = params;
    setIsLoading(true);
    getRelevanceData(someParams)
      .then((res) => {
        setIsLoading(false);
        setRelevance(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (allData.length === 0) {
      retriveAllData();
    }
    if (endYears.length === 0 && allData.length !== 0) {
      retriveEndYear();
    }
  }, [allData, endYears]);

  return (
    <GetAllDataContext.Provider
      value={{
        data,
        error,
        isLoading,
        retriveData,
        retriveAllData,
        retriveLikelyhoodData,
        retriveRelevanceData,
        allData,
        endYears,
        topics,
        sector,
        pest,
        country,
        region,
        source,
        likelyhoodData,
        relevance,
      }}
    >
      {children}
    </GetAllDataContext.Provider>
  );
};
