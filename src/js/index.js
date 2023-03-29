window.addEventListener('scroll', () => {
    moveScroll();
});

const moveScroll = (() => {
    const top = document.getElementById('scrollTop');
    if(window.scrollY > 300){
        top.className += " visible";
    } else {
        top.className = "scrollTop";
    }
});