import React, { useState, ReactNode, ReactElement } from 'react';

type Tab = {
  id: string;
  title: string;
};

type TabsProps = {
  tabs: Tab[];
  children: ReactElement<TabPaneProps>[];
};

type TabPaneProps = {
  id: string;
  isActive: boolean;
  children: ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button 
              className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isActive: activeTab === child.props.id,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default Tabs;
