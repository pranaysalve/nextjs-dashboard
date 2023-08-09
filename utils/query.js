export const SetQuery = (
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
) => {
  const params = {
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
  };

  let query = "";
  console.log({ params });
  for (const key in params) {
    // if (params[key]) {
    //   query += `?${key}=${params[key]}&`;
    // }
    if (params[key] && params[key] !== undefined) {
      query += `${key}=${params[key]}&`;
    }
  }


  if (query.endsWith("&")) {
    query = query.slice(0, -1);
  }

  return query;
};
