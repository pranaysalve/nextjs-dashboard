import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { createPopper } from "@popperjs/core";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { GetAllDataContext } from "../../service/getData.context";
import SelectSearch from "react-select-search";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const LikelihoodBarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [query, setQuery] = useState(null);
  const [chartOptions, setChartOptions] = useState({});
  const {
    likelyhoodData,
    retriveLikelyhoodData,
    isLoading,
    error,
    endYears,
    topics,
    sector,
    pest,
    country,
    region,
    source,
  } = useContext(GetAllDataContext);
  //setting visual variables
  const [selectEndYear, setSelectEndYear] = useState();
  const [selectTopic, setSelectTopic] = useState();
  const [selectSector, setSelectSector] = useState();
  const [selectPEST, setSelectPEST] = useState();
  const [selectRegion, setSelectRegion] = useState();
  const [selectCountry, setSelectCountry] = useState();
  const [selectCity, setSelectCity] = useState();
  const [selectSource, setSelectSource] = useState();

  // console.log({ data });
  useEffect(() => {
    const someOtherData = likelyhoodData;
    console.log("likelihood", { someOtherData });
    const sectors = someOtherData ? someOtherData.map((res) => res.sector) : "";
    const intesity = someOtherData
      ? someOtherData.map((res) => {
          return res.likelihood;
        })
      : "";

    setChartData({
      labels: sectors,
      datasets: [
        {
          label: "Likelihood",
          data: intesity,
          borderColor: "rgb(23, 12, 235)",
          backgroundColor: "rgb(23, 12, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Intensity",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [likelyhoodData]);

  useEffect(() => {
    const params = {
      end_year: selectEndYear,
      topic: selectTopic,
      sector: selectSector,
      pestle: selectPEST,
      region: selectRegion,
      country: selectCountry,
      source: selectSource,
    };
    console.log({ selectCountry });
    retriveLikelyhoodData(params);
  }, [
    selectEndYear,
    selectTopic,
    selectSector,
    selectPEST,
    selectRegion,
    selectCountry,
    selectSource,
  ]);

  return (
    <>
      <div className="w-full md:col-span-3 relative lg:h-[70vh] h-auto m-auto p-4 border rounded-lg bg-white">
        {/* Dropdown start */}
        {isLoading && !endYears ? (
          <div>Loading</div>
        ) : (
          //
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectEndYear}
                  onChange={(e) => setSelectEndYear(e.target.value)}
                >
                  <option value={""}>Choose End Year</option>
                  {endYears.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectTopic}
                  onChange={(e) => setSelectTopic(e.target.value)}
                >
                  <option value={""}>Choose a Topic</option>
                  {topics.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectSector}
                  onChange={(e) => setSelectSector(e.target.value)}
                >
                  <option value={""}>Choose Sector</option>
                  {sector.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectPEST}
                  onChange={(e) => setSelectPEST(e.target.value)}
                >
                  <option value={""}>Choose a PEST</option>
                  {pest.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectRegion}
                  onChange={(e) => setSelectRegion(e.target.value)}
                >
                  <option value={""}>Choose Region</option>
                  {region.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectCountry}
                  onChange={(e) => setSelectCountry(e.target.value)}
                >
                  <option value={""}>Choose Country</option>
                  {country.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectSource}
                  onChange={(e) => setSelectSource(e.target.value)}
                >
                  <option value={""}>Choose Source</option>
                  {source.sort().map((res, index) => {
                    return (
                      <option key={index} value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
              </p>
            </div>
          </>
        )}

        {/* Dropdown end */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
