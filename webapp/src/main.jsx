import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { AppRoot } from '@xelene/tgui';
import App from './App.jsx';
import './index.css';
import '@xelene/tgui/dist/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRoot>
				<App />
			</AppRoot>
		</BrowserRouter>
	</React.StrictMode>
);
