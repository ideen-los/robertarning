import { isSessionStorageAvailable } from './sessionStorage';

/* 
Loads a JSON file with all data from the server and saves it
to sessionStorage if available, so the data is cached for further use.
*/
export const loadData = async function () {
  console.log('Initializing...');
  let data;

  // Get data from sessionStorage if available
  if (isSessionStorageAvailable) {
    console.log('sessionStorage available...');
    const storedData = JSON.parse(sessionStorage.getItem('data'));

    if (storedData) {
      console.log('Loaded projects from sessionStorage');
      data = storedData;
      console.log(data);
      return data;
    }
  }

  // If data is not available in sessionStorage, fetch the data from server
  try {
    console.log('Getting data...');
    const response = await fetch('/data/data.json');
    if (!response.ok) {
      // Check if the HTTP status code is in the 200-299 range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data = await response.json();
    console.log(data);

    // Save fetched data to sessionStorage
    if (isSessionStorageAvailable) {
      sessionStorage.setItem('data', JSON.stringify(data));
      console.log('Saved data to sessionStorage');
    }
    return data;
  } catch (error) {
    console.error('Failed to load data:', error);
    return null;
  }
};
