console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

// Use and Test the `addToCollection` function:
//   - Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - `console.log` each album as added using the function's returned value.
//   - After all are added, console.log the `myCollection` array.

let album1 = addToCollection(myCollection, "Vaneer", "Jose González", 2006);
console.log(album1);
let album2 = addToCollection(myCollection, "Transatlanticism", "Death Cab for Cutie", 2003);
console.log(album2);
let album3 = addToCollection(myCollection, "Everything So Far", "Pinegrove", 2015);
console.log(album3);
let album4 = addToCollection(myCollection, "Little Hell", "City and Color", 2011);
console.log(album4);
let album5 = addToCollection(myCollection, "Plea from a Cat Named Virtute", "The Weakerthans", 2003);
console.log(album5);
let album6 = addToCollection(myCollection, "Coloring Book", "Chance the Rapper", 2016);
console.log(album6);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    console.log(album.title + " by " + album.artist + ", released in " + album.yearPublished);
  }
  }
console.log("Here is my collection: ")
showCollection(myCollection)

// - Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter.
//   - Create an empty array to hold any matching results, if any.
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
function findByArtist(collection, artist) {
  let foundArtist = [];

  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    if (album.artist === artist) {
      foundArtist.push(album);
    }
  }

  return foundArtist;
}


console.log("Found Artist (Pinegrove):", findByArtist(myCollection, "Pinegrove"));

// - Create a function called `search` that will allow for searching by `artist` **and** `year`. This function should:
//   - Take in a `collection` parameter.
//   - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
//     - ```
//       { artist: 'Ray Charles', year: 1957 }
//       ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching **all** of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object, an empty search object, or missing `artist`/`year` data provided as input,
//         `return` **all albums** from the `collection` being searched.








// ### Extra Stretchy Stretch Goals

// - **NOTE**: The following stretch goals **do not have tests** associated with them.
//   - This means it's even more important to use *your own `console.log` skills* to verify that your code behaves as you expect.
// - Add an array of `tracks` to each of your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//   - ```
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION
//         3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION
//     ```
//   - Update `search` to allow an optional `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `year` properties.

// > Make sure to test all your code!













// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
