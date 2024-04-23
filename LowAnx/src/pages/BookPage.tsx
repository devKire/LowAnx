import React from 'react';
import Tabs from '../components/Tabs';
import TabPane from '../components/TabPane';
import Footer from '../components/footer';
import Divider from '../components/divider';
import Header from '../components/header';

export default function BookPage() {
  return (
    <>
      <Header />
      <Divider />
      
      <Tabs tabs={[
        { id: 'tab1', title: 'Meus Livros' },
        { id: 'tab2', title: 'Salvos' },
        { id: 'tab3', title: 'Concluídos' },
        { id: 'tab4', title: '+ Adicionar Livro' },
      ]}>
        <TabPane id="tab1" isActive>
          Conteúdo da aba 'Meus Livros'
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
      <Divider />
      <Footer />
    </>
  );
}
