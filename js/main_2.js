'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  /* メイン */

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
}