import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import PrivateRoute from '../PrivateRouter';
import PublicRoute from '../PublicRouter';
import AppBar from './AppBar';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './App.module.css';

const AsyncHomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-page"*/),
);
const AsyncLoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-page"*/),
);
const AsyncRegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-page"*/),
);
const AsyncContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-page"*/),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            type="Hearts"
            color="#00BFFF"
            height={80}
            width={80}
            className={styles.loader}
          />
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <AsyncHomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <AsyncRegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <AsyncLoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <AsyncContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  ) : null;
}
