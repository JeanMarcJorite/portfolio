// Select all images
const images = document.querySelectorAll('.swiper-slide img');

// Function to add 'blur' class to all images and zoom to the hovered image
function addBlur(e) {
  images.forEach(img => {
    if (img !== e.target) {
      img.classList.add('blur');
    } else {
      img.classList.add('zoom');
    }
  });
}

// Function to remove 'blur' and 'zoom' classes from all images
function removeBlur() {
  images.forEach(img => img.classList.remove('blur', 'zoom'));
}

// Add event listeners to all images
images.forEach(img => {
  img.addEventListener('mouseover', addBlur);
  img.addEventListener('mouseout', removeBlur);
});



document.querySelector('a[href="#swiper-section"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#swiper-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

if ('scrollRestoration' in history) {
  // Backward compatibility
  history.scrollRestoration = 'manual';
}

window.onload = function() {
  console.log('Window loaded');
  window.scrollTo(0, 0);
}
