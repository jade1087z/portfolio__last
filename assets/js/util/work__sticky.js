const isVisible = [];
const colors = [];
const startPoints = [];
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Partially visible elements return true
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".work");
    const windowHeight = window.innerHeight;
    let visibleElementIndex = -1;

    elements.forEach(function (element, index) {
        const scrollHeight = window.pageYOffset;
        if (isElementVisible(element)) {
            visibleElementIndex = index;
        }
        const elementHeight = element.offsetHeight;
        const elementTop =
            element.getBoundingClientRect().top + scrollHeight + 700;

        // Save the start point of color change for each section
        startPoints[index] = elementTop - windowHeight;

        // Calculate the ratio based on the start point of color change
        let ratio = (scrollHeight - startPoints[index]) / elementHeight;

        if (ratio < 0) {
            ratio = 0;
        } else if (ratio > 1) {
            ratio = 1;
        }

        let colorValue = 255;
        colorValue -= Math.floor(ratio * 150);

        // Ensure colorValue is not less than 217
        if (colorValue < 217) {
            colorValue = 217;
        }

        // Only update background color if element is visible
        if (isVisible[index]) {
            colors[index] =
                "rgb(" +
                colorValue +
                ", " +
                colorValue +
                ", " +
                colorValue +
                ")";
            element.style.backgroundColor = colors[index];
            console.log(`Element ${index} is visible, color: ${colors[index]}`);
        } else {
            // Reset the color of the section when it is not visible
            colors[index] = "rgb(255, 255, 255)";
            element.style.backgroundColor = colors[index];
            console.log(
                `Element ${index} is not visible, color: ${colors[index]}`
            );
        }

        if (scrollHeight + windowHeight <= elementTop) {
            element.style.backgroundColor = "rgb(255, 255, 255)";
            return;
        }

        if (visibleElementIndex !== -1) {
            colors[visibleElementIndex] =
                "rgb(" +
                colorValue +
                ", " +
                colorValue +
                ", " +
                colorValue +
                ")";
            elements[visibleElementIndex].style.backgroundColor =
                colors[visibleElementIndex];
            console.log(
                `Element ${visibleElementIndex} is visible, color: ${colors[visibleElementIndex]}`
            );
        }
    });
});
