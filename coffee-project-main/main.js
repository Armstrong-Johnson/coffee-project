"use strict"

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

/*The renderCoffees() runs a for-loop on the coffees array below. The information stored within each obj of the array is passed as a parameter of the renderCoffee() -see BELOW- and then added to the html var. html is then returned to the tbody.innerHTML to be displayed on screen*/

function renderCoffee(coffee) {
    var html = '<div class="coffee w-50 d-inline-flex">';
    html += '<h4 class="d-none">' + coffee.id + '</h4>';
    html += '<h4 class="h4">' + coffee.name + '</h4>';
    html += '<p class="text-white-50 pt-1 ps-2">' + coffee.roast[0] + '</p>';
    html += '</div>';

    return html;
}
/*the renderCoffee() gives each key-value pair of a passed obj a <tr> <td> element so that they can be displayed within an HTML table*/

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeeSearch = coffeeName.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast[0] === selectedRoast || coffee.roast[1] === selectedRoast && coffee.name.toLowerCase().includes(coffeeSearch)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

/*This is the search function that allows us to select coffees based on their type of roast or a name that is passed in. This syntax might be useful for creating the name search functionality. updateCoffees() accesses the roast selection form and uses the selected option to run a forEach loop on the coffees arr. Any coffee with a matching roast is displayed via tbody.innerHTML*/

function addCoffee(f) {
    f.preventDefault();
    let addRoast = roastAdd.value.toString();
    let addCoffee = coffeeAdd.value.toString();
    let addID = coffees.length + 1
    let newCoffee = {}

    newCoffee.id = addID
    newCoffee.name = addCoffee
    newCoffee.roast = [addRoast,'All']


    coffees.push(newCoffee)

    tbody.innerHTML = renderCoffees(coffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: ['Light', 'All']},
    {id: 2, name: 'Half City', roast: ['Light', 'All']},
    {id: 3, name: 'Cinnamon', roast: ['Light', 'All']},
    {id: 4, name: 'City', roast: ['Medium', 'All']},
    {id: 5, name: 'American', roast: ['Medium', 'All']},
    {id: 6, name: 'Breakfast', roast: ['Medium', 'All']},
    {id: 7, name: 'High', roast: ['Dark', 'All']},
    {id: 8, name: 'Continental', roast: ['Dark', 'All']},
    {id: 9, name: 'New Orleans', roast: ['Dark', 'All']},
    {id: 10, name: 'European', roast: ['Dark', 'All']},
    {id: 11, name: 'Espresso', roast: ['Dark', 'All']},
    {id: 12, name: 'Viennese', roast: ['Dark', 'All']},
    {id: 13, name: 'Italian', roast: ['Dark', 'All']},
    {id: 14, name: 'French', roast: ['Dark', 'All']},
];
coffees.reverse()

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffee-name');

let roastAdd = document.querySelector('#roast-addition');
let coffeeAdd = document.querySelector('#coffee-addition');
let addButton = document.querySelector('#add-coffee')

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees)
coffeeName.addEventListener('input', updateCoffees)
addButton.addEventListener('click', addCoffee)
tbody.innerHTML = renderCoffees(coffees);