const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

document.getElementById("helloBtn")?.addEventListener("click", () => {
  alert("Hello from your first site!");
});

function loadAuthors() {
    document.getElementById("tab_content").innerHTML = `
        <div class="authors-container">
            ...
        </div>
    `;
}
