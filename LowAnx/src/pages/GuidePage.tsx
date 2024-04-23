import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import Footer from "../components/footer"
import Divider from "../components/divider"
import Header from "../components/header"
import TabPane from "../components/TabPane"
import Tabs from "../components/Tabs"

export default function GuidePage() {
  return (
    <>
      <Header />
      <Divider />
      
      <Tabs tabs={[
        { id: 'tab1', title: 'Meus Guias' },
        { id: 'tab2', title: 'Salvos' },
        { id: 'tab3', title: 'Concluídos' },
        { id: 'tab4', title: 'Lixeira (10 dias)' },
        { id: 'tab5', title: '+ Adicionar Guia' },
      ]}>
        <TabPane id="tab1" isActive>
          Conteúdo da aba 'Meus Guias'
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
      <Divider />
      <Footer />
    </>
  );
}
