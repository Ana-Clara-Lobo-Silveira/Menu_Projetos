//1.Lógica automática para o menu(index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0){
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
// Retorna os valores do elemento(btnP1) e do index(0), ao index adiciona 1 (0+1 = 1 (numeração definida no projeto)), transforma em string, define dois caracteres para retorno, e adiciona 0 como o primeiro (01).
            const nProjeto = (index+1).toString().padStart(2,'0');
            window.location.href = `./pages/projeto${nProjeto}.html`;
        });
    });
}


criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';
// Criar uma classe que posteriormente poderá ser plicada ao CSS, por hora apenas assume a formatação normal do botão;
    btnVoltar.className = 'btn-navegacao';
    btnVoltar.style.backgroundColor ='yellow';
    
    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    // document.body.appendChild(btnVoltar);
//Como o conteúdo está no main ao invés do body, utiliza-se o queryselector(retorna um unico elemento, o primeiro da página) para buscar o main da página.

    const main = document.querySelector('main')
    main.appendChild(btnVoltar);
 };

//  Se a lista de botoes estiver vazia, significa que esta em uma pagina interna de projeto e não no index.
 if (botoesProjeto.length === 0){
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
 }