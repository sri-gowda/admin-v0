import { lazy, Suspense } from 'react';
import './App.css';
// import SignUp from './pages/signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthLayout, DashboardLayout } from './layouts';

const SignUpPage = lazy(() => import('./pages/signup'));
const LoginPage = lazy(() => import('./pages/login'));
const HomePage = lazy(() => import('./pages/home'));
const ProductsPage = lazy(() => import('./pages/products'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="home" element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
