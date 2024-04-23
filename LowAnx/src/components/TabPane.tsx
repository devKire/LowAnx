import React, { ReactNode } from 'react';

type TabPaneProps = {
  id: string;
  isActive: boolean;
  children: ReactNode;
};

const TabPane: React.FC<TabPaneProps> = ({ id, isActive, children }) => {
  return (
    <div 
      className={`tab-pane fade ${isActive ? 'show active' : ''}`} 
      id={id} 
      role="tabpanel" 
      aria-labelledby={`${id}-tab`}
    >
      {children}
    </div>
  );
};

export default TabPane;
