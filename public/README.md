# WorkShopDev
    ## Casa Criativa

- index e o primeiro arquivo que o navegador vai procurar.

    A tag STRONG e usada para deixar algumas partes em negrito.


    ** Shift + Tab apaga o tab apaga o tab que vc tem.

    box-shadow: 0px 8px 16px -8 rgba(255, 0, 92, 0.16);
        --> O primeiro valor e o Eixo X,
        --> O segundo valor e o Eixo Y,
        --> O terceiro valor e o Blur,
        --> O quarto valor e o espalhamento.
        --> O quinto valor e a cor.

    Id tem mais Força do que uma Class

    li*3>a 
        * Vai ser criado 3 lis com um link dentro.


## Back-End:

    - node server.js
        * Comando para rodar o server.

    - sendFile
        * Vc pode mandar arquivos

        EX: 
             return response.sendFile(__dirname + '/index.html')
                * Ele vai mostrar o index.html
                * O "/" E para separar o index.html do __dirname que e o caminho que vc estar

    - nunjucks
        [ x ] > yarn add nunjucks
            * Ele vai permite que criamos variaveis no html.
                ( Template Egine )


    - return response.render('index.html')
        * Ele vai rendelizar o index.html


    - Passar variaveis:

        // No server.js:
        const h1 = "OI DO BACK-END"
        return response.render('index.html', { title: h1 })

        // No index.html:
            <h1>{{title}}</h1>


    - Include: 

        {% include "modal.html" %}
            * Ele vai colocar o arquivo modal.html aqui.    

## Banco de dados:

    [ x ] > yarn add sqlite3

    > node db.js
        // Ele vai criar um arquivo


    
    ** Tudo tem no seu html tem que bater com seu banco de dados.
        EX:
            Se vc colocou image na consulta de dados na tabela
            Vc precisa colocar image no seu html...

## Valitação no Front-End:
    Obs: Você tem que fazer valitação no front e no back

    ** onsubmit="return checkFields(event)"
        * Coloque isso no form