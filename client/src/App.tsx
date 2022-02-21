import {Footer, Navbar, Services, Transactions, Welcome} from "./components";
import './i18n';

const App = () => {

  //TODO: add some animation via framer motion

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App;
