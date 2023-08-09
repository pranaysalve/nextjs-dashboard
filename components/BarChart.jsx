import React from "react";
import { IntensityBarChart } from "./BarComponents/Intensity.Bar";
import { LikelihoodBarChart } from "./BarComponents/Likelihood.Bar";
import { RelevanceBarChart } from "./BarComponents/Relevance.Bar";
export const BarChart = () => {
  return (
    <>
      <IntensityBarChart />
      <LikelihoodBarChart />
      <RelevanceBarChart />
    </>
  );
};
// import React, { useState, useEffect, useContext } from "react";
// import { Bar } from "react-chartjs-2";
// import { createPopper } from "@popperjs/core";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { GetAllDataContext } from "../service/getData.context";
// import SelectSearch from "react-select-search";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const BarChart = () => {
//   const [chartData, setChartData] = useState({
//     datasets: [],
//   });
//   const [query, setQuery] = useState(null);
//   const [chartOptions, setChartOptions] = useState({});
//   const {
//     data,
//     isLoading,
//     error,
//     retriveData,
//     endYears,
//     topics,
//     sector,
//     pest,
//     country,
//     region,
//     source,
//   } = useContext(GetAllDataContext);
//   //setting visual variables
//   const [selectEndYear, setSelectEndYear] = useState();
//   const [selectTopic, setSelectTopic] = useState();
//   const [selectSector, setSelectSector] = useState();
//   const [selectPEST, setSelectPEST] = useState();
//   const [selectRegion, setSelectRegion] = useState();
//   const [selectCountry, setSelectCountry] = useState();
//   const [selectCity, setSelectCity] = useState();
//   const [selectSource, setSelectSource] = useState();

//   // console.log({ data });
//   useEffect(() => {
//     const someOtherData = data.data;
//     const sectors = someOtherData ? someOtherData.map((res) => res.sector) : "";
//     const intesity = someOtherData
//       ? someOtherData.map((res) => res.intensity)
//       : "";

//     const sectorAndIntensity = someOtherData
//       ? someOtherData.map((res) => {
//           if (res.sector !== "" && res.intensity !== null) {
//             return { sector: res.sector, intensity: res.intensity };
//           }
//         })
//       : "";
//     const filterSectorAndIntensity = sectorAndIntensity
//       ? sectorAndIntensity.filter((res) => res)
//       : "";
//     console.log({ filterSectorAndIntensity });
//     setChartData({
//       labels: sectors,
//       datasets: [
//         {
//           // label: "Sales $ (Year 2020)",
//           data: intesity,
//           borderColor: "rgb(23, 12, 235)",
//           backgroundColor: "rgb(23, 12, 235, 0.4)",
//         },
//         // {
//         //   label: "Sales $ (Year 2021)",
//         //   data: [18127, 22201, 1990, 17938, 24182, 17842, 22475],
//         //   borderColor: "rgb(53, 162, 235)",
//         //   backgroundColor: "rgb(53, 162, 235, 0.4)",
//         // },
//         // {
//         //   label: "Sales $ (Year 2021)",
//         //   data: [18127, 22201, 1990, 17938, 24182, 17842, 22475],
//         //   borderColor: "rgb(53, 162, 235)",
//         //   backgroundColor: "rgb(53, 162, 235, 0.4)",
//         // },
//       ],
//     });
//     setChartOptions({
//       plugins: {
//         legend: {
//           position: "bottom",
//         },
//         title: {
//           display: true,
//           text: "Daily Revenue",
//         },
//       },
//       maintainAspectRatio: false,
//       responsive: true,
//     });
//   }, [data]);

//   const ChartDataSetting = () => {
//     const sectors = data.map((res) => res.sector);
//     console.log({ sectors });
//     return sector;
//     // setChartData({
//     //   labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
//     //   datasets: [
//     //     {
//     //       label: "Sales $ (Year 2020)",
//     //       data: [300, 500, 1000, 5000, 24182, 17842, 22475],
//     //       borderColor: "rgb(23, 12, 235)",
//     //       backgroundColor: "rgb(23, 12, 235, 0.4)",
//     //     },
//     //   ],
//     // });
//     // setChartOptions({
//     //   plugins: {
//     //     legend: {
//     //       position: "bottom",
//     //     },
//     //     title: {
//     //       display: true,
//     //       text: "Daily Revenue",
//     //     },
//     //   },
//     //   maintainAspectRatio: false,
//     //   responsive: true,
//     // });
//   };

//   //sample option

//   // const params = {
//   //   end_year: 2030,
//   //   topic: "transport",
//   //   // sector,
//   //   // region,
//   //   // pestle,
//   //   // country,
//   //   // city,
//   //   // sort,
//   //   // gte,
//   //   // lte,
//   // };
//   // useEffect(() => {
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     selectPEST &&
//   //     selectRegion &&
//   //     selectCountry &&
//   //     selectCity &&
//   //     selectSource
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //       region: selectRegion,
//   //       pestle: selectPEST,
//   //       country: selectCountry,
//   //       city: selectCity,
//   //       source: selectSource,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     selectPEST &&
//   //     selectRegion &&
//   //     selectCountry &&
//   //     selectCity &&
//   //     !selectSource
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //       region: selectRegion,
//   //       pestle: selectPEST,
//   //       country: selectCountry,
//   //       city: selectCity,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     selectPEST &&
//   //     selectRegion &&
//   //     selectCountry &&
//   //     !selectCity &&
//   //     !selectSource
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //       region: selectRegion,
//   //       pestle: selectPEST,
//   //       country: selectCountry,
//   //     });
//   //   }

//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     selectPEST &&
//   //     selectRegion &&
//   //     !selectSource &&
//   //     !selectCity &&
//   //     !selectCountry
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //       region: selectRegion,
//   //       pestle: selectPEST,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     selectPEST &&
//   //     !selectSource &&
//   //     !selectCity &&
//   //     !selectCountry &&
//   //     !selectRegion
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //       pestle: selectPEST,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     selectSector &&
//   //     !selectSource &&
//   //     !selectCity &&
//   //     !selectCountry &&
//   //     !selectRegion &&
//   //     !selectPEST
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //       sector: selectSector,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     !selectSector &&
//   //     !selectSource &&
//   //     !selectCity &&
//   //     !selectCountry &&
//   //     !selectRegion &&
//   //     !selectPEST
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     !selectSector &&
//   //     !selectSource &&
//   //     !selectCity &&
//   //     !selectCountry &&
//   //     !selectRegion &&
//   //     !selectPEST
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     !selectTopic &&
//   //     selectSector &&
//   //     !selectPEST &&
//   //     selectRegion &&
//   //     !selectCountry
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       sector: selectSector,
//   //       region: selectRegion,
//   //     });
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     !selectTopic &&
//   //     selectSector &&
//   //     !selectPEST &&
//   //     !selectRegion &&
//   //     !selectCountry
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       sector: selectSector,
//   //     });
//   //   }
//   // }, [
//   //   selectEndYear,
//   //   selectTopic,
//   //   selectSector,
//   //   selectPEST,
//   //   selectRegion,
//   //   selectCountry,
//   //   selectCity,
//   //   selectSource,
//   // ]);
//   // const onclickButton = async () => {
//   //   if (
//   //     selectEndYear &&
//   //     !selectTopic &&
//   //     !selectSector &&
//   //     !selectPEST &&
//   //     !selectRegion &&
//   //     !selectCountry &&
//   //     !selectCity &&
//   //     !selectSource
//   //   ) {
//   //     await retriveData({ end_year: selectEndYear });
//   //     ChartDataSetting();
//   //   }
//   //   if (
//   //     selectEndYear &&
//   //     selectTopic &&
//   //     !selectSector &&
//   //     !selectPEST &&
//   //     !selectRegion &&
//   //     !selectCountry &&
//   //     !selectCity &&
//   //     !selectSource
//   //   ) {
//   //     retriveData({
//   //       end_year: selectEndYear,
//   //       topic: selectTopic,
//   //     })
//   //       .then((res) => {
//   //         const someData = res;
//   //         console.log({ someData });
//   //         return res;
//   //       })
//   //       .catch((err) => err);
//   //   }
//   //   // if (
//   //   //   selectEndYear &&
//   //   //   selectTopic &&
//   //   //   selectSector &&
//   //   //   !selectPEST &&
//   //   //   !selectRegion &&
//   //   //   !selectCountry &&
//   //   //   !selectCity &&
//   //   //   !selectSource
//   //   // ) {
//   //   //   return retriveData({
//   //   //     end_year: selectEndYear,
//   //   //     topic: selectTopic,
//   //   //     sector: selectSector,
//   //   //   });
//   //   // }
//   //   // if (
//   //   //   selectEndYear &&
//   //   //   selectTopic &&
//   //   //   selectSector &&
//   //   //   selectPEST &&
//   //   //   !selectRegion &&
//   //   //   !selectCountry &&
//   //   //   !selectCity &&
//   //   //   !selectSource
//   //   // ) {
//   //   //   return retriveData({
//   //   //     end_year: selectEndYear,
//   //   //     topic: selectTopic,
//   //   //     sector: selectSector,

//   //   //   });
//   //   // }
//   // };

//   useEffect(() => {
//     const params = {
//       end_year: selectEndYear,
//       topic: selectTopic,
//       sector: selectSector,
//       pestle: selectPEST,
//       region: selectRegion,
//       country: selectCountry,
//       source: selectSource,
//     };

//     retriveData(params);
//     // for (const key in params) {
//     //   if (params[key]) {
//     //     // query = { `${key}`: params[key] };
//     //     // query += `${key}:${params[key]}`;
//     //     // query = (params[key]!==undefined)
//     //     const someVar = params[key] !== undefined ? params : void 0;
//     //     console.log(someVar);
//     //     console.log(params);
//     //     // retriveData(query);
//     //   }
//     // }
//   }, [
//     selectEndYear,
//     selectTopic,
//     selectSector,
//     selectPEST,
//     selectRegion,
//     selectCountry,
//     selectSource,
//   ]);

//   return (
//     <>
//       <div className="w-full md:col-span-3 relative lg:h-[70vh] h-auto m-auto p-4 border rounded-lg bg-white">
//         {/* Dropdown start */}
//         {isLoading && !endYears ? (
//           <div>Loading</div>
//         ) : (
//           //
//           <>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={selectEndYear}
//                   onChange={(e) => setSelectEndYear(e.target.value)}
//                 >
//                   <option value={""}>Choose End Year</option>
//                   {endYears.sort().map((res, index) => {
//                     return (
//                       <option key={index} value={res}>
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={selectTopic}
//                   onChange={(e) => setSelectTopic(e.target.value)}
//                 >
//                   <option value={""}>Choose a Topic</option>
//                   {topics.sort().map((res, index) => {
//                     return (
//                       <option key={index} value={res}>
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={selectSector}
//                   onChange={(e) => setSelectSector(e.target.value)}
//                 >
//                   <option value={"Choose Sector"}>Choose Sector</option>
//                   {sector.sort().map((res, index) => {
//                     return (
//                       <option key={index} value={res}>
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={selectPEST}
//                   onChange={(e) => setSelectPEST(e.target.value)}
//                 >
//                   <option value={""}>Choose a PEST</option>
//                   {pest.sort().map((res, index) => {
//                     return (
//                       <option key={index} value={res}>
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//             </div>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   value={selectRegion}
//                   onChange={(e) => setSelectRegion(e.target.value)}
//                 >
//                   <option value={""}>Choose Region</option>
//                   {region.sort().map((res, index) => {
//                     return (
//                       <option key={index} value={res}>
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option value={""}>Choose a Country</option>
//                   {country.sort().map((res, index) => {
//                     return (
//                       <option
//                         key={index}
//                         value={res}
//                         onClick={() => {
//                           setSelectEndYear(res);
//                         }}
//                       >
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//               {/* <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option value={""}>Choose City</option>
//                   {sector.sort().map((res, index) => {
//                     return (
//                       <option
//                         key={index}
//                         value={res}
//                         onClick={() => {
//                           setSelectEndYear(res);
//                         }}
//                       >
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p> */}
//               <p className="mb-3 text-gray-500 dark:text-gray-400">
//                 <select
//                   id="small"
//                   className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option value={""}>Choose Source</option>
//                   {source.sort().map((res, index) => {
//                     return (
//                       <option
//                         key={index}
//                         value={res}
//                         onClick={() => {
//                           setSelectEndYear(res);
//                         }}
//                       >
//                         {res}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </p>
//             </div>
//           </>
//         )}

//         {/* Dropdown end */}
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </>
//   );
// };
