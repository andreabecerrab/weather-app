console.log("All ready :)");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = "Look for some place";
        message2.textContent = "...";
        message3.textContent = "...";
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecast.temp + "° C";
        message3.textContent = data.forecast.summary;
      }
    });
  });
});
