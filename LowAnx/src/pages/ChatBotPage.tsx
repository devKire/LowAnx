import { useState, useEffect, useRef, FormEvent } from "react";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";

const predefinedQA = [
    { question: "Qual é você?", answer: "Eu sou um o ajudante da LowAnx e estou aqui para ajudá-lo!" },
    { question: "Como você pode me ajudar?", answer: "Posso ajudá-lo com várias dúvidas relacionadas a saúde mental" },
    { question: "Estou me sentindo ansioso.", answer: "Sinto muito ouvir isso. Respirar profundamente às vezes pode ajudar. Tente inspirar profundamente por 4 segundos, segurar por 7 segundos e expirar por 8 segundos." },
    { question: "Não consigo dormir por causa da ansiedade.", answer: "Pode ajudar praticar algumas técnicas de relaxamento antes de dormir. Tente ouvir música suave ou uma meditação guiada." },
    { question: "Estou me sentindo sobrecarregado.", answer: "É importante dar um passo de cada vez. Talvez fazer uma pequena lista de tarefas e se concentrar em concluir uma tarefa por vez." },
    { question: "Preciso me acalmar.", answer: "Experimente técnicas de aterramento, como o método 5-4-3-2-1: Nomeie 5 coisas que você pode ver, 4 coisas que você pode tocar, 3 coisas que você pode ouvir, 2 coisas que você pode cheirar e 1 coisa que você pode provar." },
    { question: "Você pode me ajudar com a ansiedade?", answer: "Estou aqui para apoiá-lo. Lembre-se, é normal procurar a ajuda de um profissional se precisar de mais apoio." }
  ];
  

const userProfilePic = "https://media.istockphoto.com/id/1345149081/pt/vetorial/a-frustrated-man-sits-and-hugs-his-knees-nervous-problem-anxiety-and-confusion-in-thoughts.jpg?s=612x612&w=0&k=20&c=wqDH7BJsVBfLStoEXtF4w8pPdmTK1NDsFI48GuIGcn0=";  // Replace with actual path to user profile picture
const botProfilePic = "/assets/img/logoLowAnx.jpg";    // Replace with actual path to bot profile picture

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleBotResponse = (userMessage: string) => {
    const matchedQA = predefinedQA.find(qa => qa.question === userMessage);
    const botResponse = matchedQA ? matchedQA.answer : "Desculpe, Eu não entendi sua pergunta.";
    setMessages(prevMessages => [...prevMessages, { sender: "bot", text: botResponse }]);
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
                <div className="card-body chat-body" style={{height: "400px", overflowY: "scroll"}}>
                  <div className="chat-messages">
                    {messages.map((message, index) => (
                      <div key={index} className={`message-container ${message.sender}`}>
                        <img
                          src={message.sender === "user" ? userProfilePic : botProfilePic}
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
                        <button className="btn btn-primary" type="submit">Enviar</button>
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
