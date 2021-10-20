import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ServicePage from './Pages/ServicePage/ServicePage';
import NotFound from './Pages/NotFound/NotFound';
import SingleService from './Pages/SingleService/SingleService';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/contexts/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Footer/Footer';
import Payment from './Pages/Payment/Payment';
import OurTeam from './Pages/OurTeam/OurTeam';



function App() {
  return (
    
    <AuthProvider>
      <Router>
        <Header></Header>
         <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/servicepage">
              <ServicePage></ServicePage>

            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            
            <PrivateRoute exact path="/servicepage/:_id">
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/dentalteam">
              <OurTeam></OurTeam>
            </PrivateRoute>
            
            
            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="/register">
              <Register></Register>

            </Route>

            <Route exact path="*">
             <NotFound></NotFound>
              </Route> 
         </Switch>
         <Footer></Footer>
      </Router>
      </AuthProvider>
   
  );
}

export default App;
