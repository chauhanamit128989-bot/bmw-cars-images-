<script>
const searchBox = document.getElementById("searchBox");
const boxes = document.querySelectorAll(".box");

searchBox.addEventListener("keyup", function () {
  let value = searchBox.value.toLowerCase();

  boxes.forEach(box => {
    let name = box.getAttribute("data-name");

    if (name.includes(value)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});
</script>
