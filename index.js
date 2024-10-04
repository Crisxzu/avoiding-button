document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("click-me");
    const maxDist = 200;
    
    addEventListener("mousemove", (e) => {
        const buttonX = button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2;
        const buttonY = button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2;
        const distX = e.clientX - buttonX;
        const distY = e.clientY - buttonY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        const angle = Math.atan2(distY, distX);

        if(dist < maxDist) {
            // Multiplier par une distance plus significative
            let newX = button.getBoundingClientRect().left - Math.cos(angle) * 5;
            let newY = button.getBoundingClientRect().top - Math.sin(angle) * 5;

            newX = Math.max(0, Math.min(window.innerWidth - button.getBoundingClientRect().width, newX));
            newY = Math.max(0, Math.min(window.innerHeight - button.getBoundingClientRect().height, newY));
            
            button.style.left = newX + "px";
            button.style.top = newY + "px";
        }
    });

    button.addEventListener("click", () => {
        alert("Ah, tu m'as eu ! T'es trop fort !");
    });
});

