'use strict';

console.log('Script is running.');

{
    const openWord = document.getElementById('openWord');
    const closeWord = document.getElementById('closeWord');
    const modalWord = document.getElementById('modalWord');
    const maskWord = document.getElementById('maskWord');

    openWord.addEventListener('click', () => {
      modalWord.classList.remove('hiddenWord');
      maskWord.classList.remove('hiddenWord');
    });

    closeWord.addEventListener('click', () => {
      modalWord.classList.add('hiddenWord');
      maskWord.classList.add('hiddenWord');
    });

    maskWord.addEventListener('click', () => {
      closeWord.click();
    });
}
