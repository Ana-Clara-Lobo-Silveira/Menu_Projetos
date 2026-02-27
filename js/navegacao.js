// CRIANDO ELEMENTO BOTAO
 function criarBotaoVoltar(){
    const btnVoltar = document.createElement('button');

// ESTILO DO BOTAO
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';
    
//CLICK  
    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    })
// COLOCAR O ELEMENTO NA PÁGINA (FINAL DA PAGINA)
    document.body.appendChild(btnVoltar);
 };

window.onload = criarBotaoVoltar()