import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './Routes/Route';

function App() {
  return (
    <div>
      <Routes> 
        {
          routes.map((route,index) => {
            const { path, element } = route;
            <Route key={index} path={path} element={element} />
          })
        }
      </Routes> 
    </div>
  );
}

export default App;
