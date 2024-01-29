//ресурс 
//https://swiperjs.com

let swiper = new Swiper('.swiper_about', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  let swiper2 = new Swiper('.swiper_teachers', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // effect: coverflow,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

//   $('.swiper_teachers').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

  let swiper3 = new Swiper('.swiper_reviews', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  //details

  function onToggle(event) {
    if (event.target.open) {
      document.querySelectorAll(".questions__table_item > details[open]").forEach((el) => {
        // Исключаем из перебора елемент который мы только что открыли
        if (el === event.target) {
          return;
        }
  
        // Закрываем все остальные елементы <details>
        el.open = false;
      });
    }
  }
  
  // Вешаем наблюдатель на все елементы <details> внутри акордиона
  document
    .querySelectorAll(".questions__table_item > details")
    .forEach((el) => el.addEventListener("toggle", onToggle));

//ленивая загрузка 

const images = document.querySelectorAll('img[data-src]');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
      observer.unobserve(lazyImage);
    }
  });
}, options);

images.forEach(image => {
  imageObserver.observe(image);
});