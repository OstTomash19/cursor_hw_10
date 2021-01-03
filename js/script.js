addEventListener('keydown', function(event) {
    const soundsElem = document.getElementById(`${event.keyCode}`);
    const notActiveElem = document.querySelector(`[data-k="${event.keyCode}"]`);
    const activeElem = document.querySelector(".active");
    const activeSoundsElem = document.querySelector('.soundOn');
    
    if(activeElem){
        activeElem.classList.remove('active');
        activeSoundsElem.pause();
        activeSoundsElem.classList.remove('soundOn');
    }

    soundsElem.play();
    soundsElem.classList.add('soundOn');
    soundsElem.currentTime = 0;
    notActiveElem.classList.add('active');
});

addEventListener('click', function(e) {
    const soundsElem = document.getElementById(`${e.target.dataset.k}`);
    const activeSoundsElem = document.querySelector('.soundOn');

    if(e.target.hasAttribute('data-k')) {
        soundsElem.play();
        soundsElem.classList.add('soundOn');
        soundsElem.currentTime = 0;
        console.log(e.target.dataset.k);
    } else if(activeSoundsElem) {
        activeSoundsElem.classList.remove('soundOn');
    }
    activeSoundsElem.pause();
});