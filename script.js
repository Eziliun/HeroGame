const hero = document.querySelector('.hero')
const energy = document.querySelector('.energy')
const jump = () => {
    hero.classList.add('jump');

    setTimeout(() => {
    
        hero.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const energyPosition = energy.offsetLeft;
    const heroPosition = +window.getComputedStyle(hero).bottom.replace('px', '');

    if(energyPosition <= 110 && energyPosition > 0  && heroPosition < 80) {

        energy.style.animation = 'none';
        energy.style.left = `${energyPosition}px`;

        hero.style.animation = 'none';
        hero.style.left = `${heroPosition}px`;

        hero.src = 'Eskeleton.png';
        hero.style.width = '250px'
        hero.style.marginLeft = '50px'


        clearInterval(loop);
    }

},10)



document.addEventListener('keydown', jump);