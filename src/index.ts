import {app, BrowserWindow} from 'electron';
import CryptowatchEmbed from 'cryptowatch-embed';
//import * as path from 'path';

let win = null
let chart = new CryptowatchEmbed('bitfinex', 'btcusd');
chart.mount('#chart-container');

