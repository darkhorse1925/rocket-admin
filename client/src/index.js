import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ItemProvider} from './context/ItemsContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ItemProvider>
		<App />
	</ItemProvider>
)

