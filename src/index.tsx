
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const reactComponent: JSX.Element = <App /> as JSX.Element;
const reactRoot: HTMLDivElement = document.getElementById('reactRoot') as HTMLDivElement;

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
