import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import SelectAction from './components/SelectAction';
import CreatePassword from './components/CreatePassword';
import SeedPhrase from './components/SeedPhrase';
import SeedConfirm from './components/SeedConfirm';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true, element: <Navigate to="/welcome" replace />,
      },
      {
        path: '/welcome', element: <Welcome />,
      },
      {
        path: '/select-action', element: <SelectAction />,
      },
      {
        path: '/create-password', element: <CreatePassword />
      },
      {
        path: '/seed-phrase', element: <SeedPhrase />
      },
      {
        path: '/seed-phrase-intro', element: <SeedConfirm />
      },
      {
        path: '/home', element: <Home />
      },
      
      
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
