/* @refresh reload */
import { render } from 'solid-js/web';

import "./assets/styles/index.scss";
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
