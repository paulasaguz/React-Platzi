import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/componentes/media.js';

const app = document.getElementById('app');

render(<Media title="¿Quien quiere bitcoins?" autor="Paula" image="../images/bitcoin.png"/>, app);