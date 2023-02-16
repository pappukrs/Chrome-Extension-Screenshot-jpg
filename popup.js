// const element = document.getElementById("take-screenshot");
// if (element) {
//   element.addEventListener("click", function () {
//     chrome.tabs.captureVisibleTab({ format: "jpeg" }, function (screenshotUrl) {
//       var downloadLink = document.createElement("a");
//       downloadLink.href = screenshotUrl;
//       downloadLink.download = "screenshot.jpg";
//       downloadLink.click();
//     });
//   });
// }

document
  .getElementById("take-screenshot")
  .addEventListener("click", function () {
    chrome.tabs.captureVisibleTab({ format: "jpeg" }, function (screenshotUrl) {
      var downloadLink = document.createElement("a");
      downloadLink.href = screenshotUrl;
      downloadLink.download = "screenshot.jpg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  });
