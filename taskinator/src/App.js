import Navbar from "./Navbar"
import "./styles.css"

import About from "./Pages/About"
import CompanyList from "./Pages/CompanyList"
import SignIn from "./Pages/SignIn"


function App() {
  let component
  switch (window.location.pathname){
   

    case "/About":
        component = <About />
      break
    case "/CompanyList":
        component = <CompanyList />
      break
    case "/SignIn":
        component = <SignIn />
        break
  }
  return (
   
    <>
      <Navbar />
      {component}

      
      </>

      
  )
}

export default App;
