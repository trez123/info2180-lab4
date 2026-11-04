window.onload = function loadSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("search");
  const resultDiv = document.getElementById("result");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const url = "superheroes.php?query=" + encodeURIComponent(query);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resultDiv.innerHTML = xhr.responseText;
      } else {
        resultDiv.innerHTML = "<p>Superhero not found</p>";
      }
    };

    xhr.onerror = function () {
      resultDiv.innerHTML = "<p>Superhero not found</p>";
    };

    xhr.send();
  });
};
