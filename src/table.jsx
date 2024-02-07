import { useData } from "./data-provider.jsx";

const Table = () => {
  const { isLoading, data: teams } = useData();
  if (isLoading) return <p className={"text"}>Data is loading...</p>;

  const sortedTeams = teams.sort((a, b) => a.score < b.score);

  return (
    <table className={"table"}>
      <thead>
        {getTableHeaders().map((header) => (
          <th key={header}>{header}</th>
        ))}
      </thead>
      <tbody>
        {sortedTeams.map((team) => (
          <TableRow team={team} key={team.id} />
        ))}
      </tbody>
    </table>
  );
};

function TableRow({ team }) {
  return (
    <tr>
      {Object.entries(team).map(([index, value]) => {
        if (index === "id") return;
        return <td key={index}>{value}</td>;
      })}
    </tr>
  );
}
function getTableHeaders() {
  return ["Team", "Score", "Submissions", "Last submission"];
}

export default Table;
