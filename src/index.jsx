import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    favoriteLocations: ['Rostov-on-Don', 'Moscow', 'Tbilisi'],
    currentCity: 'Rostov-on-Don'
}


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TOWN":
            return  {
                ...state, favoriteLocations: [...state.favoriteLocations, action.current]
            };

        case "DELETE_TOWN":
            return {
                favoriteLocations: state.favoriteLocations.filter((item, index) => index !== action.name)
            }

        case "CHOOSE_CURRENT":
            return {
                ...state, currentCity: defaultState.currentCity = (action.current)
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

