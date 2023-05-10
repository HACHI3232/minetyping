'use strict';

{


  window.addEventListener('load',() =>{

    const word = 'red';
    let loc =0;

    const target = document.getElementById('target');
    target.textContent = word;

  document.addEventListener('keydown', e =>{
    if (e.key === word[loc]){
      loc++;
    }

    // 1: _ed
    // 2: __D
    // 3: ___
  });
});
}
