let celulaEscolhida = null;

function selecionarImagem(celula) {
    celulaEscolhida = celula;
    const regiao = celula.getAttribute('data-regiao');

    const rect = celula.getBoundingClientRect();
    const modal = document.getElementById('modalImagem');

    modal.style.left = `${rect.left + window.scrollX}px`;
    modal.style.top = `${rect.bottom + window.scrollY}px`;

    fetch(`/api/imagens?regiao=${regiao}`)
        .then(res => res.json())
        .then(imagens => {
            let modalContent = ``;
            imagens.forEach(imagem => {
                modalContent += `<img src="${imagem}" alt="Imagem" onclick="adicionarImagem('${imagem}')">`;
            });
            modalContent += `<button id="fecharModal" onclick="fecharModal()">X</button>`;
            modal.innerHTML = modalContent;
            modal.style.display = 'block';
        })
        .catch(err => console.log('Erro ao carregar as imagens:', err));
}

function adicionarImagem(imagem) {
    celulaEscolhida.innerHTML = `<img src="${imagem}" alt="Imagem" style="max-width: 100%; max-height: 100%;">`;
    fecharModal();
}

function fecharModal() {
    document.getElementById('modalImagem').style.display = 'none';
}

document.querySelectorAll('.vazia').forEach(celula => {
    celula.addEventListener('click', () => selecionarImagem(celula));
});

window.addEventListener('click', event => {
    const modal = document.getElementById('modalImagem');
    if (event.target === modal) {
        fecharModal();
    }
});

document.getElementById('modalImagem').addEventListener('click', event => {
    event.stopPropagation();
});
