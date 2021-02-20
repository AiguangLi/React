import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app.js';
import logger from '@/utils/logger';

logger.init();

ReactDOM.render(<App />, document.getElementById('app'));
