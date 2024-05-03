import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import Footer from "../components/footer"
import Divider from "../components/divider"
import Header from "../components/header"
import Waves from "../components/waves"

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Divider />
      <main>
        <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card glass">
                  <div className="card-body text-center">
                    <h5 className="card-title">Seu Perfil</h5>
                    <img src="https://media.istockphoto.com/id/1345149081/pt/vetorial/a-frustrated-man-sits-and-hugs-his-knees-nervous-problem-anxiety-and-confusion-in-thoughts.jpg?s=612x612&w=0&k=20&c=wqDH7BJsVBfLStoEXtF4w8pPdmTK1NDsFI48GuIGcn0=" className="img-fluid rounded-circle mb-3" alt="Foto de Perfil" />
                    <p className="card-text">Nome de Usuário</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 glass">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade m-3 show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                    <h2 className="mb-4">Configurações de Conta</h2>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                            <input type="text" className="form-control" id="sobrenome" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Nova Senha</label>
                            <input type="password" className="form-control" id="senha" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="confirmar-senha" className="form-label">Confirmar Nova Senha</label>
                            <input type="password" className="form-control" id="confirmar-senha" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="newsletter" />
                        <label className="form-check-label" htmlFor="newsletter">Desejo receber novidades por email</label>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Foto de Perfil</label>
                        <input type="file" className="form-control" id="avatar" />
                        <div className="form-text">Escolha uma imagem para seu avatar.</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="bio" className="form-label">Biografia</label>
                        <textarea className="form-control" id="bio" rows={3}></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="cidade" className="form-label">Cidade</label>
                            <input type="text" className="form-control" id="cidade" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <select className="form-select" id="estado">
                              <option value="">Selecione...</option>
                              <option value="AC">Acre</option>
                              <option value="AL">Alagoas</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="tel" className="form-control" id="telefone" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Gênero</label>
                        <select className="form-select" id="genero">
                          <option value="">Selecione...</option>
                          <option value="masculino">Masculino</option>
                          <option value="feminino">Feminino</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="data-nascimento" className="form-label">Data de Nascimento</label>
                        <input type="date" className="form-control" id="data-nascimento" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="interesses" className="form-label">Interesses</label>
                        <input type="text" className="form-control" id="interesses" />
                        <div className="form-text">Insira seus interesses separados por vírgula.</div>
                      </div>
                      <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                    </form>
                  </div>
          
                  <div className="tab-pane fade m-3" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                    <h2>Configurações de Notificações</h2>
                    <form>
                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="emailNotif" checked />
                          <label className="form-check-label" htmlFor="emailNotif">Receber notificações por email</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="pushNotif" checked />
                          <label className="form-check-label" htmlFor="pushNotif">Receber notificações push</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="smsNotif" />
                          <label className="form-check-label" htmlFor="smsNotif">Receber notificações por SMS</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="horarioNotif" className="form-label">Horário das Notificações</label>
                        <input type="time" className="form-control" id="horarioNotif" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tipoNotif" className="form-label">Tipo de Notificação</label>
                        <select className="form-select" id="tipoNotif">
                          <option value="urgente">Urgente</option>
                          <option value="normal">Normal</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="notifSound" />
                          <label className="form-check-label" htmlFor="notifSound">Ativar som de notificação</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="notifVibrate" />
                          <label className="form-check-label" htmlFor="notifVibrate">Ativar vibração de notificação</label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
      <Footer />
      <Divider />
      <Waves />
    </>
  );
}
