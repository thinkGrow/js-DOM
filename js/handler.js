// document
//   .getElementById("btn-update-title")
//   .addEventListener("click", function () {
//     const pageTitleElement = document.getElementById("page-title");
//     pageTitleElement.innerText = "Text changed on click";
//   });

document.getElementById("update-btn").addEventListener("click", function () {
  const titleElement = document.getElementById("page-title");
  const textIn = document.getElementById("text-me");

  console.log(titleElement.innerText);
  //   console.log(textMe);

  text = textIn.value;

  titleElement.innerText = text;

  //   titleElement.innerText = textMe.innerText;
});
