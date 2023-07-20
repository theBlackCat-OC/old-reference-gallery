// Select the elements
const thumbnailBox = document.querySelector('.thumbnail-box');
const extraNavItem = document.querySelector('.extra-nav-item');
const notification = document.querySelector('.notification');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(entries => {
  const thumbnailBoxVisible = thumbnailBoxIsVisible();
  const extraNavItemVisible = extraNavItemIsVisible();

  if (thumbnailBoxVisible && (extraNavItemVisible || !extraNavItemVisible)) {
    // When both thumbnail-box and extra-nav-item are visible, hide the notification
    notification.style.display = 'none';
  } else if (!thumbnailBoxVisible && extraNavItemVisible) {
    // When thumbnail-box is not visible but extra-nav-item is visible, show the notification
    notification.style.display = 'block';
  }
}, { threshold: [0] }); // Specify the threshold as 0

// Helper function to check if thumbnail-box is visible
function thumbnailBoxIsVisible() {
  const thumbnailBoxRect = thumbnailBox.getBoundingClientRect();
  return thumbnailBoxRect.top < window.innerHeight && thumbnailBoxRect.bottom >= 0;
}

// Helper function to check if extra-nav-item is visible
function extraNavItemIsVisible() {
  const extraNavItemRect = extraNavItem.getBoundingClientRect();
  return extraNavItemRect.top < window.innerHeight && extraNavItemRect.bottom >= 0;
}

// Start observing the thumbnail-box and extra-nav-item
observer.observe(thumbnailBox);
observer.observe(extraNavItem);
