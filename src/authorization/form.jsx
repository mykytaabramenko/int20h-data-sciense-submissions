import { useState } from "react";

const Form = ({ register }) => {
  const [username, setUsername] = useState("");
  const [apikey, setApikey] = useState("");
  const [teamname, setTeamname] = useState("");
  const disabled = !teamname || !apikey || !username;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ username, apikey, teamname });
  };
  return (
    <form onSubmit={handleSubmit} className={"form"}>
      <div className={"form-item"}>
        <label htmlFor={"username"} className={"text"}>
          Username
        </label>
        <input
          type={"text"}
          id={"username"}
          placeholder={"Enter your Kaggle username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={"form-item"}>
        <label htmlFor={"apikey"} className={"text"}>
          Api key
        </label>
        <input
          type={"text"}
          id={"apikey"}
          placeholder={"Enter your Kaggle API key"}
          value={apikey}
          onChange={(e) => setApikey(e.target.value)}
        />
      </div>
      <div className={"form-item"}>
        <label htmlFor={"apikey"} className={"text"}>
          Team name
        </label>
        <input
          type={"text"}
          id={"teamname"}
          placeholder={"Enter name of your team"}
          value={teamname}
          onChange={(e) => setTeamname(e.target.value)}
        />
      </div>
      <button className={`submit-button`} disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
