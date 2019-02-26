import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer } from 'react-toastify';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/socialAuth.css';
import './assets/css/404.css';
import Verification from './components/auth/Verification';
import SocialAuthentication from './components/SocialAuth/SocialLogin';
import Resetpasswordemail from './components/login/passwordreset/Resetpasswordemail';
import Resetpassword from './components/login/passwordreset/Resetpassword';
import MyEditor from './components/Articles/CreateArticle';
import Error404Page from './components/common/404errorPage'
import Profile from './components/Profile/Profile';
import { Home } from './components/home';
import Article from './components/Articles/ArticleView/ArticleDetail';
import EditArticle from './components/Articles/EditArticle';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <div className="App">
          <ToastContainer />
          <Switch>
            <Route path="/" component={Home} exact Strict />
            <Route path="/create-article" component={MyEditor} exact Strict />
            <Route path="/edit-article" component={EditArticle} exact Strict />
            <Route path="/profile" component={Profile} exact />
            <Route
              path="/login"
              component={SocialAuthentication}
              exact
              Strict
            />
            <Route path="/password-reset" component={Resetpasswordemail} />
            <Route
              path="/api/users/password-done/:token"
              component={Resetpassword}
            />
            <Route
              path="/api/activate/account/:pk/:token"
              component={Verification}
            />
            <Route path="/article/:slug" exact component={Article} />
            <Route component={Error404Page}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
