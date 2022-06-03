import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {ROUTES} from "./helpers/routes"

const  App = () => {
  const routes = useRoutes(ROUTES)
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          {routes}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
