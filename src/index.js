import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LiveSearch from './components/live-search';
import './index.css';
import recipes from './recipes.json';

ReactDOM.render(<LiveSearch />, document.getElementById('root'));
registerServiceWorker();
