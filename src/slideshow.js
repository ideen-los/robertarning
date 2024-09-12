import './scss/slideshow.scss';
import arrowLeftImage from './img/arrow-left.svg';
import { loadData } from './data';
import { createDiv } from './helperFunctions';
import { initSwipeDetection } from './swipeDetection';

const slider = {
  slideshow: null,
  sliderTrack: null,
  currentIndex: 0,
  currentTranslateX: 0,
  images: null,
  totalImages: 0,
  slideshowWidth: 0,
  sliderTrackWidth: 0,
  offset: 0,
  gap: 20, // Set to .slider-track gap value
  transitionTime: '0.6s',
  transitionEase: 'cubic-bezier(0.65,0.05,0.36,1)',
};

// Change gap size on smaller screens
const checkViewportSizeAndChangeGap = function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    slider.gap = 10; // Smaller gap for smaller screens
  } else {
    slider.gap = 20; // Larger gap for for larger screens
  }
};

const createSlider = function () {
  const projectsOverview = document.querySelector('.projects-overview');
  const [slideshow, sliderTrack, controls, navLeft, navRight, arrowLeft, arrowRight] = createDiv(
    'slideshow',
    'slider-track',
    'controls',
    'nav-left',
    'nav-right',
    'arrow-left',
    'arrow-right'
  );

  // Create the slideshow wrapper <article>
  let slideshowWrapper = document.createElement('article');

  // Create Slider navigation arrow
  let arrowImageLeft = document.createElement('img');
  arrowImageLeft.src = arrowLeftImage;
  let arrowImageRight = document.createElement('img');
  arrowImageRight.src = arrowLeftImage;

  // Add text elements
  let headline = document.createElement('h3');
  headline.className = 'slideshow-headline';
  let description = document.createElement('p');
  description.className = 'slideshow-description';

  // Add CSS styles to elements
  sliderTrack.style.gap = `${slider.gap}px`;
  sliderTrack.style.transitionDuration = `${slider.transitionTime}`;
  sliderTrack.style.transitionTimingFunction = `${slider.transitionEase}`;

  // Add elements to the DOM
  arrowLeft.appendChild(arrowImageRight);
  arrowRight.appendChild(arrowImageLeft);
  navLeft.appendChild(arrowLeft);
  navRight.appendChild(arrowRight);
  controls.appendChild(navLeft);
  controls.appendChild(navRight);
  slideshow.appendChild(controls);
  slideshow.appendChild(sliderTrack);
  slideshowWrapper.appendChild(slideshow);
  slideshowWrapper.appendChild(headline);
  slideshowWrapper.appendChild(description);
  projectsOverview.appendChild(slideshowWrapper);

  // Define slider object keys
  slider.slideshow = slideshow;
  slider.sliderTrack = sliderTrack;
};

/* 
Fetches the slideshow image urls from data.json
*/
const getSlideshowImagesAndText = async function (imageContainer) {
  try {
    const data = await loadData();
    const headline = document.querySelector('.slideshow-headline');
    const description = document.querySelector('.slideshow-description');
    const imageData = data.slideshow.elements;
    let firstImage = null;
    let secondImage = null;
    let secondLastImage = null;
    let lastImage = null;

    // Create image tags and append them to the slider track
    imageData.forEach((image) => {
      let img = document.createElement('img');
      img.classList.add('slider-item');
      img.alt = image.title;
      img.src = image.url;
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

    // Get the text for headline and description
    headline.textContent = data.slideshow.title;
    description.innerHTML = data.slideshow.description;
  } catch (error) {
    console.log('Failed to load images:', error);
  }
};

/* 
Loads the slideshow images and returns a promise when complete.
Due to lazy loading on th whole page this function prevents all
preceding functions from executing as long as the user hasn't
scrolled near the slideshow yet.
*/
const loadSlideshowImages = async function () {
  slider.images = document.querySelectorAll('.slider-track img');
  slider.totalImages = slider.images.length;

  console.log(`Found ${slider.totalImages} images`);

  const imagePromises = Array.from(slider.images).map((img) => {
    return new Promise((resolve, reject) => {
      img.addEventListener('load', () => {
        console.log(`Image ${img.src} loaded.`);
        resolve();
      });
      img.addEventListener('error', () => {
        console.error(`Image ${img.src} failed to load.`);
        reject();
      });
    });
  });

  return Promise.all(imagePromises)
    .then(() => console.log('All images loaded successfully.'))
    .catch((error) => console.error('Error loading images:', error));
};

/* 
Adds the class .in-focus to the currently focused image
*/
const highlightFocusedImage = function (index) {
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

  highlightFocusedImage(index);
};

/* 
Moves the slider track to the right and centers the next image
*/
const moveSliderRight = function () {
  // Calculate which image should be in focus in relation to the total number of images
  slider.currentIndex = (slider.currentIndex + 1) % slider.totalImages;

  // Move the slider
  focusImage(slider.currentIndex);

  // When sliding past the actual last image, jump to the first one
  if (slider.currentIndex === slider.totalImages - 2) {
    slider.sliderTrack.style.transition = 'none';

    // Force reflow here to apply the transition style change immediately
    slider.sliderTrack.offsetHeight; // Reading offsetHeight forces a reflow

    // Quietly jump to the image before the first one
    focusImage(1);

    // Animate transition to the first image
    setTimeout(() => {
      slider.sliderTrack.style.transition = `transform ${slider.transitionTime} ${slider.transitionEase}`;
      focusImage(2);
    }, 50);
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

  // Move the slider
  focusImage(slider.currentIndex);

  // When sliding past the actual first image, jump to the last one
  if (slider.currentIndex === 1) {
    slider.sliderTrack.style.transition = 'none';

    // Force reflow here to apply the transition style change immediately
    slider.sliderTrack.offsetHeight; // Reading offsetHeight forces a reflow

    // Quietly jump to the image after the last one
    focusImage(slider.totalImages - 2);

    // Animate transition to the last image
    setTimeout(() => {
      slider.sliderTrack.style.transition = `transform ${slider.transitionTime} ${slider.transitionEase}`;
      focusImage(slider.totalImages - 3);
    }, 50);
  }

  // Set the sliderTrack to the new translateX value
  slider.sliderTrack.style.transform = `translateX(${slider.currentTranslateX}px)`;
};

/* 
Implements event handlers that execute the slider navigation on click
*/
const handleSlideshowNavigation = function () {
  const controls = document.querySelector('.slideshow .controls');

  // Function to handle navigation
  const handleNav = (event) => {
    if (event.target.classList.contains('nav-right')) {
      moveSliderRight();
    }
    if (event.target.classList.contains('nav-left')) {
      moveSliderLeft();
    }
  };

  // Listen for both click and touchend events
  controls.addEventListener('click', handleNav);
  controls.addEventListener('touchend', handleNav);
};

/* 
Handles swipes left & right via mobile
*/
const handleSwipeRight = function () {
  moveSliderLeft();
};

const handleSwipeLeft = function () {
  moveSliderRight();
};

/* 
Re-focus the image that is currently focused, when the viewport is resized
*/
const focusImageonWindowResize = async function () {
  window.onresize = function () {
    checkViewportSizeAndChangeGap();
    slider.sliderTrack.style.gap = `${slider.gap}px`;
    focusImage(slider.currentIndex);
  };
};

/* 
Initializes the slideshow
*/
export const initializeSlider = async function () {
  checkViewportSizeAndChangeGap();
  createSlider();
  await getSlideshowImagesAndText(slider.sliderTrack);
  await loadSlideshowImages();
  await handleSlideshowNavigation();
  await initSwipeDetection(slider.slideshow, handleSwipeLeft, handleSwipeRight);
  await focusImage(2);
  await focusImageonWindowResize();
};
