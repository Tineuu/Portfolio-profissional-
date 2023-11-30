
function typeWriterEffect(element, text, speed) {
    let i = 0;
    const interval = setInterval(function() {
        element.innerHTML += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(interval);
        }
    }, speed);
}


const headerTitle = document.querySelector('header h1');


const typingSpeed = 100;


typeWriterEffect(headerTitle, introText, typingSpeed);
