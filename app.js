const fruit = [
    'Apple',
    'Apricot',
    'Avocado 🥑',
    'Banana',
    'Bilberry',
    'Blackberry',
    'Blackcurrant',
    'Blueberry', 
    'Boysenberry', 
    'Currant', 
    'Cherry', 
    'Coconut', 
    'Cranberry', 
    'Cucumber', 
    'Custard apple', 
    'Damson', 
    'Date', 
    'Dragonfruit', 
    'Durian', 
    'Elderberry', 
    'Feijoa',
    'Fig', 
    'Gooseberry', 
    'Grape', 
    'Raisin', 
    'Grapefruit', 
    'Guava', 
    'Honeyberry', 
    'Huckleberry', 
    'Jabuticaba', 
    'Jackfruit', 
    'Jambul', 
    'Juniper berry', 
    'Kiwifruit', 
    'Kumquat', 
    'Lemon', 
    'Lime', 
    'Loquat', 
    'Longan', 
    'Lychee', 
    'Mango', 
    'Mangosteen', 
    'Marionberry', 
    'Melon', 
    'Cantaloupe', 
    'Honeydew', 
    'Watermelon', 
    'Miracle fruit', 
    'Mulberry', 
    'Nectarine', 
    'Nance',
    'Olive', 
    'Orange',
    'Clementine',
    'Mandarine', 
    'Tangerine', 
    'Papaya', 
    'Passionfruit', 
    'Peach', 
    'Pear', 
    'Persimmon', 
    'Plantain', 
    'Plum', 
    'Pineapple', 
    'Pomegranate', 
    'Pomelo', 
    'Quince', 
    'Raspberry', 
    'Salmonberry', 
    'Rambutan', 
    'Redcurrant',
    'Salak', 
    'Satsuma', 
    'Soursop', 
    'Star fruit', 
    'Strawberry', 
    'Tamarillo', 
    'Tamarind', 
    'Yuzu'];

//variables
const sortedFruit = fruit.sort();
const inputBox = document.querySelector('#input');
const resultsBox = document.querySelector('.results-Box');
const ul = document.querySelector('.list')


//Execute results function on keyup 
inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length){
        result = sortedFruit.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
            });

        display(result);

    } else {
        resultsBox.innerHTML = '';
    }
}

    if (!input.value.length == 0) {
        resultsBox.innerHTML = '';
    }

//function that displays reslut as an li inside of the ul
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = ''
}
