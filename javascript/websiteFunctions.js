function getDate() {
  document.write(new Date().getFullYear());
}
//change to pass id
function toggleContent() {
  var x = document.getElementById("gitExampleContent");
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
