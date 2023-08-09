import { BaseUrl } from "@/utils/baseUrl";
import axios from "axios";
import { SetQuery } from "@/utils/query";

export const getData = async (parameters) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte,
  } = parameters;

  const params = SetQuery(
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte
  );

  const retriveData = await axios
    .get(`${BaseUrl}/?${params ? params : ""}`)
    .then((res) => {
      console.log("url ->", { params });
      //   Intensity(res.data.data);
      //   console.log({ somedata: Liklihood(res.data.data, sampleIntensity) });
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return retriveData;
};

export const getLikelyhoodData = async (parameters) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte,
  } = parameters;

  const params = SetQuery(
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte
  );

  const retriveData = await axios
    .get(`${BaseUrl}/?${params ? params : ""}`)
    .then((res) => {
      console.log("url ->", { params });
      //   Intensity(res.data.data);
      //   console.log({ somedata: Liklihood(res.data.data, sampleIntensity) });
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return retriveData;
};

export const getRelevanceData = async (parameters) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte,
  } = parameters;

  const params = SetQuery(
    end_year,
    topic,
    sector,
    region,
    pestle,
    country,
    city,
    sort,
    gte,
    lte
  );

  const retriveData = await axios
    .get(`${BaseUrl}/?${params ? params : ""}`)
    .then((res) => {
      console.log("url ->", { params });
      //   Intensity(res.data.data);
      //   console.log({ somedata: Liklihood(res.data.data, sampleIntensity) });
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return retriveData;
};
export const getAllData = async () => {
  const retriveData = await axios
    .get(`${BaseUrl}/`)
    .then((res) => {
      //   Intensity(res.data.data);
      //   console.log({ somedata: Liklihood(res.data.data, sampleIntensity) });
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return retriveData;
};

export const Intensity = (data, sampleIntensity) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.intensity === sampleIntensity && res.intensity != null) {
      return res.intensity;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const Liklihood = (data, sampleLiklihood) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.likelihood === sampleLiklihood && res.likelihood != null) {
      return res.likelihood;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const Relevance = (data, sampleRelevance) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.relevance === sampleRelevance && res.relevance != null) {
      return res.relevance;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const StartYear = (data, sampleYear) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.start_year === sampleYear && res.start_year != null) {
      return res.start_year;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const EndYear = (data, sampleYear) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index && value != null;
  }
  const FilterIntensity = data.map((res) => {
    if (res.end_year === sampleYear && res.end_year != null) {
      return res.end_year != undefined;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const AllEndYear = (data) => {
  const FilterIntensity = data.map((res) => {
    if (res.end_year !== undefined || res.end_year !== null) {
      return res.end_year;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const AllTopic = (data) => {
  const FilterAllTopics = data.map((res) => {
    if (res.topic !== undefined || res.topic !== null || res.topic !== "") {
      return res.topic;
    }
  });
  return FilterAllTopics.filter(onlyUnique);
};

export const AllSector = (data) => {
  const FilterAllSector = data.map((res) => {
    if (res.sector !== undefined || res.sector !== null) {
      return res.sector;
    }
  });
  return FilterAllSector.filter(onlyUnique);
};

export const AllPEST = (data) => {
  const FilterAllPEST = data.map((res) => {
    if (res.pestle !== undefined || res.pestle !== null) {
      return res.pestle;
    }
  });
  return FilterAllPEST.filter(onlyUnique);
};

export const AllCountry = (data) => {
  const FilterAllCountry = data.map((res) => {
    if (res.country !== undefined || res.country !== null) {
      return res.country;
    }
  });
  return FilterAllCountry.filter(onlyUnique);
};

export const AllRegion = (data) => {
  const FilterAllRegion = data.map((res) => {
    if (res.region !== undefined || res.region !== null) {
      return res.region;
    }
  });
  return FilterAllRegion.filter(onlyUnique);
};

export const AllSource = (data) => {
  const FilterAllSource = data.map((res) => {
    if (res.source !== undefined || res.source !== null) {
      return res.source;
    }
  });
  return FilterAllSource.filter(onlyUnique);
};

export const Country = (data, sampleCountry) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.country === sampleCountry && res.country != null) {
      return res.country;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const Topics = (data, sampleTopics) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.topic === sampleTopics && res.topic != null) {
      return res.topic;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const Region = (data, sampleRegion) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.region === sampleRegion && res.region != null) {
      return res.region;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

export const City = (data, sampleCity) => {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const FilterIntensity = data.map((res) => {
    if (res.city === sampleCity && res.city != null) {
      return res.city;
    }
  });
  return FilterIntensity.filter(onlyUnique);
};

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index && value != null;
}
// const SetQuery = (
//   end_year,
//   topic,
//   sector,
//   region,
//   pestle,
//   country,
//   city,
//   sort,
//   gte,
//   lte
// ) => {
//   // ?end_year[gte]=2030&sort=end_year
//   // ?end_year[gte]=2030&sort=start_year&pestle=Economic
//   if (
//     end_year &&
//     !topic &&
//     !sector &&
//     !region &&
//     !pestle &&
//     !country &&
//     !city
//   ) {
//     if (sort && !gte && !lte) {
//       return `?end_year=${end_year}&sort=${sort}`;
//     }
//     if (sort && gte && !lte) {
//       return `?end_year[gte]=${end_year}`;
//     }
//     if (sort && gte && lte) {
//       return `?end_year[gte]=${end_year}&end_year[lte]=${end_year}`;
//     }
//     if (!sort && !gte && !lte) {
//       return `?end_year=${end_year}`;
//     }
//   }

//   if (end_year && topic && !sector && !region && !pestle && !country && !city) {
//     if (sort && !gte && !lte) {
//       return `?end_year=${end_year}&sort=${sort}&topic=${topic}`;
//     }
//     if (sort && gte && !lte) {
//       return `?end_year[gte]=${end_year}&topic=${topic}`;
//     }
//     if (sort && gte && lte) {
//       return `?end_year[gte]=${end_year}&end_year[lte]=${end_year}&topic=${topic}`;
//     }
//     if (!sort && !gte && !lte) {
//       return `?end_year=${end_year}&topic=${topic}`;
//     }
//   }

//   if (end_year && topic && sector && !region && !pestle && !country && !city) {
//     if (sort && !gte && !lte) {
//       return `?end_year=${end_year}&sort=${sort}&topic=${topic}&sector=${sector}`;
//     }
//     if (sort && gte && !lte) {
//       return `?end_year[gte]=${end_year}&topic=${topic}&sector=${sector}`;
//     }
//     if (sort && gte && lte) {
//       return `?end_year[gte]=${end_year}&end_year[lte]=${end_year}&topic=${topic}&sector=${sector}`;
//     }
//     if (!sort && !gte && !lte) {
//       return `?end_year=${end_year}&topic=${topic}&sector=${sector}`;
//     }
//   }

//   if (end_year && topic && sector && region && !pestle && !country && !city) {
//     if (sort && !gte && !lte) {
//       return `?end_year=${end_year}&sort=${sort}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//     if (sort && gte && !lte) {
//       return `?end_year[gte]=${end_year}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//     if (sort && gte && lte) {
//       return `?end_year[gte]=${end_year}&end_year[lte]=${end_year}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//     if (!sort && !gte && !lte) {
//       return `?end_year=${end_year}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//   }

//   if (end_year && topic && sector && region && pestle && !country && !city) {
//     if (sort && !gte && !lte) {
//       return `?end_year=${end_year}&sort=${sort}&topic=${topic}&sector=${sector}&region=${region}&pestle=${pestle}`;
//     }
//     if (sort && gte && !lte) {
//       return `?end_year[gte]=${end_year}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//     if (sort && gte && lte) {
//       return `?end_year[gte]=${end_year}&end_year[lte]=${end_year}&topic=${topic}&sector=${sector}&region=${region}&pestle=${pestle}`;
//     }
//     if (!sort && !gte && !lte) {
//       return `?end_year=${end_year}&topic=${topic}&sector=${sector}&region=${region}`;
//     }
//   }
// };
