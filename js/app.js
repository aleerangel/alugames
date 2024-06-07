function alterarStatus(id) {
    let gameCLicado = document.getElementById(`game-${id}`);
    let imagem = gameCLicado.querySelector('.dashboard__item__img');
    let botao = gameCLicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = prompt (`Para confirmar a devolução, digite 'confirmar'`);
        if (confirmacao == 'confirmar') {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        } else {
            return;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}