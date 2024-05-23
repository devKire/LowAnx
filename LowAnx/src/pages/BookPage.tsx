import Tabs from "../components/Tabs";
import TabPane from "../components/TabPane";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import ListItem from "../components/ListItem";
import Waves from "../components/waves";

const booksListData = [
  {
    id:"pare-de-sofrer-hoje-mesmo",
    image:
      "https://media.istockphoto.com/id/1388115341/pt/foto/shot-of-a-unrecognizable-woman-sitting-on-a-sofa-and-feeling-anxious.jpg?s=612x612&w=0&k=20&c=d9DiuUxNynYfWnK8BPHKtaU5PGqmY-PbTEsK18ekGho=",
    title: "PARE DE SOFRER HOJE MESMO: O DESENVOLVIMENTO E A BANALIZAÇÃO DA ANSIEDADE",
    description: "Saúde Mental. Educação. Banalização. ",
    resumo: "Propõe-se investigar o desenvolvimento e a banalização da ansiedade no meio escolar. O território da pesquisa é a faculdade SENAC Blumenau. A proposta está inserida na área de estudos da saúde mental, busca-se analisar a percepção da sociedade em relação à ansiedade. A hipótese sugere que a instituição pode fornecer esclarecimentos relevantes sobre o tema. A metodologia propõe entrevistas com estudantes para coletar dados quali-quantitativos. Os resultados esperados incluem a busca por soluções de enfrentamento no contexto institucional do SENAC. A pesquisa contribuirá para uma compreensão mais ampla da ansiedade no ambiente educacional e para o desenvolvimento de estratégias eficazes de intervenção e apoio aos estudantes.",
    author: "Letícia Beyer Mogk, Amanda Soethe Bento",
    file:"./assets/art/PareDeSofrer.pdf",
  },
  {
    id:"low-anx",
    image:
      "/assets/img/logoLowAnx.jpg",
    title: "LowAnx: Acalmando o mar de sua mente",
    description: "Ansiedade. Autocuidado. Saúde. ",
    resumo: "O LowAnx é uma iniciativa dedicada a fornecer apoio e informações valiosas para aqueles que enfrentam desafios relacionados à síndrome do pensamento acelerado, também conhecida como ansiedade. Nosso objetivo é oferecer uma abordagem abrangente que não apenas ajude os usuários a gerenciarem sua ansiedade, mas também a compreender os sintomas, promovendo a saúde mental, autocontrole e a gestão eficaz de emoções. O site LowAnx irá disponibilizar instruções personalizadas, fornecendo técnicas sobre como controlar a ansiedade e promovendo o desenvolvimento do autocuidado. Para enriquecer ainda mais o conteúdo, contamos com a colaboração de profissionais especialistas em saúde mental, assegurando informações confiáveis e estratégias eficazes. Além disso, ofereceremos recursos interativos, como mensagens diárias, minigames, exercícios de relaxamento e técnicas comprovadas de gerenciamento de estresse. Uma loja com livros relacionados à saúde mental estará disponível para proporcionar uma experiência prática e envolvente aos usuários. Ao optar pela LowAnx, os usuários escolhem um recurso confiável para auxiliar na jornada de autocuidado e bem-estar mental.",
    author: "Erik Rafael Dos Santos, Kauã Luciano, Henrique Alberto Wieser Schmitt",
    file:"./assets/art/lowanx2024.pdf",
  },
];

export default function BookPage() {
  return (
    <>
      <Header />
      <Divider />
      <h1 className="text-center display-6 mt-5 mb-3">Leituras</h1>
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
                      id={ListItemProps.id}
                      image={ListItemProps.image}
                      title={ListItemProps.title}
                      description={ListItemProps.description}
                      resumo={ListItemProps.resumo}
                      author={ListItemProps.author}
                      file={ListItemProps.file}
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
      <Waves />
    </>
  );
}
