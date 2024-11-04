// Verifica se as perguntas foram carregadas corretamente
if (typeof perguntas === 'undefined' || perguntas.length === 0) {
    console.error("As perguntas não foram carregadas corretamente.");
}

let currentCard = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");

// Função para mostrar o flash card atual
function showCard(index) {
    const pergunta = perguntas[index];
    questionElement.textContent = pergunta.question;
    answerElement.textContent = pergunta.answer;
    answerElement.style.display = "none";  // Oculta a resposta ao mostrar uma nova pergunta
}

// Evento de clique para alternar entre pergunta e resposta
questionElement.addEventListener("click", () => {
    if (answerElement.style.display === "none") {
        answerElement.style.display = "block"; // Mostra a resposta
    } else {
        answerElement.style.display = "none";  // Oculta a resposta
    }
});

// Evento de clique para ir para o próximo flash card
nextBtn.addEventListener("click", () => {
    currentCard++;
    if (currentCard >= perguntas.length) {
        currentCard = 0;  // Volta ao início se chegar ao final da lista
    }
    showCard(currentCard);
});

// Mostra o primeiro flash card ao carregar a página
showCard(currentCard);