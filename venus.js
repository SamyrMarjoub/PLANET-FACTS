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
    Planet.setAttribute('src', './images/planet-venus-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
    Planet.style.transform = 'scale(0.9)'
    $('#internal').css('background-color', '#eda249')
    $('#overview').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#overview').click(function () {
    Planet.setAttribute('src', './images/planet-venus.svg')
    geology.style.display = 'none'
    text.innerHTML = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
    Planet.style.transform = 'scale(0.9)'
    $('#overview').css('background-color', '#eda249')
    $('#internal').css('background-color', 'transparent')
    $('#surface').css('background-color', 'transparent')
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)

})
$('#surface').click(function () {
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-venus.svg')
    text.innerHTML = `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
    $('#surface').css('background-color', '#eda249')
    $('#internal').css('background-color', 'transparent')
    $('#overview').css('background-color', 'transparent')
})
$('#btn-m-f').click(function () {
    $('.btn-mobile-1').css('border-bottom', '2px solid #eda249')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-venus.svg')
    geology.style.display = 'none'
    text.innerHTML = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-s').click(function () {
    $('.btn-mobile-2').css('border-bottom', '2px solid #eda249')
    $('.btn-mobile-1').css('border-bottom', 'none')
    $('.btn-mobile-3').css('border-bottom', 'none')
    Planet.setAttribute('src', './images/planet-venus-internal.svg')
    geology.style.display = 'none'
    text.innerHTML = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
    Planet.style.transform = 'scale(0.9)'
    setTimeout(function () {
        Planet.style.transform = 'scale(1)'
    }, 200)
})
$('#btn-m-l').click(function () {
    $('.btn-mobile-3').css('border-bottom', '2px solid #eda249')
    $('.btn-mobile-2').css('border-bottom', 'none')
    $('.btn-mobile-1').css('border-bottom', 'none')
    geology.style.display = 'block'
    Planet.setAttribute('src', './images/planet-venus.svg')
    text.innerHTML = `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
    $('#surface').css('background-color', '#eda249')

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
animateValue(obj, 0, 225, 1000);

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
animateValue2(obj2, 0, 243, 1000);

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
animateValue3(obj3, 0, 6, 1000);

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
animateValue3_5(obj3_5, 0, 52, 1000);

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
animateValue4(obj4, 0, 471, 1000);
