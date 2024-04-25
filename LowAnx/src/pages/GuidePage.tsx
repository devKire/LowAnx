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
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image:
      "https://media.istockphoto.com/id/1064027420/pt/foto/silhouette-of-troubled-person-head.jpg?s=612x612&w=0&k=20&c=BanKIX-5fR_CuMVeet3rdsMIrBkciFOZZ77xdh2Vmbs=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1042788954/pt/foto/adult-hispanic-man-wearing-glasses-over-isolated-background-looking-stressed-and-nervous-with.jpg?s=612x612&w=0&k=20&c=KP60Ec3Wgl1N4InyeflIHAkgd7GU19qzCu9_l_CLKps=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1033774292/pt/foto/panic-attack-in-public-place-woman-having-panic-disorder-in-city-psychology-solitude-fear-or.jpg?s=612x612&w=0&k=20&c=eKHJpCYxXDP3DEljs1j208Gu9OFnBIo9AtyfR-Erklk=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1281237072/pt/vetorial/emotion-face-expression-frustration-panic-attack-mental-stress-depression-anxiety-concept.jpg?s=612x612&w=0&k=20&c=fbDtoJk2Mfz5owDl9SkL4dQGqsxbjSNsLq-2nbsu26k=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1345149081/pt/vetorial/a-frustrated-man-sits-and-hugs-his-knees-nervous-problem-anxiety-and-confusion-in-thoughts.jpg?s=612x612&w=0&k=20&c=wqDH7BJsVBfLStoEXtF4w8pPdmTK1NDsFI48GuIGcn0=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1472728023/pt/foto/caucasian-mature-woman-frustrating-while-sit-alone-on-bed-in-bedroom-attractive-old-female.jpg?s=612x612&w=0&k=20&c=FgjCz_gFYPxRDkX5ubnD5P5-EYaPZCFmxLrvNbxL8U0=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1444137971/pt/foto/student-anxiety-and-woman-in-busy-college-campus-with-depression-sad-and-mental-health.jpg?s=612x612&w=0&k=20&c=QNz_mX2lUvc9x-AfVEM6I9Lhde_iCsfcJhXGpTMsTso=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1389986588/pt/foto/shot-of-a-young-female-having-a-mental-breakdown-at-home.jpg?s=612x612&w=0&k=20&c=PdWGET8dWC6hqn8EFyHWukC06Bx2sruiz7CDw7IVuBQ=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
  {
    image: "https://media.istockphoto.com/id/1184108625/pt/vetorial/mental-disorder-finding-answers-confusion-concept.jpg?s=612x612&w=0&k=20&c=pEnfEwZxWvoJKckkX_0LyTp_nF7Xu1zx3_DlLdIXlZE=",
    title: "Título do Guia",
    description: "Descrição curta do Guia",
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <Divider />
      <h1 className="text-center display-6 mt-5 mb-3">Guias</h1>
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
            <div className="container py-5">
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
