
    function salvarImagem() {
        const tabela = document.getElementById("tierListTable");
        html2canvas(tabela, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            scale: 2, 
        }).then(canvas => {
            const link = document.createElement("a");
            link.download = "meus-queridos-inicias.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    } 

