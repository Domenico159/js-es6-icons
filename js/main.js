

// Array di icone


const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


const colors =['#33272a','#c3f0ca','#8bd3dd'];


// console.log(types);

// Creare array con icone colorate

const iconColored = coloredIcon(icons,colors);

 console.log(iconColored);





const container = document.querySelector('.main-center') ;

// Stampo nel dom le prime icone in bianco e nero
 printIcon(iconColored,container);











/**********************************************
 * Funcions
 * ****************************************** */


// Funzione per stampare nel dom le icone

function printIcon(array,container){

    let html ='';

    array.forEach(element => {

        const {name,prefix,family,color} = element;

        html += `
        <div class="card p-20" style="color:${color};">
                <i class="${family} ${prefix}${name}"></i>
                <div class="tittle-icon">${name}</div>
            </div>`;

            return html;

    });

     container.innerHTML = html;

};


// Estraiamo i singoli type di icons

function getType(array){

    const types = [];

         array.forEach( (element) =>{

        let type =element.type ;

        if(! types.includes(type)){

            types.push(type);

        }

       });

       return types

};



// Colorare icone 

function coloredIcon(array,colors){

    const types = getType(array);

    const coloredIcons = array.map( (element) =>{

        const thisIndex = types.indexOf(element.type)

        return {
            ...element,
            color:colors[thisIndex]
        }

    } );

    return coloredIcons

};
