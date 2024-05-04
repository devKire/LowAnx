import Tabs from "../components/Tabs";
import TabPane from "../components/TabPane";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import ListItem from "../components/ListItem";
import Waves from "../components/waves";

const booksListData = [
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

export default function BookPage() {
  return (
    <>
      <Header />
      <Divider />
      <h1 className="text-center display-6 mt-5 mb-3">Livros</h1>
      <div className="container py-5 glass">
        <Tabs
          tabs={[
            { id: "tab1", title: "Meus Livros" },
            { id: "tab2", title: "Salvos" },
            { id: "tab3", title: "Concluídos" },
            { id: "tab4", title: "+ Adicionar Livro" },
          ]}
        >
          <TabPane id="tab1" isActive>
          <div className="container py-5">
              <div className="row featurette">
                {booksListData.map(function (ListItemProps) {
                  return (
                    <ListItem
                      image={ListItemProps.image}
                      title={ListItemProps.title}
                      description={ListItemProps.description}
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
            Conteúdo da aba 'Concluídos'
          </TabPane>
          <TabPane id="tab4" isActive>
            Conteúdo da aba '+ Adicionar Livro'
          </TabPane>
        </Tabs>
      </div>
      <Footer />
      <Divider />
      <Waves />
    </>
  );
}
