import React from "react";

type TabsProps = {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
};

const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div className="tabs tabs-boxed mx-auto mb-2">
      <a
        className={`tab ${selectedTab === 0 && "tab-active"}`}
        onClick={() => {
          setSelectedTab(0);
        }}>
        GIA
      </a>
      <a
        className={`tab ${selectedTab === 1 && "tab-active"}`}
        onClick={() => {
          setSelectedTab(1);
        }}>
        Upscayl
      </a>
      <a
        className={`tab ${selectedTab === 2 && "tab-active"}`}
        onClick={() => {
          setSelectedTab(2);
        }}>
        Settings
      </a>
    </div>
  );
};

export default Tabs;
