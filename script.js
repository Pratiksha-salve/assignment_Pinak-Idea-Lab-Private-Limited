const boxes = document.querySelectorAll('.boxes');

boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        gsap.to(box, {
            duration: 1, // Adjusted for smoother animation
            scale: 1.1,
            rotation: 360,
            ease: "power2.out"
        });
    });

    box.addEventListener("mouseleave", () => {
        gsap.to(box, {
            duration: 2,
            scale: 1,
            rotation: 0,
            ease: "power2.out"
        });
    });
});