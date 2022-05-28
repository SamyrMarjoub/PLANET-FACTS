const Planet = document.querySelector('#js_img')
const geology = document.querySelector('#geology')
const text = document.querySelector('#js_text')
const menu_img = document.querySelector('#menu-img')
let cont = 1
let width = window.innerWidth
$(document).ready(function () {
    Planet.style.transform = 'scale(1.5)'

    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})

$('#internal').click(function () {
    Planet.setAttribute('src', './images/planet-jupiter-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
    Planet.style.transform = 'scale(0.9)'
    $('#internal').css('background-color', '#d83a34')
    $('#overview').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#overview').click(function () {
    Planet.setAttribute('src', './images/planet-jupiter.svg')
    geology.style.display = 'none'
    text.innerHTML = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
    Planet.style.transform = 'scale(0.9)'
    $('#overview').css('background-color', '#d83a34')
    $('#internal').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#surface').click(function () {
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-jupiter.svg')
    text.innerHTML = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
    $('#surface').css('background-color', '#d83a34')
    $('#internal').css('background-color', 'transparent')
    $('#overview').css('background-color', 'transparent')
})
$('#btn-m-f').click(function () {
    $('.btn-mobile-1').css('border-bottom', '2px solid #d83a34')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-jupiter.svg')
    geology.style.display = 'none'
    text.innerHTML = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-s').click(function () {
    $('.btn-mobile-2').css('border-bottom', '2px solid #d83a34')
    $('.btn-mobile-1').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-jupiter-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-l').click(function () {
    $('.btn-mobile-3').css('border-bottom', '2px solid #d83a34')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-1').css('border-bottom', 'none')
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-jupiter.svg')
    text.innerHTML = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665. `
    $('#surface').css('background-color', '#d83a34')

})
$('.menu-mobile').click(function () {
    ++cont
    menu_img.setAttribute('src', './images/icon-close-menu.svg')
    if (cont % 2 == 0) {
        if (width <= 320) {
            $('body').css('overflow', 'visible')
            $('html').css('overflow', 'visible')
        }else{
            $('body').css('overflow', 'hidden')
            $('html').css('overflow', 'hidden')
        }
        $('.menu-mobile-div').show('fast')
    } else {
        $('.menu-mobile-div').hide('fast')
        menu_img.setAttribute('src', './images/icon-menu.svg')
        $('body').css('overflow', 'visible')
        $('html').css('overflow', 'visible')
    }
})

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("revolution-time");
animateValue(obj, 0, 12, 1000);

function animateValue2(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj2 = document.getElementById("rotation-time");
animateValue2(obj2, 0, 10, 1000);

function animateValue3(obj, start, end, duration) {
    let startTimestamp = null;
    let string = ''
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        string = Math.floor(progress * (end - start) + start);

        obj.innerHTML = string

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj3 = document.getElementById("radius-1");
animateValue3(obj3, 0, 69, 1000);

function animateValue3_5(obj, start, end, duration) {
    let startTimestamp = null;
    let string = ''
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        string = Math.floor(progress * (end - start) + start);
        obj.innerHTML = string
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj3_5 = document.querySelector(".radius-2");
animateValue3_5(obj3_5, 0, 911, 1000);

function animateValue4(obj, start, end, duration) {
    let startTimestamp = null;
    let string = ''
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        string = Math.floor(progress * (end - start) + start);

        obj.innerHTML = string

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj4 = document.getElementById("temp");
animateValue4(obj4, 0, 108, 1000);
