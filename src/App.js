
import TopApp from "./components/TopApp";
import AppDetail from "./components/AppDetail";
import { BrowserRouter as Router, Navigate, Route,Routes} from "react-router-dom";

const App = () => {
  
  return (
   
    <div class="container">
       <Router>
         <Routes>
          <Route path="/" element={<TopApp></TopApp>}>
            </Route> 
            <Route path="/AppDetail/:Id" element={<AppDetail ></AppDetail>}>
            </Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
         </Routes>
       </Router>
    </div>
   

  )
}
export default App;
