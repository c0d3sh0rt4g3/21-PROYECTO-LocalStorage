const submitButton = document.querySelector(".button-primary")
const deleteButton = document.querySelector("#delete-button")
const messageListDiv = document.querySelector("#lista-mensajes")
const storedMessages = JSON.parse(localStorage.getItem("messages"))
const messageList = document.createElement("ul")
submitButton.addEventListener("click", () => {
  event.preventDefault()
  const message = document.querySelector("#mensaje").value
  storedMessages.push(message)
  localStorage.setItem("messages", JSON.stringify(storedMessages))
  addMessageToPage(message)
})

document.addEventListener("DOMContentLoaded", () =>{
    addAllMessagesToPage(storedMessages)
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
    messageListDiv.firstChild.remove()
    while (storedMessages.length > 0) {
        storedMessages.pop();
    }
    localStorage.setItem("messages", JSON.stringify([]))
}