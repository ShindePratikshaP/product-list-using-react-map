
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from "./views/Home/Home.jsx";
import { BG_COLOR } from './configs/app.js';



createRoot(document.getElementById('root')).render(
  <div style={{backgroundColor: BG_COLOR , minHeight:"100vh", margin:0 , padding:0 }}>
    < Home />
  </div>
 
)
