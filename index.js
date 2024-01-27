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
    centeredSlides: true,

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