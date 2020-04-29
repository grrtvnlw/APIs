var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

// Part 1 - .then() chaining
// function getUrls(array) {
//   array.forEach(url => {
//     $.get(url)
//       .then(console.log(`data was fetched for ${url}!`))
//   })
// }

// Part 2 - Promise.all()
function getUrls(array) {
  Promise.all(array).then(url => console.log("all the data was fetched!"))
}

// Part 3 - Resolve Reject

getUrls(urls);