import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import { Route, Switch, Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import RouterScrollToTop from '../packages/router-scroll-to-top';

// must be first
import { store, history } from './store/configureStore';
import StorePersistGate from './store/StorePersistGate';
// order matters
import IsLoggedIn from '../common/services/user/guards/IsLoggedIn';
import { NotFound } from '../common/components';
import ErrorBoundary from './components/ErrorBoundary';
import AuthRoutes from '../features/auth/routes';

const Root = () => (
  <ErrorBoundary>
    <LocaleProvider locale={enUS}>
      <Provider store={store}>
        <StorePersistGate>
          <ConnectedRouter history={history}>
            <RouterScrollToTop>
              <Switch>
                <Route path="/auth" component={AuthRoutes} />
                <Route
                  exact
                  path="/"
                  component={IsLoggedIn(() => (
                    <Link to="/auth/logout">
                      <Trans i18nKey="logout">Logout</Trans>
                    </Link>
                  ))}
                />
                <Route component={NotFound} />
              </Switch>
            </RouterScrollToTop>
          </ConnectedRouter>
        </StorePersistGate>
      </Provider>
    </LocaleProvider>
  </ErrorBoundary>
);

export default Root;
