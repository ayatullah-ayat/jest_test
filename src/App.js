import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import routes from './Routes/Route';

function App() {
  return (
    <div>
      <Nav />
      <Suspense fallback={<p style={{ color:'#fff' }}>Loading...</p>}>
        <Routes>
          {
            routes.map((route, index) => {
              const { path, element } = route;
              return <Route key={index} path={path} element={element} />
            })
          }
        </Routes> 
      </Suspense>
    </div>
  );
}

export default App;
