//1.Lógica automática para o menu(index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0){
    botoesProjeto.forEach((botao, index) => {
        criarBotaoVoltar.addEventListener('click', () => {
            const nProjeto = (index+1).toString().padStart(2,'0');
            window.location.href = './pages/projeto${nProjeto}.html';
        });
    });
}