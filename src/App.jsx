import Table from "./table.jsx";
import DataProvider from "./data-provider.jsx";
import ActionBar from "./action-bar.jsx";
import AuthorizationProvider from "./authorization/provider.jsx";
import Form from "./authorization/form.jsx";
import "./css/reset.css";
import "./css/App.css";
function App() {
  return (
    <div className={"container"}>
      <AuthorizationProvider>
        {({ isAuthorized, register }) => {
          if (!isAuthorized) {
            return <Form register={register} />;
          }
          return (
            <>
              <h1>INT20H Data Science</h1>
              <DataProvider>
                <ActionBar />
                <Table />
              </DataProvider>
            </>
          );
        }}
      </AuthorizationProvider>
    </div>
  );
}

export default App;
