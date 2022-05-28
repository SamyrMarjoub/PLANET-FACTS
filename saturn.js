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
    Planet.setAttribute('src', '/images/planet-saturn-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.    `
    Planet.style.transform = 'scale(0.9)'
    $('#internal').css('background-color', '#cd5120')
    $('#overview').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#overview').click(function () {
    Planet.setAttribute('src', '/images/planet-saturn.svg')
    geology.style.display = 'none'
    text.innerHTML = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
    Planet.style.transform = 'scale(0.9)'
    $('#overview').css('background-color', '#cd5120')
    $('#internal').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#surface').click(function () {
    geology.style.display = 'block'
    Planet.setAttribute('src', '/images/planet-saturn.svg')
    text.innerHTML = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`
    $('#surface').css('background-color', '#cd5120')
    $('#internal').css('background-color', 'transparent')
    $('#overview').css('background-color', 'transparent')
})
$('#btn-m-f').click(function () {
    $('.btn-mobile-1').css('border-bottom', '2px solid #cd5120')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', '/images/planet-saturn.svg')
    geology.style.display = 'none'
    text.innerHTML = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-s').click(function () {
    $('.btn-mobile-2').css('border-bottom', '2px solid #cd5120')
    $('.btn-mobile-1').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', '/images/planet-saturn-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.    `
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-l').click(function () {
    $('.btn-mobile-3').css('border-bottom', '2px solid #cd5120')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-1').css('border-bottom', 'none')
    geology.style.display = 'block'
    Planet.setAttribute('src', '/images/planet-saturn.svg')
    text.innerHTML = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`
    $('#surface').css('background-color', '#cd5120')

})
$('.menu-mobile').click(function () {
    ++cont
    menu_img.setAttribute('src', '/images/icon-close-menu.svg')
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
        menu_img.setAttribute('src', '/images/icon-menu.svg')
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
animateValue(obj, 0, 29, 1000);

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
animateValue2(obj2, 0, 11, 1000);

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
animateValue3(obj3, 0, 58, 1000);

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
animateValue3_5(obj3_5, 0, 232, 1000);

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
animateValue4(obj4, 0, 138, 1000);