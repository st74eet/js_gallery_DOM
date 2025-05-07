'use strict';

const largeImg = document.querySelector('img[id="largeImg"]');
const list = document.querySelector('ul');

list.addEventListener('click', (listEvent) => {
  listEvent.preventDefault();

  const listItem = listEvent.target.closest('.list-item__link');

  largeImg.src = listItem.href;
});
