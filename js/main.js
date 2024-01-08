'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  // const ul = document.querySelector('ul');
  const car_ul = document.querySelector('.car_ul');
  // const slides = ul.children;
  // const slides = ul.querySelectorAll('li');
  const slides = car_ul.querySelectorAll('li');
  let currentIndex = 0;
  const dots = [];
  let intervalTimer;
  let intervalId;

  intervalTimer = 3000;

  /* メイン */

  updatebuttons();
  setupdots();

  intervalId = setInterval(() => {
    if(currentIndex > slides.length - 3){
      currentIndex = 0;
    }else{
      ++currentIndex;
    }
    updatebuttons();
    moveslides();
    updatedots();
  }, intervalTimer);

  //メニューを開く
  open.addEventListener('click',() => {
    overlay.classList.add('show');
    open.classList.add('hide');
    close.classList.add('hide');
  });

  //メニューを閉じる
  close.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    close.classList.remove('hide');
  });

  //スライドクリック時のスライドボタンの表示・非表示、画像スライド処理
  next.addEventListener('click',() => {
    ++currentIndex;
    updatebuttons();
    moveslides();
    updatedots();
  });

  //スライドクリック時のスライドボタンの表示・非表示、画像スライド処理
  prev.addEventListener('click',() => {
    --currentIndex;
    updatebuttons();
    moveslides();
    updatedots();
  });

  //画面サイズ変更時の補正
  window.addEventListener('resize', () => {
    moveslides();
  });


  /* 関数 */

  //スライドボタンの表示・非表示
  function updatebuttons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if(!currentIndex){
      prev.classList.add('hidden');
    }else if(currentIndex === slides.length - 2){
      next.classList.add('hidden');
    }
  }

  //画像スライド処理
  function moveslides(){
    const slidewidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slidewidth * currentIndex}px)`;
    car_ul.style.transform = `translateX(${-1 * slidewidth * currentIndex}px)`;
  }

  //ドット生成・表示、クリック時のスライドボタンの表示・非表示、画像スライド、ドット表示変更
  function setupdots(){
    for(let i=0 ; i < slides.length - 1; i++){
      
      //ドット生成・表示
      const button = document.createElement('button');
      dots.push(button);
      document.querySelector('nav').appendChild(button);

      //クリック時のスライドボタンの表示・非表示、画像スライド、ドット表示変更
      button.addEventListener('click',() => {
        currentIndex = i;
        updatebuttons();
        moveslides();
        updatedots();
      });
    }
    dots[0].classList.add('current');
  }

  function updatedots(){
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

}