import Tabs from "./tabs.jsx";
import { useData } from "./data-provider.jsx";

const ActionBar = () => {
  const { fetchData, refreshAccuracyScores } = useData();

  const handleClick = async () => {
    await refreshAccuracyScores();
    await fetchData();
  };

  return (
    <div className={"action-bar"}>
      <button onClick={handleClick} className={"reload-button"}>
        Reload leaderboard
      </button>
    </div>
  );
};

export default ActionBar;
