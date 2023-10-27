const submitButton = document.querySelector(".button-primary")
const deleteButton = document.querySelector("#delete-button")
const messageListDiv = document.querySelector("#lista-mensajes")

if (!(localStorage.getItem("messages"))){
    localStorage.setItem("messages", JSON.stringify([]))
}

const storedMessages = JSON.parse(localStorage.getItem("messages"))
const messageList = document.createElement("ul")

document.addEventListener("DOMContentLoaded", () =>{
    addAllMessagesToPage(storedMessages)
})

submitButton.addEventListener("click", () => {
  event.preventDefault()
  const message = document.querySelector("#mensaje").value
  storedMessages.push(message)
  localStorage.setItem("messages", JSON.stringify(storedMessages))
  addMessageToPage(message)
})

deleteButton.addEventListener("click", () =>{
    deleteMessages()
})

const addMessageToPage = (message) => {
    const messageListElement = document.createElement("li")
    messageListElement.classList.add("message")
    messageListElement.textContent = message
    messageList.appendChild(messageListElement)
    messageListDiv.appendChild(messageList)
}

const addAllMessagesToPage = (storedMessages) =>{
    storedMessages.forEach(message =>{
        addMessageToPage(message)
    })
}

const deleteMessages = () =>{
    while (messageList.firstChild){
        messageList.firstChild.remove()
        console.log(messageList)
    }
    while (storedMessages.length > 0) {
        storedMessages.pop()
    }
    localStorage.setItem("messages", JSON.stringify(storedMessages))
}