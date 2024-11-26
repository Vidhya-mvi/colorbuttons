const container = document.getElementById('container');
const buttons = container.querySelectorAll('button');

buttons.forEach((button) => {
    button.dataset.originalColor = button.style.backgroundColor ;;
});

let clickCount = 0;
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        button.style.backgroundColor = button.dataset.originalColor;
    });
});


container.addEventListener('click', function (event) {
    if (event.target !== container && event.target.tagName === 'BUTTON') {
        return;
    }

    clickCount++;

    
    if (clickCount === 1) {
        buttons.forEach((button) => {
            if (button.style.backgroundColor === 'red') {
                button.style.backgroundColor = 'white';
            }
        });
    } else if (clickCount === 2) {
        buttons.forEach((button) => {
            if (button.style.backgroundColor === 'blue') {
                button.style.backgroundColor = 'white';
            }
        });
    } else if (clickCount === 3) {
        buttons.forEach((button) => {
            if (button.style.backgroundColor === 'yellow') {
                button.style.backgroundColor = 'white';
            }
        });
    }

    if (clickCount >= 3) {
        clickCount = 0;
    }
});