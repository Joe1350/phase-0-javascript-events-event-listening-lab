// const input = document.getElementById('input')
// input.addEventListener('click', function() {
//     alert('I was clicked!')
// })

const input = document.getElementById('input')

function clickAlert() {
  alert('I was clicked!')
}

function addingEventListener() {
    input.addEventListener('click', clickAlert)
}
addingEventListener();





// const input = document.querySelector('input');

// function addingEventListener() {
//     input.addEventListener('click', function(event) {
//         return 'I was clicked.'
//     })
// }





// // const input = document.getElementById('input');

// // function addingEventListener() {
// //     alert('I was clicked!');
// //     input.addEventListener('click', addingEventListener)
// // }





// // const input = document.getElementById('input');

// // function clickAlert() {
// //     alert('I was Clicked');
// // }

// // input.addEventListener('click', clickAlert);

// const input = document.getElementById('input');

// function addingEventListener() {
//     alert('I was clicked.');
//     input.addEventListener('click', addingEventListener);
// }