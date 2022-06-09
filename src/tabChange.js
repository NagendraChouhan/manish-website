
const tabular = () => {
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");

    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const id = e.currentTarget.dataset.id;
            btns.forEach(function (btn) {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            articles.forEach(function (article) {
                article.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        });
    });
}
export default tabular;