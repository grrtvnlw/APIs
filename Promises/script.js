var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

function getUrls(array) {
  array.forEach(url => {
    $.get(url)
      .then(console.log(`data was fetched for ${url}!`))
  })
}

getUrls(urls);