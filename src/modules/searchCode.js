import ajaxService from "./ajaxService";
import renderMovie from "./renderMovie";
import renderError from "./renderError";

const searchCode = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    document.querySelector(".movies").innerHTML = "";
    e.preventDefault();
    const searchValue = document.querySelector(".search").value;
    let apiFetchResult;
    ajaxService(searchValue)
      .then((result) => (apiFetchResult = result))
      .then(() => console.log("Filmo rezultatas", apiFetchResult))
      .then(() => {
        if (!apiFetchResult.Error) {
          renderMovie(apiFetchResult);
        } else {
          renderError();
        }
      });
  });
};

export default searchCode;
