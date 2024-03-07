(function () {
  addEventListener("DOMContentLoaded", () => {
    const workExItems = document.querySelectorAll("#resume > ul > li");

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        } else {
          entry.target.classList.remove("in");
        }
      });
    });

    Array.from(workExItems).forEach((item) => {
      intersection.observe(item);
    });

    document.querySelector(".wrapper").addEventListener("scroll", (e) => {
      if (e.target.scrollTop > document.body.scrollHeight) {
        document.querySelector("#go-up-btn").classList.add("active");
      } else {
        document.querySelector("#go-up-btn").classList.remove("active");
      }
    });

    document.querySelector("#go-up-btn").addEventListener("click", () => {
      document
        .querySelector(".wrapper")
        .scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
