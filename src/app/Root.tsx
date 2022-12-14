import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoadingScreen } from 'common/components';

import AntDesignConfig from './providers/AntDesignConfig';
import Recoil from './providers/Recoil';
import PersistAuthGate from './PersistAuthGate';
import Query from './providers/Query';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import App from './App';

const Root = () => (
  <GlobalErrorBoundary>
    <Suspense fallback={<LoadingScreen fullVPHeight />}>
      <AntDesignConfig>
        <Recoil>
          <Query>
            <PersistAuthGate loading={<LoadingScreen fullVPHeight />}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PersistAuthGate>
          </Query>
        </Recoil>
      </AntDesignConfig>
    </Suspense>
  </GlobalErrorBoundary>
);

export default Root;
