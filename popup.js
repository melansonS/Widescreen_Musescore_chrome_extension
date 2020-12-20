function click(e) {
  chrome.tabs.executeScript(null,
      {file: "content.js"});
  window.close();
}
document.addEventListener('DOMContentLoaded', function () {
  const myButton = document.getElementById("myButton");
  myButton.addEventListener('click', click);
});