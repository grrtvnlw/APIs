const button = document.querySelector('button') 
button.addEventListener('click', handleClick)

function handleClick(e) {
  // button.span.style.display = "block" 
  $.get('https://dog.ceo/api/breeds/image/random')
    .then((data) => {
    $("#myImage").attr('src', data.message)
    const imageDiv = document.querySelector('#images')
    imageDiv.innerHTML = ""; 
    doggoImage = document.createElement('img');
    doggoImage.setAttribute('src', data.message)
    doggoImage.setAttribute('src', data.message)
    doggoImage.style.width = "60%";
    imageDiv.appendChild(doggoImage)
    // button.textContent = "Generate doggo"
  });
}

$(document).ready(function() {
  $.get('https://dog.ceo/api/breeds/list')
    .then((data) => {
      const breeds = data.message;
      const select = document.getElementById('dog-select');
      breeds.forEach((breed) => {
        console.log(breed);
        const option = document.createElement('option');
        option.value = breed;
        option.textContent = breed;
        select.appendChild(option);
      });
    });
});

const select = document.querySelector('select') 
select.addEventListener('change', handleChange)

function handleChange(e) {
  // const breedName = this.value
  $.get(`https://dog.ceo/api/breed/${this.value}/images/random`)
    .then((data) => {
    $("#myImage").attr('src', data.message)
    const imageDiv = document.querySelector('#images') 
    imageDiv.innerHTML = "";
    doggoImage = document.createElement('img');
    doggoImage.setAttribute('src', data.message)
    doggoImage.setAttribute('src', data.message)
    doggoImage.style.width = "60%";
    imageDiv.appendChild(doggoImage)
    // button.textContent = "Generate doggo"
  });
}

$(document).ready( function()
{
  $('#spinner').on('click', function()
  {
    $('body').addClass('busy');
  });
}); 