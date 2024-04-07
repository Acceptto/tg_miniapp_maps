import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from '@xelene/tgui';
import App from './App.jsx';
import './index.css';
import '@xelene/tgui/dist/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppRoot>
			<App />
		</AppRoot>
	</React.StrictMode>
);
