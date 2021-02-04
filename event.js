// get element id="wrapper" from HTML
const $wrapperElement = document.getElementById('wrapper');

// declaration  function
const sayHello = (event) => {

    console.log(event);
    const colorList= ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', 'e5b3fe#', '#073b4c']
    const randNumber = Math.floor((Math.random() * colorList.length));
    $wrapperElement.style.backgroundColor = colorList[randNumber];

// ask element is of button type
    const isButton = event.target.localName === 'button';
    // if(isButton || event.altKey){
    //     console.log('Hello');
    // }
    if(isButton && event.altKey){console.log('Hello');}
}


// use function as callback
$wrapperElement.addEventListener('click', sayHello);