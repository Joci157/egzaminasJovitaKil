const renderError = () => {
  let error = document.createElement("h2");
  error.className = "error";
  error.innerHTML = "Klaida, filmas nerastas";
  document.querySelector(".movies").appendChild(error);
};

export default renderError;
