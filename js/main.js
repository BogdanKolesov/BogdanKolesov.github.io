const script = document.createElement('script');
script.src = 'ui/nav.js';
document.head.appendChild(script);



var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

///VIDEO
var videoBlock = document.getElementById('video-block'),
    vid = document.getElementById('vid');
videoBlock.addEventListener('click', function() {
    if (vid.paused) {
        vid.play();
        videoBlock.classList.remove('paused');
    } else {
        vid.pause();
        videoBlock.classList.add('paused');
    };
})

/////Animation/////////
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();

///VALIDATION FORM/////
var bouncer = new Bouncer('[data-validate]', {
    disableSubmit: true,
    customValidations: {
        valueMismatch: function(field) {

            // Look for a selector for a field to compare
            // If there isn't one, return false (no error)
            var selector = field.getAttribute('data-bouncer-match');
            if (!selector) return false;

            // Get the field to compare
            var otherField = field.form.querySelector(selector);
            if (!otherField) return false;

            // Compare the two field values
            // We use a negative comparison here because if they do match, the field validates
            // We want to return true for failures, which can be confusing
            return otherField.value !== field.value;

        }
    },
    messages: {
        valueMismatch: function(field) {
            var customMessage = field.getAttribute('data-bouncer-mismatch-message');
            return customMessage ? customMessage : 'Please make sure the fields match.'
        }
    }
});

document.addEventListener('bouncerFormInvalid', function(event) {
    console.log(event.detail.errors);
    console.log(event.detail.errors[0].offsetTop);
    window.scrollTo(0, event.detail.errors[0].offsetTop);
}, false);

document.addEventListener('bouncerFormValid', function() {
    alert('Form submitted successfully!');
    window.location.reload();
}, false);

///TABS
var tabs = new Tabs({
    elem: 'tabs',
    open: 1
});

///ACCORDION
var showHideButton = new Houdini('[data-houdini]');

var accordion = new Houdini('[data-houdini-group="pirates"]', {
    isAccordion: true,
    collapseOthers: true
});

var datalist = new Houdini('[data-houdini-dl] dd', {
    isAccordion: true
});
//MAP
var mapOptions = {
    center: [52.90423, 40.50496],
    zoom: 10
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

//GALLERY PAGE/