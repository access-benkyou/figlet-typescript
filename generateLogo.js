"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// figlet: 文字列をアスキーアートに変換するライブラリ
var figlet = require("figlet");
// コマンドライン引数から表示する文字列を取得（未指定なら 'HELLO'）
var input = process.argv[2] || 'HELLO';
// アスキーアートのフォントとオプションを設定
var font = "slant"; // 使用するフォント名
var width = 80; // アスキーアートの最大幅
var whitespaceBreak = true; // 空白で改行を許可
// figletのオプションを定義
var figletOptions = {
    font: font,
    width: width,
    whitespaceBreak: whitespaceBreak
};
var asciiArt = figlet.textSync(input, figletOptions);
// アスキーアートのみを表示
console.log(asciiArt);
