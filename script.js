const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const inscrever = document.getElementById('inscrever')
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active"); // Adiciona a classe
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active"); // Remove a classe
});

