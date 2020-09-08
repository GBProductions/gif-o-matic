import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
// import { temp } from "./js/one.js";
// import * as oneFunctions from "./js/one.js";
// example function call: oneFunctions.temp();

$(document).ready(function () {
  $("#go").click(function () {
    const search = $("#search").val();
    $("#search").val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_KEY}&limit=5`;
    console.log(process.env.API_KEY);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".imgs").append(
        `<img src ="${response.data[0].images.original.url}" alt="${response.data[0].title}">`
      );
      console.log(response.data[0].url);
    }
  });
});
