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
    Planet.setAttribute('src', './images/planet-mars-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
    Planet.style.transform = 'scale(0.9)'
    $('#internal').css('background-color', '#d14c32')
    $('#overview').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#overview').click(function () {
    Planet.setAttribute('src', './images/planet-mars.svg')
    geology.style.display = 'none'
    text.innerHTML = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
    Planet.style.transform = 'scale(0.9)'
    $('#overview').css('background-color', '#d14c32')
    $('#internal').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#surface').click(function () {
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-mars.svg')
    text.innerHTML = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`
    $('#surface').css('background-color', '#d14c32')
    $('#internal').css('background-color', 'transparent')
    $('#overview').css('background-color', 'transparent')
})
$('#btn-m-f').click(function () {
    $('.btn-mobile-1').css('border-bottom', '2px solid #d14c32')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-mars.svg')
    geology.style.display = 'none'
    text.innerHTML = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-s').click(function () {
    $('.btn-mobile-2').css('border-bottom', '2px solid #d14c32')
    $('.btn-mobile-1').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-mars-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-l').click(function () {
    $('.btn-mobile-3').css('border-bottom', '2px solid #d14c32')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-1').css('border-bottom', 'none')
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-mars.svg')
    text.innerHTML = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`
    $('#surface').css('background-color', '#d14c32')

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
animateValue(obj, 9, 2, 1000);

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
animateValue2(obj2, 9, 1, 1000);

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
animateValue3(obj3, 0, 3, 1000);

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
animateValue3_5(obj3_5, 0, 390, 1000);

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
animateValue4(obj4, 0, 28, 1000);
