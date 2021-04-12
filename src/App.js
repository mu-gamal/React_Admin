import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="splash">
    <p>Loading...</p>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
          <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
