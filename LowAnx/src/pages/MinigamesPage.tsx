import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";
import TabPane from "../components/TabPane";
import Tabs from "../components/Tabs";
import ListGames from "../components/ListGames";

const gamesListData = [
  {
    id:"respirando-cores",
    image:
      "/assets/img/Respiregame.jpg",
    title: "Respirando Cores",
    description: "Inspire ou expire conforme o circulo aumenta e muda de cor.",
  },
  {
    id:"estourando-bolhas",
    image:
      "/assets/img/bubble.jpeg",
    title: "Estourando Bolhas",
    description: "Estoure todas as bolhas de sabão que aparecerem.",
  },
  {
    id:"desenhando",
    image:
      "/assets/img/pencil.jpeg",
    title: "Desenhando",
    description: "Um lindo quadro branco para você expressar seus sentimentos ou fazer apenas a sua arte.",
  },
  {
    id:"contando-estrelas",
    image:
      "/assets/img/stars.png",
    title: "Contando Estrelas",
    description: "Clique nas estrelas para contá-las e seja feliz.",
  },
];
const MinigamesPage: React.FC = () => {

  return (
    <>
      <Header />
      <Divider />
      <main>
      <h1 className="text-center display-6 mt-5 mb-3">Minigames</h1>
      <div className="container py-5 glass">
        <Tabs
          tabs={[
            { id: "tab1", title: "Jogados Recentemente" },
            { id: "tab2", title: "Salvos" },
            { id: "tab3", title: "+ Adicionar Mais" },
          ]}
        >
          <TabPane id="tab1" isActive>
            Conteúdo da aba 'Jogados Recentemente'
            <div className="container py-5">
              <div className="row featurette">
                {gamesListData.map(function (ListGamesProps) {
                  return (
                    <ListGames
                      id={ListGamesProps.id}
                      image={ListGamesProps.image}
                      title={ListGamesProps.title}
                      description={ListGamesProps.description}
                    />
                  );
                })}
              </div>
            </div>
            
          </TabPane>
          <TabPane id="tab2" isActive>
            Conteúdo da aba 'Salvos'
          </TabPane>
          <TabPane id="tab3" isActive>
            Conteúdo da aba '+ Adicionar Mais'
          </TabPane>
        </Tabs>
      </div>
      </main>
      <Footer />
      <Waves />
    </>
  );
};

export default MinigamesPage;
