const onOff = () => {
    document
        .querySelector('#modal')
        .classList  
        .toggle('hide');
    document
        .querySelector('body')
        .classList
        .toggle('hideScroll');
    document
        .querySelector('#modal')
        .classList
        .toggle('addScroll')
}; 

const animationOff = () => {
    document
        .querySelector('.animationElement')
        .classList
        .toggle('animationTrue')
    document
        .querySelector('.labelAnimated')
        .classList
        .toggle('animationTrue')
};

const checkFields = (event) => {

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find((value) => {
        
        const checkIfString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()  // Ele vai checar se não esta so com espaços

        if (checkIfString && checkIfIsEmpty) {
            return true // Eu achei um cara vazio
        }

    })

    const emptyText = document.querySelector('.error')

    if (isEmpty) {  // Se for false ele vai cair nesse if 
        event.preventDefault()  // Ele não vai dar o reload na pagina, resultado e que ele vai ser parado.
        alert('Preencha todos os campos...')
    }

    // console.log(isEmpty)

    // Pra cada value ele vai executar uma função.
    // se return true que dizer que ele encontrou alguma cosa se return false quer dizer que ele não encontrou nada.
    // Se ele encontrou alguma coisa ele vai colocar na variavel isEmpty.

    // for (let value of valuesToCheck) {  
    //     console.log(event.target[value].value)
    // };
};  
// Ele vai rodar isso 5 vezes e retorna o valor de cada input 

// O .trim vai tirar os espações no final da frase e no começo
// [value] Ele esta pegando o title
// Value e o que tem dentro do input.
// O target e o form
// handleOff() Se vc colocar assim, ele ja vai começar com o hide.