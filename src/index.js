import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={3000}/>
    <RouteApp/>
  </React.StrictMode>
);

 // const [nutri, setNutri] = useState([]);
  //  useEffect(() => {
  //  function loadApi() {
  //  let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
  //fetch(url)
  //.then((r) => r.json())
  //    .then((json) => {
  //    setNutri(json);
  // });
  // }
  //loadApi();
  //}, []);