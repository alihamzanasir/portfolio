/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// name 
const actualName = 'Ali Hamza';

// Function to generate a random name (first and last name)
function getRandomName() {
    // const firstNames = ["Muneeb"];
    
    // const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    // const randomSecondName = firstNames[Math.floor(Math.random() * firstNames.length)];


    // Generate a random last name with random letters
    const randomFirstName = generateRandomFirstString(5);
    const randomLastName = generateRandomString(5); // Generate a random string of 5 letters

    return `${randomFirstName} ${randomLastName}`;
}

// Function to generate a random string of letters
function generateRandomString(length) {
    const fistName= 'Ali';
    const characters = 'Hamza';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    
    return result;
}

function generateRandomFirstString(length) {
    const characters = 'Hamza';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    
    return result;
}

// Function to display random names
function showRandomNames() {
    const displayNameElement = document.getElementById('display-name');
    let count = 0;

    const interval = setInterval(() => {
        displayNameElement.textContent = getRandomName(); // Display a random name
        count++;

        // Stop after 10 names (10 seconds)
        if (count >= 100) { // Show random names for 10 seconds (100 intervals of 100ms)
            clearInterval(interval); // Clear the interval when done
            showActualName(); // Call the function to show the actual name
        }
    }, 100);
}

// Function to show the actual name after stopping the random names
function showActualName() {
    document.getElementById('display-name').textContent = actualName;
}

// Execute functions
showRandomNames();

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*========== sticky navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// change color

setTimeout(function () {
    changeColor();
}, 5000); // Change color after 5000 milliseconds (5 seconds)

function changeColor() {
    var nameElement = document.getElementById('name');
    nameElement.style.color = getRandomColor();

    setTimeout(function() {
        changeColor();
    }, 1000); // Repeat the color change every 5000 milliseconds (5 seconds)
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'; // Including 0-9 for better color variety
    var color1 = '#';
    var color2 = '#';

    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
        color2 += letters[Math.floor(Math.random() * 16)];
    }

    // Create a linear gradient with the two colors
    return `linear-gradient(${color1}, ${color2})`;
}
function changeColor() {
    var nameElement = document.getElementById('name');
    const gradient = getRandomColor();

    // Set the background as a linear gradient
    nameElement.style.background = gradient;
    nameElement.style.webkitBackgroundClip = 'text'; // For WebKit browsers
    nameElement.style.color = 'transparent'; // Make the text color transparent

    setTimeout(function () {
        changeColor();
    }, 1000); // Repeat the color change every 1000 milliseconds (1 second)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'; // Including 0-9 for better color variety
    var color1 = '#';
    var color2 = '#';

    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
        color2 += letters[Math.floor(Math.random() * 16)];
    }

    // Create a linear gradient with the two colors
    return `linear-gradient(${color1}, ${color2})`;
}

function generateRandomNumbers(count) {
    let numbers = '';
    for (let i = 0; i < count; i++) {
        numbers += Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        if (i < count - 1) {
            numbers += ' '; // Add space between numbers
        }
    }
    return numbers;
}

// document.getElementById('randomNumbers').textContent = generateRandomNumbers(5);
setTimeout(function() {
    changeColor();
}, 5000); // Change color after 5000 milliseconds (5 seconds)

function changeColor() {
    var nameElement = document.getElementById('name');
    nameElement.style.color = getRandomColor();
    
    setTimeout(function() {
        changeColor();
    }, 5000); // Repeat the color change every 5000 milliseconds (5 seconds)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// function getRandomColor() {
//     var letters = '012345ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('bx-sun');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// contact us 
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
console.log("formData",formData)
    // try {
    //     const response = await fetch('http://localhost:5000/send-email', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //         alert('Your message has been sent successfully!');
    //     } else {
    //         alert('There was an error sending your message.');
    //     }
    // } catch (error) {
    //     alert('There was an error sending your message.');
    // }
});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });