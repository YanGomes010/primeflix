import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteApp from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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