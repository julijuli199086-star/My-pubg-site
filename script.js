document.addEventListener("mousemove", (e) => {
    const bgText = document.getElementById("bg-text");
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    bgText.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
