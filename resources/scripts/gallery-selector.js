const tagContainer = document.getElementById('tagContainer');
const galleriesContainer = document.getElementById('galleries');
const urlParams = new URLSearchParams(window.location.search);
const selectedGallery = urlParams.get('gallery');

const tags = [
  { name: 'GlamourPlate', backgroundColor: '#2ac955' },
  { name: 'Headpieces', backgroundColor: '#f5a92f' },
  { name: 'Jewelry', backgroundColor: '#f75a2a' },
  { name: 'Chestpieces', backgroundColor: '#ff392b' },
  { name: 'Handwear', backgroundColor: '#b62af7' },
  { name: 'Legwear', backgroundColor: '#f57dad' },
  { name: 'Footwear', backgroundColor: '#2a83f7' },
];
const galleries = [
  {
    name: 'Attire One',
    url_id: 'attire-one',
    images: [
      { src: 'gallery/attires/glamourplates/attire-one/0.gif', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/1.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/2.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/3.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/4.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/5.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/6.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/7.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/8.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/9.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/10.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/11.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/12.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/13.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/14.png', tags: 'GlamourPlate' },
      { src: 'gallery/attires/glamourplates/attire-one/15.png', tags: 'GlamourPlate' },
    ],
  },
  
  {
    name: 'Miniskirt',
    url_id: 'miniskirt',
    images: [
      { src: 'gallery/attires/accessories/miniskirt/1.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/2.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/3.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/4.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/5.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/6.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/7.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/8.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/9.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/10.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/11.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/12.png', tags: 'Legwear' },
      { src: 'gallery/attires/accessories/miniskirt/13.png', tags: 'Legwear' },
    ],
  },

  {
    name: 'Wing Earring',
    images: [
      { src: 'gallery/jewelry/1.png', tags: 'Jewelry' },
      { src: 'gallery/jewelry/2.png', tags: 'Jewelry' },
      { src: 'gallery/jewelry/3.png', tags: 'Jewelry' },
      { src: 'gallery/jewelry/4.png', tags: 'Jewelry' },

    ],
  },
];


function createGallery(gallery) {
  const galleryElement = document.createElement('div');
  galleryElement.classList.add('gallery');
  galleryElement.dataset.tags = gallery.images.reduce((tags, image) => `${tags} ${image.tags}`, '');

  // Create a title element for the gallery
  const titleElement = document.createElement('div');
  titleElement.classList.add('gallery-title');
  titleElement.innerText = gallery.name;
  galleryElement.appendChild(titleElement);

  const largeImageContainer = document.createElement('div');
  largeImageContainer.classList.add('large-image-container');
  const largeImage = document.createElement('img');
  largeImage.src = gallery.images[0].src;
  largeImageContainer.appendChild(largeImage);

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails-container');

  gallery.images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.classList.add('thumbnail'); // Add a class for thumbnail images
    thumbnail.addEventListener('click', () => {
      largeImage.src = image.src;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });

  galleryElement.appendChild(largeImageContainer);
  galleryElement.appendChild(thumbnailsContainer);

  // Check if the current gallery's url_id matches the selectedGallery from the URL
  if (gallery.url_id === selectedGallery) {
    galleryElement.classList.add('selected-gallery');
  }

  return galleryElement;
}


function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    // Toggle the clicked tag's selection status.
    tagElement.classList.toggle('tag-selected');

    // Update the galleries based on the selected tags.
    updateGalleries();
  });

  tagContainer.appendChild(tagElement);
}

function updateGalleries() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  if (selectedTags.length === 0) {
    // If no tags are selected, hide all galleries
    for (const gallery of allGalleries) {
      gallery.style.display = 'none';
    }
  } else {
    // If tags are selected, show galleries with matching tags
    for (const gallery of allGalleries) {
      const galleryTags = gallery.dataset.tags.toLowerCase().split(' ');
      const displayGallery = selectedTags.some(tag => galleryTags.includes(tag));
      gallery.style.display = displayGallery ? 'block' : 'none';
    }
  }
}

function addGalleryToContainer(gallery) {
  const galleryElement = createGallery(gallery);
  galleriesContainer.appendChild(galleryElement);

  galleryElement.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const largeImage = galleryElement.querySelector('.large-image-container img');

    if (clickedElement === galleryElement || clickedElement === largeImage) {
      // Clicked outside the zoomed image or its thumbnails, do nothing
    }
  });
}

tags.forEach(tag => addTagToContainer(tag));
galleries.forEach(gallery => addGalleryToContainer(gallery));

document.addEventListener('click', (event) => {
  const zoomedGallery = galleriesContainer.querySelector('.gallery.zoomed');
  if (zoomedGallery && !zoomedGallery.contains(event.target)) {
    // If a zoomed gallery exists and the click is outside of it, revert the zoom
    if (zoomedImage) {
      zoomedImage.classList.remove('zoomed');
      zoomedImage = null;
    }
  }
});

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function showGalleryByName(galleryName) {
  const galleryId = galleryName.toLowerCase().replace(/\s/g, '-');
  const galleryElement = document.getElementById(galleryId);
  if (galleryElement) {
    galleryElement.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  for (const gallery of allGalleries) {
    if (gallery.classList.contains('selected-gallery')) {
      gallery.style.display = 'block';
    } else {
      gallery.style.display = 'none';
    }
  }
});