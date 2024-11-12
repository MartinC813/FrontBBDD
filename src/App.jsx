import './App.css'
import { AuthProvider } from './AuthContext/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './features/login';
import PrivateRoute from './navigation/PrivateRoute';
import BasePage from './features/basePage';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<BasePage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
      
  )
}

export default App
