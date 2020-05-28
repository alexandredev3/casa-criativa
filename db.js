const sqlite3 = require('sqlite3').verbose();
// O ".verbose();" vai comunicar para nos algumas coisas no terminal.
const db = new sqlite3.Database('./arquivos.db');
// Ele vai criar um novo objeto (Orientação a objeto)

db.serialize(() => { // Ele vai permitir rodar varios comandos sql.

    // Criar a tabela
    db.run(` 
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)  // Usamos a `` porque nós podemos dar um enter

    // Inserir dado na tabela
//     const query = (`    
//     INSERT INTO ideias(
//         image,      
//         title,
//         category,
//         description,
//         link
//     ) VALUES(?,?,?,?,?);
// `)

//     const values = [
//         'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//         'Cursos de Programação',
//         'Estudo',
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugit magnam minus voluptate aspernatur dignissimos, quasi ab, at officiis porro velit sunt ex corporis totam enim numquam odio asperiores!',
//         'https://rocketseat.com.br'
//     ]

//     db.run(query, values, function(err) {
//         if (err) return console.log(err)
//         // Se dar algum erro ele vai me retornar esse erro.

//         console.log(this)
//         // se não ele vai me retorna essa variavel this
//     })

    // A function vai observar o que vem depois.
    // Callback e uma função que vem depois de uma função.
    // Assim que for insirido um dado no banco de dados ele vai chamar essa função.

    // Deletar um dado na tabela
    // db.run(`DELETE FROM ideias`, function(err) {
    //     if (err) return console.log(err)

    //     console.log('DELETEI', this)
    // })


    // Consultar dados na tabela 
    // db.all(`SELECT * FROM ideias`, function(err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })
    // Ele vai selecionar todos os registros de ideias.
});

module.exports = db;