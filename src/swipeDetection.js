let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

const minSwipeDistance = 50; // Minimum distance to consider a swipe

/* 
Detects swipes left and right
*/
export const initSwipeDetection = async function (element, onSwipeLeft, onSwipeRight) {
  // Check swipe direction
  function checkDirection() {
    const swipeDistanceX = touchendX - touchstartX;
    const swipeDistanceY = touchendY - touchstartY;

    // Check if the swipe is primarily horizontal
    if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
      // Ensure swipe distance is significant
      if (Math.abs(swipeDistanceX) > minSwipeDistance) {
        if (swipeDistanceX < 0) {
          onSwipeLeft(); // Trigger the left swipe callback
        } else {
          onSwipeRight(); // Trigger the right swipe callback
        }
      }
    }
  }

  // Attach touchstart and touchend listeners to the element
  element.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
  });

  element.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    checkDirection();
  });
};
