import { userDataFromLocalStorage } from './atoms';
import NavBar from './components/Organisms/Navigation/NavBar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { LayoutMain } from './layout/LayoutMain';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import AddEmployee from './pages/addEmployee';
import Detail from './pages/detail';
import Edit from './pages/edit';
import { useAtom } from 'jotai';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import colors from 'tailwindcss/colors';

function App(): JSX.Element {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, _] = useAtom<any>(userDataFromLocalStorage);
  return (
    <div className="">
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: colors.neutral[800],
            color: colors.white,
          },
        }}
      />
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LayoutMain />}>
          <Route
            index
            element={
              <ProtectedRoute user={userData}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute user={userData}>
                <Detail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute user={userData}>
                <Edit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/addemployee"
            element={
              <ProtectedRoute user={userData}>
                <AddEmployee />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
