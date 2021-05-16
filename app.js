const mouseOver = document.querySelector('.mouse-over')
const popupBg = document.querySelector('.popup-bg')
const register = document.querySelector('.register')
const msgRegisterBg = document.querySelector('.msg-register-bg')
const clearLS = document.querySelector('.clear-LS')


//verificando se exite a key 'email' no localStorage
const getEmailLocalStorage = () => { return localStorage.getItem('email') }

//limpa o dado cadastrado no localStorage
const removeEmailLocalStorage = () => { return localStorage.removeItem('email') }
/*
verificando se há e-mail cadastrado para, caso haja, printar
um button com o e-mail e opção de limpar o LS
*/
const buttonClearLS = () => {
    clearLS.style.display = "flex"
    clearLS.innerHTML = `E-mail cadastrado: ${getEmailLocalStorage()}
    <br> Clique aqui para deletar`
}

//printando o butão caso existe dado em localStorage
if (getEmailLocalStorage()) {
    buttonClearLS()
}


//evento mousehover na div mouse-hover para mostrar o popup
mouseOver.addEventListener('mouseover', () => {
    // const getEmailLocalStorage = localStorage.getItem('email')
    if (!getEmailLocalStorage()) {
        popupBg.style.display = 'flex'
    }
})

//fecha o popup ao clicar em alguns elementos 
popupBg.addEventListener('click', (event) => {
    //armazenando a class do elemento clicado
    const classElementsClassClicked = event.target.classList[0]
    //elementos que poderam fechar o popup
    const arrayElements = ['popup-bg', 'close-popup']
    //fechando o popup
    const elementClosePopup = arrayElements.some(arrayElement =>
        arrayElement === classElementsClassClicked)
    //fechando o popup
    if (elementClosePopup) {
        popupBg.style.display = 'none'
    }
})

//cadastrando o email do usuário em localStorage
register.addEventListener('click', (event) => {
    //tira o evento padrão do button
    event.preventDefault()

    //armazenando o email inserido no input
    const emailInput = document.querySelector('#email').value
    //inserindo o email do usuario
    localStorage.setItem('email', emailInput);


    // opós inseriro o registro mostre a mensagem de sucesso       
    if (getEmailLocalStorage()) {
        popupBg.style.display = 'none'
        msgRegisterBg.style.display = 'flex'        
    }

})

//evento para fechar o popup com a mensagem de sucesso ao cadastrar o e-mail
msgRegisterBg.addEventListener('click', (event) => {
    //armazena o elemento clicado
    const coleseMsgRegisterMail = event.target.classList[0]
    //elementos que fecharão, ao serem clicados, o popup
    const arrayElementsMsgMail = ['msg-register-bg', 'close-msg-register']
    //verificando se o elemento clicado é corresponde ao array de arrayElementsMsgMail
    const closeMsgRegister = arrayElementsMsgMail.some(elementMsgMail =>
        elementMsgMail === coleseMsgRegisterMail
    )
    //caso a função closeMsgRegister retorne true, feche o popup de mensam
    if (closeMsgRegister) {
        msgRegisterBg.style.display = 'none'
        buttonClearLS()
    }
})

//limpando LocalStorage -> remover e-mail cadastrado
clearLS.addEventListener('click', () => {
    removeEmailLocalStorage()
    clearLS.style.display = "none";
})
