
// figlet: 文字列をアスキーアートに変換するライブラリ
import * as figlet from 'figlet';

// コマンドライン引数から表示する文字列を取得（未指定なら 'HELLO'）
const input = process.argv[2] || 'HELLO';

// アスキーアートのフォントとオプションを設定
const font: string = "slant"; // 使用するフォント名
const width: number = 80; // アスキーアートの最大幅
const whitespaceBreak: boolean = true; // 空白で改行を許可

// インターフェース
interface FigletOptions {
  font: string;
  width: number;
  whitespaceBreak: boolean;
}
// figletのオプションを定義
const figletOptions: FigletOptions = {
  font,
  width,
  whitespaceBreak
};
const asciiArt = figlet.textSync(input, figletOptions);

// アスキーアートのみを表示
console.log(asciiArt);



