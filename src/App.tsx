import './App.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import SigninClientPage from './Pages/SigninClientPage';
import SignupClientPage from './Pages/SignupClientPage';
import SigninAdminPage from './Pages/SigninAdminPage';
import SignupAdminPage from './Pages/SignupAdminPage';
import ClientHomePage from './Pages/ClientHomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },

  {
    path:'/SigninClient',
    element:<SigninClientPage />
  },

  {
   path:'/SignupClient',
   element:<SignupClientPage/> 
  },

  {
   path:'/SigninAdmin',
   element:<SigninAdminPage/>
  },

  {
    path:'/SignupAdmin',
    element:<SignupAdminPage/>
  },

  {
    path:'/ClientHomePage',
    element:<ClientHomePage/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App; 
