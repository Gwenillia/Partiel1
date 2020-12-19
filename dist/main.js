"use strict";

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
  } else {
    document.querySelector("body").style.visibility = "visible";
    document.querySelector(".lds-dual-ring").style.display = "none";
  }
};
