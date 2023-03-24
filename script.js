// Define the two translations
const translation2 = "كهرباء سيارات, تغيير زيت, تكييف هواء, تعبئة غاز, اكسسوارات, راديو ";
const translation1 = "Car electrics, Oil change, Air conditioning,  Gas filling,  Accessories, Radio and Cassette";

// Get the text to be translated
const textToTranslate = document.getElementById("textToTranslate");

// Set the initial translation to translation1
let currentTranslation = translation1;

// Get the button element
const translateButton = document.getElementById("translateButton");

// Add a click event listener to the button
translateButton.addEventListener("click", function () {
    // Swap between the translations
    if (currentTranslation === translation1) {
        textToTranslate.textContent = translation2.replace(/(<br>|&nbsp;)/g, '');
        currentTranslation = translation2;
    } else {
        textToTranslate.textContent = translation1.replace(/(<br>|&nbsp;)/g, '');
        currentTranslation = translation1;
    }
});
const text1 = "Our Services";
const text2 = "خدماتنا";

const title = document.getElementById("title");
let currentText = text1;


translateButton.addEventListener("click", function () {
    if (currentText === text1) {
        title.textContent = text2;
        currentText = text2;
    } else {
        title.textContent = text1;
        currentText = text1;
    }
});
