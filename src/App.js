import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import {AuthProvider} from './auth/AuthProvider';
import Login from './pages/Login';
import Bill from './pages/Bill';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/bills"
          element={
            <PrivateRoute>
              <Bill />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        draggable={true}
        pauseOnHover={true}
      />
    </AuthProvider>
  );
}

export default App;
