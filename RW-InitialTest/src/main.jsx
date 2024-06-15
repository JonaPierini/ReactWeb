import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";

import { FirstApp } from "./FirstApp";
// import { HelloWorldApp } from './HelloWorldApp';
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hola, Soy Vegeta" /> */}
  </React.StrictMode>
);

{
  /* 
    1. Testing con jest => ORIENTADA mas a funciones y referencia al backend.
    npm i jest
    2. Ir al package.json =>   
    "scripts": {
         "test": "jest --watchAll"
        },
    El watchAll es para que este escuchando continuamente
    3. Podemos tener o no la aplicacion corriendo
    4. npm run test => tira un error pq no hay ninguna prueba
    5. Al mismo nivel de src => Creo una carpeta tests
    6. Primer test de prueba => demo.test.js 
    7. Instalar un dependencia de desarrollo => npm i -D @types/jest para que nos ayude con los nombres que tienen los metodos de jest
    8. Para hacer pruebas debe de estar exportado eso a probar
    9. Ver en la documentación las instalaciones necesarias


    10. REACT Testing Library => (ver la instalacion) Mas enfocada al DOM. Acciones que hace el usuario con los botones, formularios, etc. Esta destinada a web pero esta la parte de react-native

    11. Instalar npm i -jest-environment-jsdom
    12. modificar el jest.config.js => 
        module.exports = {
            testEnvironment: 'jest-environment-jsdom',
            setupFiles: ['./jest.setup.js']
        }
    13. En babel.config.js => 
        module.exports = {
                presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
    14. npm i babel/present-react
};
*/
}
