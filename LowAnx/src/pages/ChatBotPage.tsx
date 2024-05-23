import { useState, useEffect, useRef, FormEvent } from "react";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";

const predefinedQA = [
  {
    question: "Quem é você?",
    answer:
      "Olá! Sou um assistente virtual projetado para ajudar com questões relacionadas à saúde mental. Como posso ajudá-lo hoje?",
  },
  {
    question: "Como você pode me ajudar?",
    answer:
      "Estou aqui para oferecer suporte emocional, fornecer informações sobre técnicas de gestão do estresse, sugerir estratégias para melhorar seu bem-estar mental e muito mais. Sinta-se à vontade para me perguntar qualquer coisa!",
  },
  {
    question: "Estou me sentindo ansioso.",
    answer:
      "Entendo. Ansiedade é uma sensação comum. Vamos tentar algumas técnicas de respiração juntos. Inspire profundamente por 4 segundos, segure por 7 segundos e expire lentamente por 8 segundos. Repita algumas vezes e veja se isso te ajuda a se sentir mais calmo.",
  },
  {
    question: "Não consigo dormir por causa da ansiedade.",
    answer:
      "Insônia devido à ansiedade é desafiadora. Podemos tentar algumas estratégias de relaxamento antes de dormir. Recomendo ouvir música suave, praticar meditação ou fazer exercícios de respiração. Experimente e veja o que funciona melhor para você.",
  },
  {
    question: "Estou me sentindo sobrecarregado.",
    answer:
      "Entendo como se sentir sobrecarregado pode ser esmagador. Vamos tentar dividir suas tarefas em partes menores e estabelecer prioridades. Às vezes, dar um passo de cada vez pode ajudar a reduzir a sensação de sobrecarga. Como posso ajudá-lo a começar?",
  },
  {
    question: "Preciso me acalmar.",
    answer:
      "Claro, vamos experimentar uma técnica de aterramento juntos. Feche os olhos e concentre-se em sua respiração por um momento. Agora, descreva cinco coisas que você pode ver ao seu redor, depois quatro coisas que você pode tocar, três coisas que você pode ouvir, dois que você pode cheirar e um que você pode saborear. Isso deve ajudá-lo a se sentir mais presente e calmo.",
  },
  {
    question: "Você pode me ajudar com a ansiedade?",
    answer:
      "Estou aqui para apoiá-lo em sua jornada de gestão da ansiedade. Vamos explorar juntos diferentes estratégias de enfrentamento, aprender novas habilidades de autocuidado e encontrar recursos que possam ser úteis para você. Lembre-se de que você não está sozinho nessa jornada.",
  },
];

const userProfilePic =
  "https://media.istockphoto.com/id/1345149081/pt/vetorial/a-frustrated-man-sits-and-hugs-his-knees-nervous-problem-anxiety-and-confusion-in-thoughts.jpg?s=612x612&w=0&k=20&c=wqDH7BJsVBfLStoEXtF4w8pPdmTK1NDsFI48GuIGcn0=";
const botProfilePic = "https://images.deepai.org/art-image/60a4f184e184474abd6b588ef70e5c05/none-01e7e4.jpg";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleBotResponse = (userMessage: string) => {
    const matchedQA = predefinedQA.find((qa) => qa.question === userMessage);
    const botResponse = matchedQA ? matchedQA.answer : generateRandomResponse();
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);
  };

  const generateRandomResponse = () => {
    const randomResponses = [
      "Desculpe, não consegui entender. Poderia reformular sua pergunta?",
      "Interessante. Poderia me contar mais sobre isso?",
      "Estou aqui para ajudar. Como posso ser útil hoje?",
      "Às vezes, não ter todas as respostas é normal. Vamos trabalhar juntos para encontrar uma solução.",
      "Acho que preciso de mais dados para entender completamente. Você poderia me dar mais informações?",
    ];
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      handleBotResponse(input);
      setInput("");
    }
  };

  const handlePredefinedQuestion = (question: string) => {
    setMessages([...messages, { sender: "user", text: question }]);
    handleBotResponse(question);
  };

  return (
    <>
      <Header />
      <Divider />
      <main>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header text-center">
                  Ajudante da LowAnx
                </div>
                <div
                  className="card-body chat-body"
                  style={{ height: "400px", overflowY: "scroll" }}
                >
                  <div className="chat-messages">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`message-container ${message.sender}`}
                      >
                        <img
                          src={
                            message.sender === "user"
                              ? userProfilePic
                              : botProfilePic
                          }
                          alt={`${message.sender} profile`}
                          className="profile-pic"
                        />
                        <div className={`message ${message.sender}`}>
                          {message.text}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                </div>
                <div className="card-footer">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escreva sua mensagem..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="predefined-questions mt-3">
                    {predefinedQA.map((qa, index) => (
                      <button
                        key={index}
                        className="btn btn-outline-secondary btn-sm mr-2"
                        onClick={() => handlePredefinedQuestion(qa.question)}
                      >
                        {qa.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Waves />
    </>
  );
}
