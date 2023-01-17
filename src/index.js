//Fetch dog pics from first URL & renders to DOM
function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => renderDogs(data.message))
}

function renderDogs(dogs) {
    dogs.forEach(dog => {
    const div = document.querySelector('#dog-image-container');
    const img = document.createElement('img');
    img.setAttribute('src', dog)
    div.appendChild(img)
    });
};

//Fetch dog breeds from 2nd URL & add to DOM
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then(data => processDogs(data.message))
}

function processDogs(breeds) {
    renderBreeds(breeds);
    // dropDownSelect(breeds)
}


//places breeds onto DOM
function renderBreeds(breeds) {
    const allBreeds = Object.keys(breeds);
    
    //selecting the drop down letter
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', (event) => {
        const dogLtr = event.target.value;
        const list = document.querySelector('#dog-breeds')
        while (list.firstChild) {
            list.firstChild.remove()
        }
        //drop down letter is used to put dogs onto the DOM
        allBreeds.forEach(breed => {
            if (breed.charAt(0) === dogLtr) {
                const p = document.createElement('p')
                p.textContent= `${breed}`
                list.appendChild(p)
                p.setAttribute('onclick', 'changeTextColor(event)')
            };
        });
    });
};

//changes text color for the breed that is clicked
function changeTextColor() {
    event.target.style.color = '#663399';
}


//Runs functions once DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
});



// function dropDownSelect() {
//     const ltr = document.querySelector('#breed-dropdown')
//     ltr.addEventListener('change', (event) => {
//         const dogLtr = event.target.value;
//         return dogLtr
//     });
//     return dogLtr;
// };