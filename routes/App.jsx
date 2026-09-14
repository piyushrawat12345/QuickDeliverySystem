import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { AuthProvider } from "./routes/context/AuthContext";
import { Provider } from "react-redux";
import store from "./routes/redux/store";


const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  );
};

export default App;

/*
<Provider>
        <RouterProvider router={router} />
      </Provider>
      












































//export const msg = <h1> Hii React Message </h1>
//import Parent from './Days-6 hooks/Parent' 
//import UserInfo from './Days-6 hooks/UserInfo'
/*
const App = () => {
  const users = {
    fullname : "Virat Kholi",
    age : 40,
    isMarried : true,
    team : "RCB",
    jersyNo : 18
  }
    
    const fullname = "Virat Kholi";
    const age = 40;
    const isMarried = true;
    
  return (
  <div id ="app">
    <UserDetails 
    fullname = {fullname} 
    age = {age} 
    isMarried = {isMarried} 
    team = "RCB" 
    jersyNo = {18} 
    />
    </div>
  );
};
*/

//import Counter from './Days-6 hooks/Counter'
//import ToggleCounter from './Days-6 hooks/ToggleCounter'

//import ToggleComponent from './Day-6 Condition Rendering/ToggleComponent'
//import Counter from './Day-7 conditional Render/Counter'

//import Parent from './Day-7 conditional Render/Parent'

//import LazyInitializer2 from './Day-7 useState Advanced/LazyInitializer2'
//import AdvancedCounter from './Day-7 useState Advanced/AdvancedCounter'
//import LazyInitialize from './Day-7 useState Advanced/LazyInitialize'
//import LazyInitializer2 from './Day-7 useState Advanced/LazyInitializer2'
//import CounterRef from './Day-9 useRef hooks/CounterRef'
//import InputRef from './Day-9 useRef hooks/InputRef'

//import TimeRef from './Day-9 useRef hooks/TimeRef'

//import Sigin from './Day-9 UnControlled Form/Sigin';
//import { ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';

//import Parent from './Day-10 useEffect Hook/Parent'

//import Home from './Day-11 useEffect Hook Part-2/Home'

//import Parent from './Day-12 useEffect Revision/Parent'
//import ProductPage from './Day-13 useEffect Hook Part-3/ProductPage';

//import ToggleCount from './Day-14 useEffect vs useLayoutEffect/ToggleCount'
//import Parent from './Day-14 React.memo HOC/Parent'