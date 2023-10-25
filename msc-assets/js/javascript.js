//================================= Count Number=================================
// document.addEventListener('DOMContentLoaded', () => {
//   "use strict";


// ------- Back-to-top-Button -----------
document.addEventListener('DOMContentLoaded', () => {
  var btn = $('#back-to-top-button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});
// --------------- AOS Scroll Function ---------------
document.addEventListener('DOMContentLoaded', () => {
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }
  aos_init();
});
/**
 * Preloader------------------------------------
 */
// const preloader = document.querySelector('#preloader');
// if (preloader) {
//   window.addEventListener('load', () => {
//     preloader.remove();
//   });
// }

const preloader = document.querySelector('#preloader');
if (preloader) {
  setTimeout(() => {
    preloader.remove();
  }, 100);
}

// ================================= Header Fixed Scrolling =================================

const header = document.querySelector('.navbar');
function toggleStickyHeader() {

  if (window.innerWidth <= 768) {
    if (window.pageYOffset > 0) {
      header.classList.add('sticky-nav');
      // Add margin to the content to make space for the sticky header
      document.body.style.marginTop = header.offsetHeight + 'px';
    } else {
      header.classList.remove('sticky-nav');
      // Reset margin when the header is not sticky
      document.body.style.marginTop = 0;
    }
  } else if (window.pageYOffset > 146) {
    header.classList.add('sticky-nav');
    // Add margin to the content to make space for the sticky header
    document.body.style.marginTop = header.offsetHeight + 'px';
  } else {
    header.classList.remove('sticky-nav');
    // Reset margin when the header is not sticky
    document.body.style.marginTop = 0;
  }
}
window.addEventListener('scroll', toggleStickyHeader);
window.addEventListener('resize', toggleStickyHeader);
toggleStickyHeader();


// =========================================================================



// ================================= Count =================================

var countElements = document.getElementsByClassName("count");
var counts = [];
var isCounting = false;
// Initialize the counts array with the initial count values
for (let i = 0; i < countElements.length; i++) {
  counts.push(parseInt(countElements[i].getAttribute("data-count"), 10) || 0);
  countElements[i].innerHTML = counts[i] + (i === 0 ? '' : '+');
}
function incrementCount(index) {
  var maxData = parseInt(countElements[index].getAttribute("max-data"), 10);
  if (!isNaN(maxData) && counts[index] < maxData) {
    counts[index]++;
    countElements[index].innerHTML = counts[index] + (index === 0 ? '' : '+');
  }
}
function checkInView() {
  var main = document.getElementById("main");
  var topElm = main.offsetTop;
  var btmElm = main.offsetTop + main.clientHeight;
  var top_screen = window.pageYOffset;
  var bottom_screen = window.pageYOffset + window.innerHeight;
  if ((bottom_screen > topElm) && (top_screen < btmElm) && !isCounting) {
    isCounting = true;

    for (let i = 0; i < countElements.length; i++) {
      incrementCount(i);
    }
    var timer = setInterval(() => {
      if (!(bottom_screen > topElm) || !(top_screen < btmElm)) {
        clearInterval(timer);
        isCounting = false;
      }
      for (let i = 0; i < countElements.length; i++) {
        incrementCount(i);
      }
    }, 1);
  }
}

window.addEventListener('scroll', checkInView);
// ======================================================================================


// ================================= Events Image slider=================================
/**
 * Init swiper slider with 1 slide at once in desktop view
 */


document.addEventListener('DOMContentLoaded', () => {

  new Swiper('.eventsslider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullets',
      // dynamicBullets: true,
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 140
      }
    }
  });
});


// ================================================================================


//================================= Featured Video=================================

document.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll(".slider-tab");
const videos = document.querySelectorAll(".video");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    const selectedTab = this.getAttribute("data-tab");

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    videos.forEach(video => {
      video.style.display = "none";
    });

    this.classList.add("active");
    document.getElementById(selectedTab).style.display = "block";

  });
});

// Show the first video tab by default
tabs[0].click();
});
// ======================================================================================


// });



// ================================= Gallery =================================
/**
 * gallery isotope and filter
 */

let portfolionIsotope = document.querySelector('.gallery-isotope');

if (portfolionIsotope) {

  let portfolioFilter = portfolionIsotope.getAttribute('data-gallery-filter') ? portfolionIsotope.getAttribute('data-gallery-filter') : '*';
  let portfolioLayout = portfolionIsotope.getAttribute('data-gallery-layout') ? portfolionIsotope.getAttribute('data-gallery-layout') : 'masonry';
  let portfolioSort = portfolionIsotope.getAttribute('data-gallery-sort') ? portfolionIsotope.getAttribute('data-gallery-sort') : 'original-order';

  window.addEventListener('load', () => {
    let portfolioIsotope = new Isotope(document.querySelector('.gallery-container'), {
      itemSelector: '.gallery-item',
      layoutMode: portfolioLayout,
      filter: portfolioFilter,
      sortBy: portfolioSort
    });
    let menuFilters = document.querySelectorAll('.gallery-isotope .gallery-flters li');
    menuFilters.forEach(function (el) {
      el.addEventListener('click', function () {
        document.querySelector('.gallery-isotope .gallery-flters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aos_init === 'function') {
          aos_init();
        }
      }, false);
    });

  })
}



// ======================== DEPARTMENT JS ==================================================


// ================================= Department Tab Fixed Scrolling =================================

const Tab = document.querySelector('.departments_tab');
const School_tilte = document.querySelector('.marquee');
function toggleStickyTab() {

  if (window.innerWidth <= 768) {
    if (window.pageYOffset > 75) {
      Tab.classList.add('sticky-tab');
      School_tilte.classList.add('school-Title-scrolling');
      // Add margin to the content to make space for the sticky Tab
      document.body.style.marginTop = Tab.offsetHeight + 'px';
    } else {
      Tab.classList.remove('sticky-tab');
      School_tilte.classList.remove('school-Title-scrolling');
      // Reset margin when the Tab is not sticky
      document.body.style.marginTop = -45;
    }
  } else if (window.pageYOffset > 230) {
    Tab.classList.add('sticky-tab');
    School_tilte.classList.add('school-Title-scrolling');
    // Add margin to the content to make space for the sticky Tab
    document.body.style.marginTop = Tab.offsetHeight + 'px';
  } else {
    Tab.classList.remove('sticky-tab');
    School_tilte.classList.remove('school-Title-scrolling');

    // Reset margin when the Tab is not sticky
    document.body.style.marginTop = -48;
  }
}
window.addEventListener('scroll', toggleStickyTab);
window.addEventListener('resize', toggleStickyTab);
toggleStickyTab();

// ==================================================================

