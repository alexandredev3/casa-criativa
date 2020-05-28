// Usei o express para criar minhas rotas
const express = require('express');
const server = express();

const nunjucks = require('nunjucks');

const db = require('./db');

// const ideias = [
//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//         title: 'Cursos de Programação',
//         category: 'Estudo',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },

//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729005.svg',
//         title: 'Exercícios',
//         category: 'Saúde',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },

//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729027.svg',
//         title: 'Medítação',
//         category: 'Metalidade',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },

//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729060.svg',
//         title: 'Mensagem',
//         category: 'Fazer Amigos',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },

//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729021.svg',
//         title: 'Vídeo Game',
//         category: 'Para descotrair',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },
    
//     {
//         img: 'https://image.flaticon.com/icons/svg/2729/2729070.svg',
//         title: 'Dormir',
//         category: 'Descansa',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         url: 'https://rocketseat.com.br'
//     },
// ]

// Configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static('public')); // Eu estou falando pro express configurar o static na pasta public.

// habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))

// Configuração do Nunjucks
nunjucks.configure("views", {
    express: server,    // Ele vai fazer o link com a variavel server.
    noCache: true,   // Algumas coisas estão no cache como o html, o css
})
// "views" e onde vc vai guarda seu html

// crie uma rota /
// capturo o pedido do criente
server.get('/', (resquest, response) => {
    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            console.log(err)
            return response.send('Erro no banco de dados...')
        }

        const reverseIdeias = [...rows].reverse();
        // O ...ideias quer dizer que nós estamos espalhando o conteudo da variavel ideias la dentro
    
        let lastIdeias = []
        for (let ideia of reverseIdeias) {    // Uma ideia dentro de ideias. 
                 // Ele vai pegar a variavel de frente e dar um reverse 
            // console.log(ideia) Ele vai repedir isso no terminal.
    
            if (lastIdeias.length < 2) {
                lastIdeias.push(ideia)
            }
        }
    
        // console.log(lastIdeias)
    
        // console.log(lastIdeias.length == 2)
    
        return response.render('index.html', { ideias: lastIdeias })
    })
});

server.get('/ideias', (request, response) => {
    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            console.log(err)
            return response.send('Erro no banco de dados...')
        }

        const reverseIdeias = [...rows].reverse();
        return response.render('ideias.html', { ideias: reverseIdeias })
    })
});

server.post('/', (request, response) => {
    const query = (`    
        INSERT INTO ideias(
            image,      
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);  
    `) // Values são os placheholds o query vão ser substuido pelo nossos values.

    const { image, title, category, description, link } = request.body

    const values = [
        image,
        title,
        category,
        description,
        link
    ]

    db.run(query, values, function(err) {
        if (err) {
            console.log(err)
            return response.send('Erro no banco de dados...')
        }
        // Se dar algum erro ele vai me retornar esse erro.

        return response.redirect('/ideias');
        // Quando chegar aqui ele vai jogar o usuario la pra pagina de ideias.
    })
});

// rodando meu servidor na porta 3000
server.listen(3000)