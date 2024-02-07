import { useState } from "react";

function Tabs() {
  const [tabList, setTabList] = useState(getTabList());
  const handleTabClick = (clickedTab) => {
    if (clickedTab.active) return;
    const newTabList = getTabList().map((tab) => {
      if (tab.name === clickedTab.name) return { ...tab, active: true };
      return { ...tab, active: false };
    });
    setTabList(newTabList);
  };

  return (
    <>
      {tabList.map((tab) => (
        <Tab tab={tab} key={tab.name} onClick={() => handleTabClick(tab)} />
      ))}
    </>
  );
}

function Tab({ tab, onClick }) {
  const { name, active } = tab;
  return (
    <div className={`tab${active ? "-active" : ""}`} onClick={onClick}>
      {name}
    </div>
  );
}

function getTabList() {
  return [
    { name: "Leaderboard by score", active: true },
    { name: "Leaderboard by algorithm speed", active: false },
  ];
}

export default Tabs;
