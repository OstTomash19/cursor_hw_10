const firstEv = document.querySelectorAll('[data-k]');

firstEv.forEach(el => {
    addEventListener('keydown', function(event) {
        if(event.keyCode === +(el.dataset.k)){
            el.classList.add('active');
            document.getElementById(`${event.keyCode}`).play();
        }
        //  else {
        //     // document.getElementById(`${event.keyCode}`).pause();
        //     document.getElementById(`${event.keyCode}`).currentTime = 0;
        // }
    });
    addEventListener('keyup', function(event) {
        if(event.keyCode === +(el.dataset.k)){
            el.classList.remove('active');
            document.getElementById(`${event.keyCode}`).pause();
            document.getElementById(`${event.keyCode}`).currentTime = 0;
        }
    })
});