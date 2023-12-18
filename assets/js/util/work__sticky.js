window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.work');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const scrollHeight = window.pageYOffset;
        const elementTop = element.getBoundingClientRect().top + scrollHeight + 300; // 여기에서 100을 뺍니다.
        const elementHeight = element.offsetHeight;

        if (scrollHeight + windowHeight <= elementTop) {
            element.style.backgroundColor = 'rgb(255, 255, 255)';
            return;
        }

        let ratio = (scrollHeight + windowHeight - elementTop) / elementHeight;

        if (ratio < 0) {
            ratio = 0;
        } else if (ratio > 1) {
            ratio = 1;
        }

        let colorValue = 255;

        colorValue -= Math.floor(ratio * 50);

        element.style.backgroundColor = 'rgb(' + colorValue + ', ' + colorValue + ', ' + colorValue + ')';
    });
});