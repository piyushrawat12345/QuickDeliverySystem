import { createRoot } from 'react-dom/client'
//import App,{msg} from './App'
import App from './App'
import './index.css'

//createRoot(document.getElementById("root")).render(<h1> Hello World </h1>)

const val = createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>
);