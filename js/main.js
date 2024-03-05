(function () {
  addEventListener('DOMContentLoaded', () => {
    const workExItems = document.querySelectorAll('#resume > ul > li');

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        } else {
          entry.target.classList.remove('in');
        }
      });
    });

    Array.from(workExItems).forEach((item) => {
      intersection.observe(item);
    });
  });
})();
