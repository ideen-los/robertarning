import './scss/slideshow.scss';
import { loadData } from './data';
import { createDiv } from './helperFunctions';

const slider = {
  slideshow: null,
  sliderTrack: null,
  currentIndex: 0,
  prevIndex: 0,
  currentTranslateX: 0,
  images: null,
  totalImages: 0,
  slideshowWidth: 0,
  sliderTrackWidth: 0,
  offset: 0,
  gap: 20, // Set to .slider-track gap value
};

const createSlider = function () {
  const homepage = document.querySelector('div.homepage');
  const [slideshow, sliderTrack, controls, navLeft, navRight] = createDiv(
    'slideshow',
    'slider-track',
    'controls',
    'nav-left',
    'nav-right'
  );

  // Add elements to the DOM
  controls.appendChild(navLeft);
  controls.appendChild(navRight);
  slideshow.appendChild(controls);
  slideshow.appendChild(sliderTrack);
  homepage.appendChild(slideshow);

  // Define slider object keys
  slider.slideshow = slideshow;
  slider.sliderTrack = sliderTrack;
};

/* 
Fetches the slideshow image urls from data.json
*/
const getSlideshowImages = async function (imageContainer) {
  try {
    const data = await loadData();
    const imageData = data.slideshow.elements;
    let firstImage = null;
    let secondImage = null;
    let secondLastImage = null;
    let lastImage = null;

    // Create image tags and append them to the slider track
    imageData.forEach((image) => {
      let img = document.createElement('img');
      img.className = 'slider-item';
      img.src = image.url;
      img.alt = image.title;
      img.setAttribute('data-id', image.id);

      imageContainer.appendChild(img);

      // If first, second, second last or last image is processed, clone them
      if (image === imageData[0]) {
        firstImage = img.cloneNode(true);
      }
      if (image === imageData[1]) {
        secondImage = img.cloneNode(true);
      }
      if (image === imageData[imageData.length - 2]) {
        console.log('second las image:', img);
        secondLastImage = img.cloneNode(true);
      }
      if (image === imageData[imageData.length - 1]) {
        lastImage = img.cloneNode(true);
      }
    });

    // Add the cloned images to the track
    imageContainer.appendChild(firstImage);
    imageContainer.appendChild(secondImage);
    imageContainer.prepend(lastImage);
    imageContainer.prepend(secondLastImage);
  } catch (error) {
    console.log('Failed to load images:', error);
  }
};

/* 
Loads the slideshow images and returns a promise when complete
*/
const loadSlideshowImages = async function () {
  slider.images = document.querySelectorAll('.slider-track img');
  slider.totalImages = slider.images.length;

  const imagePromises = Array.from(slider.images).map((img) => {
    return new Promise((resolve, reject) => {
      // if images are cached resolve immediatly
      if (img.complete) {
        resolve();
      } else {
        img.addEventListener('load', resolve);
        img.addEventListener('error', reject);
      }
    });
  });

  return Promise.all(imagePromises);
};

/* 
Moves the slider track to the right by centering the next image
*/
const moveSliderRight = function () {
  // Calculate slideshow and slider-track width
  slider.slideshowWidth = slider.slideshow.offsetWidth;
  slider.sliderTrackWidth = slider.slideshow.scrollWidth;

  // Reset offset before recalculating
  slider.offset = 0;

  // When the slider is moved one step, set prevIndex = currentIndex
  slider.prevIndex = slider.currentIndex;

  // Calculate which image should be in focus in relation to the total number of images
  slider.currentIndex = (slider.currentIndex + 1) % slider.totalImages;
  console.log('currentIndex:', slider.currentIndex);
  console.log('Image in focus:', slider.images[slider.currentIndex]);

  // Get the width of the image in focus
  let imageInFocusWidth = slider.images[slider.currentIndex].offsetWidth;
  console.log('image in focus width:', imageInFocusWidth);

  // Get the images that precede the image in focus
  let precedingImages = Array.from(slider.images).slice(0, slider.currentIndex);
  console.log('preceding images', precedingImages);

  // Calculate the total width of preceding images plus flex gap
  precedingImages.forEach((image) => {
    slider.offset += image.offsetWidth + slider.gap;
  });

  // Calculate the translateX value to center the current image
  let translateXValue = slider.offset - slider.slideshowWidth / 2 + imageInFocusWidth / 2;

  // Update currentTranslateX by subtracting the calculated translateXValue
  slider.currentTranslateX = -translateXValue;

  // Reset offset and currentTranslateX values when we jump back to the first image
  if (slider.currentIndex === slider.images.length - 2) {
    slider.sliderTrack.style.transition = 'none';
    focusImage(1);
    requestAnimationFrame(() => {
      slider.sliderTrack.style.transition = 'transform 0.3s';
      focusImage(2);
    });
  } else if (slider.currentIndex === 0) {
    focusImage(2);
  }

  // Set the sliderTrack to the new translateX value
  slider.sliderTrack.style.transform = `translateX(${slider.currentTranslateX}px)`;
};

const focusImage = async function (index) {
  // Calculate slideshow and slider-track width
  slider.slideshowWidth = slider.slideshow.offsetWidth;
  slider.sliderTrackWidth = slider.slideshow.scrollWidth;

  // Reset offset before recalculating
  slider.offset = 0;

  // Set preIndex to currentIndex
  slider.prevIndex = slider.currentIndex;
  // Set currentIndex to the image we want to show initially (= 1)
  slider.currentIndex = index;
  let imageInFocusWidth = slider.images[slider.currentIndex].offsetWidth;
  // Get the preceding image
  let precedingImages = Array.from(slider.images).slice(0, slider.currentIndex);

  // Calculate the total width of preceding images plus flex gap
  precedingImages.forEach((image) => {
    slider.offset += image.offsetWidth + slider.gap;
  });

  // Calculate the translateX value to center the image
  let translateXValue = slider.offset - slider.slideshowWidth / 2 + imageInFocusWidth / 2;

  console.log(slider);

  // Update currentTranslateX by subtracting the calculated translateXValue
  slider.currentTranslateX = -translateXValue;
  console.log('transform value:', slider.currentTranslateX);

  // Set the sliderTracks translateX value to focus the first image
  slider.sliderTrack.style.transform = `translateX(${slider.currentTranslateX}px)`;
};

/* 
Implements event handlers that execute the slider navigation on click
*/
const handleSlideshowNavigation = function () {
  const controls = document.querySelector('.slideshow .controls');

  controls.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-right')) {
      moveSliderRight();
    }
  });
};

/* 
Initializes the slideshow
*/
export const initializeSlider = async function () {
  createSlider();
  await getSlideshowImages(slider.sliderTrack);
  await loadSlideshowImages();
  await handleSlideshowNavigation();
  await focusImage(2);
};
