const boxes = document.querySelectorAll('.transform-box');

boxes.forEach(box => {
    box.addEventListener('mousemove', function (e) {
        const boxRect = box.getBoundingClientRect();
        const centerX = boxRect.left + boxRect.width / 2;
        const centerY = boxRect.top + boxRect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const rotateX = deltaY / 10; // Adjust the division value for sensitivity
        const rotateY = -deltaX / 10; // Adjust the division value for sensitivity

        box.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    box.addEventListener('mouseleave', function () {
        box.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});