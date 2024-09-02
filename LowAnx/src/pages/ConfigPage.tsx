import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";
import Menu from "../components/menuIcons";

export default function ConfigPage() {
  return (
    <>
      <Menu />
      <Header />
      <Divider />
      <main>
        <h1 className="text-center display-6 mt-5 mb-3">Configurações</h1>
        <div className="container mt-5 glass">
          <div className="row">
            <div className="col-md-4">
              <ul className="nav flex-column" id="myTab" role="tablist">
                <li className="nav-item nav-link-hover" role="presentation">
                  <a
                    className="nav-link"
                    id="tab2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Configurações de Notificações
                  </a>
                </li>
                <li className="nav-item nav-link-hover" role="presentation">
                  <a
                    className="nav-link"
                    id="tab3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    Preferências de Aparência
                  </a>
                </li>
                <li className="nav-item nav-link-hover" role="presentation">
                  <a
                    className="nav-link"
                    id="tab4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab4"
                    type="button"
                    role="tab"
                    aria-controls="tab4"
                    aria-selected="false"
                  >
                    Configurações de Idioma
                  </a>
                </li>
                <li className="nav-item nav-link-hover" role="presentation">
                  <a
                    className="nav-link"
                    id="tab5-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab5"
                    type="button"
                    role="tab"
                    aria-controls="tab5"
                    aria-selected="false"
                  >
                    Configurações de Sincronização
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 border">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade m-3"
                  id="tab2"
                  role="tabpanel"
                  aria-labelledby="tab2-tab"
                >
                  <h2>Configurações de Notificações</h2>
                  <form>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="emailNotif"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="emailNotif"
                        >
                          Receber notificações por email
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="pushNotif"
                          checked
                        />
                        <label className="form-check-label" htmlFor="pushNotif">
                          Receber notificações push
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="smsNotif"
                        />
                        <label className="form-check-label" htmlFor="smsNotif">
                          Receber notificações por SMS
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="horarioNotif" className="form-label">
                        Horário das Notificações
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="horarioNotif"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tipoNotif" className="form-label">
                        Tipo de Notificação
                      </label>
                      <select className="form-select" id="tipoNotif">
                        <option value="urgente">Urgente</option>
                        <option value="normal">Normal</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="notifSound"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notifSound"
                        >
                          Ativar som de notificação
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="notifVibrate"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notifVibrate"
                        >
                          Ativar vibração de notificação
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Salvar Alterações
                    </button>
                  </form>
                </div>

                <div
                  className="tab-pane fade m-3"
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="tab3-tab"
                >
                  <h2>Preferências de Aparência</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="theme" className="form-label">
                        Tema
                      </label>
                      <select className="form-select" id="theme">
                        <option value="light">Claro</option>
                        <option value="dark">Escuro</option>
                        <option value="custom">Personalizado</option>
                      </select>
                    </div>
                    <div id="custom-options">
                      <div className="mb-3">
                        <label htmlFor="primary-color" className="form-label">
                          Cor Primária
                        </label>
                        <input
                          type="color"
                          className="form-control"
                          id="primary-color"
                          value="#007bff"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="secondary-color" className="form-label">
                          Cor Secundária
                        </label>
                        <input
                          type="color"
                          className="form-control"
                          id="secondary-color"
                          value="#6c757d"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="background-color"
                          className="form-label"
                        >
                          Cor de Fundo
                        </label>
                        <input
                          type="color"
                          className="form-control"
                          id="background-color"
                          value="#f8f9fa"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="font-color" className="form-label">
                          Cor da Fonte
                        </label>
                        <input
                          type="color"
                          className="form-control"
                          id="font-color"
                          value="#212529"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="font-size" className="form-label">
                        Tamanho da Fonte
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        min="12"
                        max="24"
                        id="font-size"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Salvar Alterações
                    </button>
                  </form>
                </div>

                <div
                  className="tab-pane fade m-3"
                  id="tab4"
                  role="tabpanel"
                  aria-labelledby="tab4-tab"
                >
                  <h2>Configurações de Idioma</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="language" className="form-label">
                        Idioma
                      </label>
                      <select className="form-select" id="language">
                        <option value="en">Inglês</option>
                        <option value="pt">Português</option>
                        <option value="es">Espanhol</option>
                        <option value="fr">Francês</option>
                        <option value="de">Alemão</option>
                        <option value="it">Italiano</option>
                        <option value="ja">Japonês</option>
                        <option value="ko">Coreano</option>
                        <option value="zh">Chinês</option>
                        <option value="ru">Russo</option>
                        <option value="ar">Árabe</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="font-family" className="form-label">
                        Fonte
                      </label>
                      <select className="form-select" id="font-family">
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Verdana, sans-serif">Verdana</option>
                        <option value="Tahoma, sans-serif">Tahoma</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Courier New, monospace">
                          Courier New
                        </option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Salvar Alterações
                    </button>
                  </form>
                </div>

                <div
                  className="tab-pane fade m-3"
                  id="tab5"
                  role="tabpanel"
                  aria-labelledby="tab5-tab"
                >
                  <h2>Configurações de Sincronização</h2>
                  <form>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="auto-sync"
                      />
                      <label className="form-check-label" htmlFor="auto-sync">
                        Sincronizar automaticamente entre dispositivos
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sync-frequency" className="form-label">
                        Frequência de Sincronização
                      </label>
                      <select className="form-select" id="sync-frequency">
                        <option value="hourly">A cada hora</option>
                        <option value="daily">Diariamente</option>
                        <option value="weekly">Semanalmente</option>
                        <option value="bi-weekly">Quinzenalmente</option>
                        <option value="monthly">Mensalmente</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sync-time" className="form-label">
                        Horário de Sincronização
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="sync-time"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Salvar Alterações
                    </button>
                  </form>
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
