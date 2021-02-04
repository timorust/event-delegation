
// very bad
// const $button = document.getElementsByTagName('button');
// $button.addEventListener('click', () => {
//     console.log('myClick');
// })


// bad
// const $button = document.getElementsByTagName('button');
//
// console.log($button);
//
// $button.item(0).addEventListener('click', () => {
//     console.log('click');
// })



// better
// HTML Collection to Array

// step -1: get HTML node collection
// const $allButtonsCollection = document.getElementsByTagName('button');
//
// // step-2: turn in intro Array data type to get all prototypes
// const allButtonsArray = Array.from($allButtonsCollection);
//
//
// console.log(allButtonsArray);
//
// allButtonsArray.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('click');
//         document.body.innerHTML += '<button>Click</button>';
//     })
// })


// event -- delegation

const $wrapperElement = document.getElementById('wrapper');

$wrapperElement.addEventListener('click', (event) => {
    if(event.target.localName !== 'button'){
        console.error('NOT BUTTON');
        return false;
    }

    $wrapperElement.innerHTML += '<button>Click</button>';
console.info('click button');
})
