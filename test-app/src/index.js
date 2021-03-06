import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";  // allows you to see redux in chrome dev tools
import rootReducer from "./rootReducer";
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
