function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    drum.classList.add('playing');
}

function removetransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('transitionend', removetransition));

window.addEventListener('keydown', playsound);