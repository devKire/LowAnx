import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";
import TabPane from "../components/TabPane";
import Tabs from "../components/Tabs";
import ListGames from "../components/ListGames";

const gamesListData = [
  {
    image:
      "https://media.istockphoto.com/id/1388115341/pt/foto/shot-of-a-unrecognizable-woman-sitting-on-a-sofa-and-feeling-anxious.jpg?s=612x612&w=0&k=20&c=d9DiuUxNynYfWnK8BPHKtaU5PGqmY-PbTEsK18ekGho=",
    title: "Título do Minigame",
    description: "Descrição curta do Minigame",
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
