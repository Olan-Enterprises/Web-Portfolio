function lerpToTarget(element, target, circle = null) {
    const duration = 5000; // 5 seconds
    const startTime = performance.now(); // Keeps track of the current time
    const circleMaxOffset = 440; // Maximum offset for the circle stroke-dashoffset

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Clamp between 0 and 1
        const currentValue = target * progress;

        element.textContent = Math.floor(currentValue);

        if(circle) {
            const currentOffset = circleMaxOffset - (circleMaxOffset * (currentValue / 100));

            circle.style.strokeDashoffset = currentOffset;
        }

        if(progress < 1) {
            requestAnimationFrame(animate); // Continue animating if not yet complete
        }
    }

    requestAnimationFrame(animate);
}

function startLerp() {
    const spans = document.querySelectorAll('span[data-count]');
    
    spans.forEach(span => {
        const target = parseInt(span.getAttribute('data-count'), 10);
        // Check if this span is inside the "percent" div and get the svg circle if so
        const circle = span.closest('.percent') ? span.closest('.percent').querySelector('circle:nth-child(2)') : null;

        
        lerpToTarget(span, target, circle);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const skillsCard = document.querySelector(".skillsCard");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                startLerp();
                observer.unobserve(skillsCard); // Stop observing to prevent re-triggering
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(skillsCard);
});