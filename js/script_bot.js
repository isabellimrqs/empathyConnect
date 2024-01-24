document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");
    const chatbox = document.querySelector(".chatbox");
    const userTextarea = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    chatbotToggler.addEventListener("click", toggleChatbot);
    // chatbot.querySelector("header span").addEventListener("click", toggleChatbot);
    sendBtn.addEventListener("click", sendMessage);

    function toggleChatbot() {
        console.log("aqui");
        chatbot.classList.toggle("hidden");
    }    

    function sendMessage() {
        const userMessage = userTextarea.value.trim();
        if (!userMessage) return;

        appendMessage(userMessage, "outgoing");
        userTextarea.value = "";

        // Simular resposta do chatbot após 600ms (pode ser ajustado conforme necessário)
        setTimeout(() => {
            appendMessage(generateResponse(userMessage), "incoming");
        }, 600);
    }

    function generateResponse(userMessage) {
        // Converta a mensagem do usuário para minúsculas para facilitar a comparação
        const lowerCaseMessage = userMessage.toLowerCase();
    

        if (lowerCaseMessage.includes("como posso me sentir melhor")) {
            return "Tente fazer uma atividade que você goste, como ouvir música ou dar um passeio.";
        } else if (lowerCaseMessage.includes("estou me sentindo triste")) {
            return "Lamento ouvir isso. Às vezes, desabafar com um amigo pode ajudar.";
        } else if (lowerCaseMessage.includes("como lidar com o estresse")) {
            return "Reserve um tempo para relaxar, pratique a respiração profunda ou faça alguma atividade física.";
        } else if (lowerCaseMessage.includes("oii")) {
            return "Olá!! Como eu poderia te ajudar hoje? ";
        } else if (lowerCaseMessage.includes("como posso melhorar meu ânimo")) {
            return "Experimente se envolver em atividades que tragam alegria, como assistir a um filme engraçado ou sair com amigos.";
        } else if (lowerCaseMessage.includes("o que fazer quando estou sobrecarregado")) {
            return "Divida suas tarefas em etapas menores, priorize o que é mais importante e peça ajuda se necessário.";
        } else {
            return "Isso é uma resposta simulada do chatbot.";
        }
    }
    

    function appendMessage(message, className) {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);

        let chatContent =
            className === "outgoing"
                ? `<p>${message}</p>`
                : `<img src="../img/calmigo.png"><p>${message}</p>`; 

        chatLi.innerHTML = chatContent;
        chatbox.appendChild(chatLi);

        // Leva scroll para o final
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});