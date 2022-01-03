const ajaxService = (movieName) => {
  const url = "https://www.omdbapi.com/";
  const apiKey = "e4db3ced";

  return fetch(`${url}?t=${movieName}&apikey=${apiKey}`).then((response) =>
    response.json()
  );
};

export default ajaxService;
