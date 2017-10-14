"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let win = null;
electron_1.app.on('ready', () => {
    win = new electron_1.BrowserWindow();
    win.setBounds({ x: 0, y: 0, width: 0, height: 0 });
});
//# sourceMappingURL=index.js.map