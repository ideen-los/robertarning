/*
Tests if sessionStorage is available in the users browser
*/
export const isSessionStorageAvailable = function () {
  try {
    const test = 'test-storage';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};
