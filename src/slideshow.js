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
  gap: 60, // Set to .slider-track gap value
  transitionTime: '0.6s',
  transitionEase: 'cubic-bezier(0.65,0.05,0.36,1)',
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

const highlightImage = function (index) {
  Array.from(slider.images).forEach((image) => {
    if (image.classList.contains('in-focus')) {
      image.classList.remove('in-focus');
    }
  });

  let focusedImageAttribute = slider.images[index].getAttribute('data-id');

  // Add .in-focus class to all images with the same data-id attribute
  Array.from(slider.images).forEach((image) => {
    if (image.getAttribute('data-id') === focusedImageAttribute) {
      image.classList.add('in-focus');
    }
  });
};

/* 
1. Determindes which image should be in focus by the argument provided and
calculates its width.
2. Calculates the width of the slider container and the slider track. Also 
calculates the width of the slider elements that precede the image in focus.
3. Calculates the value by which the slider track needs to be moved to bring
the image in focus determined at the beginning.

@param {number} index of the image that should be in focus
*/
const focusImage = async function (index) {
  // Calculate slideshow and slider-track width
  slider.slideshowWidth = slider.slideshow.offsetWidth;
  slider.sliderTrackWidth = slider.slideshow.scrollWidth;

  // Reset offset before recalculating
  slider.offset = 0;

  // Set preIndex to currentIndex
  slider.prevIndex = slider.currentIndex;
  // Set currentIndex to the image we want to show initially
  slider.currentIndex = index;
  let imageInFocusWidth = slider.images[slider.currentIndex].offsetWidth;
  // Get the preceding images
  let precedingImages = Array.from(slider.images).slice(0, slider.currentIndex);

  let translateXValue;

  // Calculate the total width of preceding images plus flex gap
  precedingImages.forEach((image) => {
    slider.offset += image.offsetWidth + slider.gap;
  });

  // Calculate the translateX value to center the image
  translateXValue = slider.offset - slider.slideshowWidth / 2 + imageInFocusWidth / 2;

  // Update currentTranslateX value
  slider.currentTranslateX = -translateXValue;

  // Set the sliderTracks translateX value to focus the correct image
  slider.sliderTrack.style.transform = `translateX(${slider.currentTranslateX}px)`;

  highlightImage(index);
};

/* 
Moves the slider track to the right and centers the next image
*/
const moveSliderRight = function () {
  // Calculate which image should be in focus in relation to the total number of images
  slider.currentIndex = (slider.currentIndex + 1) % slider.totalImages;

  // Move the slider
  focusImage(slider.currentIndex);

  // Reset offset and currentTranslateX values when we jump back to the first image
  if (slider.currentIndex === slider.totalImages - 2) {
    slider.sliderTrack.style.transition = 'none';
    focusImage(1);
    requestAnimationFrame(() => {
      slider.sliderTrack.style.transition = `transform ${slider.transitionTime} ${slider.transitionEase}`;
      focusImage(2);
    });
  }

  // Set the sliderTrack to the new translateX value
  slider.sliderTrack.style.transform = `translateX(${slider.currentTranslateX}px)`;
};

/* 
Moves the slider track to the left and centers the next image
*/
const moveSliderLeft = function () {
  // Calculate which image should be in focus in relation to the total number of images
  slider.currentIndex = (slider.currentIndex - 1 + slider.totalImages) % slider.totalImages;
  console.log('current focused image:', slider.currentIndex);

  // Move the slider
  focusImage(slider.currentIndex);

  // Reset offset and currentTranslateX values when we jump back to the first image

  if (slider.currentIndex === 1) {
    slider.sliderTrack.style.transition = 'none';
    focusImage(slider.totalImages - 2);
    requestAnimationFrame(() => {
      slider.sliderTrack.style.transition = `transform ${slider.transitionTime} ${slider.transitionEase}`;
      focusImage(slider.totalImages - 3);
    });
  } /*  else if (slider.currentIndex === slider.images.length - 2) {
    slider.sliderTrack.style.transition = 'none';
    focusImage(slider.totalImages.length - 2);
    requestAnimationFrame(() => {
      slider.sliderTrack.style.transition = `transform ${slider.transitionTime}`;
      focusImage(slider.totalImages.length - 2);
    });
  } */

  // Set the sliderTrack to the new translateX value
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
    if (event.target.classList.contains('nav-left')) {
      moveSliderLeft();
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
