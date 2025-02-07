const grButton = document?.querySelector('[data-growButtonMenu]')
const grNavActive = document?.querySelector('[data-grNavActive]')

grButton?.addEventListener('click', () => {
   grButton.classList.toggle('gr-dropdown-active')
   grNavActive.classList.toggle('gr-nav-active')
})
