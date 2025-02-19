document.addEventListener('DOMContentLoaded', function () {
  const naoButton = document.getElementById('Não');

  naoButton.addEventListener('click', () => {
    const box = document.querySelector('.box');
    const maxWidth = box.clientWidth - naoButton.clientWidth;
    const maxHeight = box.clientHeight - naoButton.clientHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
    naoButton.style.pointerEvents = 'none';

    setTimeout(() => {
      naoButton.style.pointerEvents = 'auto';
    }, 2000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const simButton = document.getElementById('Sim');
  const naoButton = document.getElementById('Não');

  naoButton.addEventListener('click', () => {
    const box = document.querySelector('.box');
    const maxWidth = box.clientWidth - naoButton.clientWidth;
    const maxHeight = box.clientHeight - naoButton.clientHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
    naoButton.style.pointerEvents = 'none';

    setTimeout(() => {
      naoButton.style.pointerEvents = 'auto';
    }, 2000);
  });

  simButton.addEventListener('click', () => {
    // Redirecionar para a nova página quando "Sim" é clicado
    window.location.href = 'quem sabe.html'; // Substitua "nova_pagina.html" pelo URL da página desejada
  });
});
