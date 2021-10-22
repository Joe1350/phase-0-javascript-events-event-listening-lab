// const input = document.getElementById('input');

// function addingEventListener() {
//     alert('I was clicked!');
//     input.addEventListener('click', addingEventListener)
// }



// const input = document.getElementById('input');

// function clickAlert() {
//     alert('I was Clicked');
// }

// input.addEventListener('click', clickAlert);

const input = document.getElementById('input');

function addingEventListener() {
    alert('I was clicked.');
    input.addEventListener('click', addingEventListener);
}

