const submitButton = document.querySelector(".button-primary")
const messageList = document.querySelector(".lista-mensajes")
const storedMessages = []
submitButton.addEventListener("click", () => {
    const message = document.querySelector("#mensaje").value
    storedMessages.push(message)
    addMessageToPage(storedMessages)
})
const addMessageToPage = (storedMessages) =>{
    storedMessages.forEach(message =>{
        const messageDiv = document.createElement("div")
        messageDiv.classList.add("message")
        messageDiv.textContent = message
        messageList.appendChild(messageDiv)
    })
}