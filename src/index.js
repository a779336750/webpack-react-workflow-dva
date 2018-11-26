import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/app';

import dva from 'dva';
import { registerModels } from './models';

const app = new dva();
registerModels(app);
app.router(({ history }) => <App history={history} />);
app.start('#app');
