const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/imagens', (req, res) => {
    const regiao = req.query.regiao;

    const imagensPorRegiao = {
        kanto: [
            '/assets/imgs/001.png', // Bulbasaur
            '/assets/imgs/004.png', // Charmander
            '/assets/imgs/007.png' // Squirtle
        ],
        johto: [
            '/assets/imgs/152.png', // Chikorita
            '/assets/imgs/155.png', // Cyndaquil
            '/assets/imgs/158.png' // Totodile
        ]
        ,
        hoenn: [
            '/assets/imgs/252.png', // Treecko
            '/assets/imgs/255.png', // Torchic
            '/assets/imgs/258.png'  // Mudkip
        ]
        ,
        sinnoh: [
            '/assets/imgs/387.png', // Turtwig
            '/assets/imgs/390.png', // Chimchar
            '/assets/imgs/393.png'  // Piplup
        ],
        unova: [
            '/assets/imgs/495.png', // Snivy
            '/assets/imgs/498.png', // Tepig
            '/assets/imgs/501.png'  // Oshawott
        ],
        kalos: [
            '/assets/imgs/650.png', // Chespin
            '/assets/imgs/653.png', // Fennekin
            '/assets/imgs/656.png'  // Froakie
        ],
        alola: [
            '/assets/imgs/722.png', // Rowlet
            '/assets/imgs/725.png', // Litten
            '/assets/imgs/728.png'  // Popplio
        ],
        galar: [
            '/assets/imgs/810.png', // Grookey
            '/assets/imgs/813.png', // Scorbunny
            '/assets/imgs/816.png'  // Sobble
        ],
        hisui: [
            '/assets/imgs/722-hisui.png', // Rowlet (Hisui)
            '/assets/imgs/155-hisui.png', // Cyndaquil (Hisui)
            '/assets/imgs/501-hisui.png' // Oshawott (Hisui)
        ],
        paldea: [
            '/assets/imgs/906.png', // Sprigatito
            '/assets/imgs/909.png', // Fuecoco
            '/assets/imgs/912.png'  // Quaxly
        ],
    };
    res.json(imagensPorRegiao[regiao] || []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Para rodar o servidor, use o comando:
// node server.js
// E acesse o aplicativo no navegador em http://localhost:3000

