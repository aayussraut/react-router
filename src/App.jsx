import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {navigation.state === "loading" ? <h1>Loading...</h1> : <Outlet />}
      {/* <Outlet /> */}
    </>
  );
}

export default App;
