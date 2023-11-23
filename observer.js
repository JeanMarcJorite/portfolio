const elements = document.querySelectorAll('.element');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { rootMargin: '0px 0px 10px 0px' });

elements.forEach(element => {
  observer.observe(element);
});