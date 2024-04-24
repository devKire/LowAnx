import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import TabPane from "../components/TabPane";
import Tabs from "../components/Tabs";
import ListItem from "../components/ListItem";

const guidesListData = [
  {
    image:
      "https://media.istockphoto.com/id/1388115341/pt/foto/shot-of-a-unrecognizable-woman-sitting-on-a-sofa-and-feeling-anxious.jpg?s=612x612&w=0&k=20&c=d9DiuUxNynYfWnK8BPHKtaU5PGqmY-PbTEsK18ekGho=",
    title: "Título do Livro",
    description: "Descrição curta do Livro",
  },
  {
    image:
      "https://media.istockphoto.com/id/1064027420/pt/foto/silhouette-of-troubled-person-head.jpg?s=612x612&w=0&k=20&c=BanKIX-5fR_CuMVeet3rdsMIrBkciFOZZ77xdh2Vmbs=",
    title: "Título do Livro",
    description: "Descrição curta do Livro",
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <Divider />
      <h1 className="text-center display-6 mt-5 mb-3">Livros</h1>
      <div className="container py-5">
        <Tabs
          tabs={[
            { id: "tab1", title: "Meus Guias" },
            { id: "tab2", title: "Salvos" },
            { id: "tab3", title: "Concluídos" },
            { id: "tab4", title: "Lixeira (10 dias)" },
            { id: "tab5", title: "+ Adicionar Guia" },
          ]}
        >
          <TabPane id="tab1" isActive>
            Conteúdo da aba 'Meus Guias'
            <div className="row featurette">
              {guidesListData.map(function (ListItemProps) {
                return (
                  <ListItem
                    image={ListItemProps.image}
                    title={ListItemProps.title}
                    description={ListItemProps.description}
                  />
                );
              })}
            </div>
          </TabPane>
          <TabPane id="tab2" isActive>
            Conteúdo da aba 'Salvos'
          </TabPane>
          <TabPane id="tab3" isActive>
            Conteúdo da aba 'Concluídos'
          </TabPane>
          <TabPane id="tab4" isActive>
            Conteúdo da aba 'Lixeira (10 dias)'
          </TabPane>
          <TabPane id="tab5" isActive>
            Conteúdo da aba '+ Adicionar Guia'
          </TabPane>
        </Tabs>
      </div>
      <Divider />
      <Footer />
    </>
  );
}
