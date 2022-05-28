const Planet = document.querySelector('#js_img')
const geology = document.querySelector('#geology')
const text = document.querySelector('#js_text')
const menu_img = document.querySelector('#menu-img')
let width = window.innerWidth
let cont = 1
$(document).ready(function () {
    Planet.style.transform = 'scale(1.5)'

    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})

$('#internal').click(function () {
    Planet.setAttribute('src', './images/planet-uranus-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
    Planet.style.transform = 'scale(0.9)'
    $('#internal').css('background-color', '#1ec1a2')
    $('#overview').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#overview').click(function () {
    Planet.setAttribute('src', './images/planet-uranus.svg')
    geology.style.display = 'none'
    text.innerHTML = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
    Planet.style.transform = 'scale(0.9)'
    $('#overview').css('background-color', '#1ec1a2')
    $('#internal').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#surface').click(function () {
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-uranus.svg')
    text.innerHTML = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
    $('#surface').css('background-color', '#1ec1a2')
    $('#internal').css('background-color', 'transparent')
    $('#overview').css('background-color', 'transparent')
})
$('#btn-m-f').click(function () {
    $('.btn-mobile-1').css('border-bottom', '2px solid #1ec1a2')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-uranus.svg')
    geology.style.display = 'none'
    text.innerHTML = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-s').click(function () {
    $('.btn-mobile-2').css('border-bottom', '2px solid #1ec1a2')
    $('.btn-mobile-1').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-uranus-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-l').click(function () {
    $('.btn-mobile-3').css('border-bottom', '2px solid #1ec1a2')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-1').css('border-bottom', 'none')
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-uranus.svg')
    text.innerHTML = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
    $('#surface').css('background-color', '#1ec1a2')

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
animateValue(obj, 0, 84, 1000);

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
animateValue2(obj2, 0, 17, 1000);

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
animateValue3(obj3, 0, 25, 1000);

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
animateValue3_5(obj3_5, 0, 362, 1000);

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
animateValue4(obj4, 0, 195, 1000);
