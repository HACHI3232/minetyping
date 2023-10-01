'use strict';

console.log('Script is running.');

{
    const openEditWord = document.getElementById('openEditWord');
    const closeEditWord = document.getElementById('closeEditWord');
    const modalEditWord = document.getElementById('modalEditWord');
    const maskEditWord = document.getElementById('maskEditWord');

    openEditWord.addEventListener('click', () => {
      modalEditWord.classList.remove('hiddenEditWord');
      maskEditWord.classList.remove('hiddenEditWord');
    });

    closeEditWord.addEventListener('click', () => {
      modalEditWord.classList.add('hiddenEditWord');
      maskEditWord.classList.add('hiddenEditWord');
    });

    maskEditWord.addEventListener('click', () => {
      closeEditWord.click();
    });
}
