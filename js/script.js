let celulaEscolhida = null;

function selecionarImagem(celula) {
    celulaEscolhida = celula;
    const regiao = celula.getAttribute('data-regiao');

    const rect = celula.getBoundingClientRect();
    const modal = document.getElementById('modalImagem');

    modal.style.left = `${rect.left + window.scrollX}px`;
    modal.style.top = `${rect.bottom + window.scrollY}px`;

    // 🔄 Substituindo o fetch por acesso direto ao objeto
    const imagens = imagensPorRegiao[regiao] || [];

    let modalContent = ``;
    imagens.forEach(imagem => {
        modalContent += `<img src="${imagem}" alt="Imagem" onclick="adicionarImagem('${imagem}')">`;
    });
    modalContent += `<button id="fecharModal" onclick="fecharModal()">X</button>`;
    modal.innerHTML = modalContent;
    modal.style.display = 'block';
}

function adicionarImagem(imagem) {
    celulaEscolhida.innerHTML = `<img src="${imagem}" alt="Imagem" style="max-width: 100%; max-height: 100%;">`;
    fecharModal();
}

function fecharModal() {
    document.getElementById('modalImagem').style.display = 'none';
}

// Eventos para as células clicáveis
document.querySelectorAll('.vazia').forEach(celula => {
    celula.addEventListener('click', () => selecionarImagem(celula));
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', event => {
    const modal = document.getElementById('modalImagem');
    if (event.target === modal) {
        fecharModal();
    }
});

// Prevenir fechamento ao clicar dentro do modal
document.getElementById('modalImagem').addEventListener('click', event => {
    event.stopPropagation();
});
