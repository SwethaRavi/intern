import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<BrowserRouter>
<div>
<Route exact path='/' component={App}/>
<Route path='/result' component={App1}/>
</div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
