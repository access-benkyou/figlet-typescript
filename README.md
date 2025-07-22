# Figletロゴ出力でTypeScript入門

このプロジェクトは、[Figlet](https://www.npmjs.com/package/figlet)を使ったロゴ出力プログラムを通して、TypeScriptの基本的な使い方を学ぶことを目的としています。

## GitHubリポジトリ
https://github.com/access-benkyou/figlet-typescript

## プロジェクトの概要

このプロジェクトでは、文字列をアスキーアートのロゴに変換する簡単なプログラムを作成し、TypeScriptの型定義やインターフェース定義などの基本機能を学習します。

## セットアップと実行手順

1. **依存パッケージのインストール**
   ```powershell
   npm install
   ```

2. **TypeScriptのコンパイル**
   ```powershell
   npx tsc generateLogo.ts
   ```
   - `generateLogo.ts`が`generateLogo.js`に変換されます
   - npxコマンドは、ローカルにインストールされたパッケージを実行するためのコマンドです。`tsc`はTypeScriptコンパイラのコマンドで、`.ts`ファイルをJavaScriptに変換します。

3. **プログラムの実行**
   ```powershell
   node generateLogo.js
   ```
   または引数付きで実行:
   ```powershell
   node generateLogo.js "TypeScript"
   ```

## TypeScriptとは？

TypeScriptは、JavaScriptに型定義やインターフェースなどの機能を追加したプログラミング言語です。型安全性が高まり、開発時のエラーを減らすことができます。

### 型定義の例

本プロジェクトの`generateLogo.ts`から実際の例を見てみましょう：

```typescript
// 基本的な型定義
const font: string = "slant";        // 文字列型
const width: number = 80;            // 数値型
const whitespaceBreak: boolean = true; // 真偽値型
```

上記のように変数の後に`: 型名`をつけることで、その変数に入る値の型を明示できます。これにより、意図しない型の値が代入された場合にコンパイル時にエラーとなります。

### インターフェース定義の例

複雑なオブジェクトの構造を定義する際に使用します：

```typescript
// インターフェース定義
interface FigletOptions {
  font: string;
  width: number;
  whitespaceBreak: boolean;
}

// インターフェースを使った変数の宣言
const figletOptions: FigletOptions = {
  font,
  width,
  whitespaceBreak
};
```

`FigletOptions`インターフェースは、オブジェクトが持つべきプロパティとその型を定義しています。これにより、必要なプロパティが不足していたり、型が間違っていたりした場合にエラーを検出できます。

## インストールしているパッケージについて

`package.json`で管理している主なパッケージは以下の通りです：

### 実行時の依存パッケージ（dependencies）
- **figlet**: 文字列をアスキーアートのロゴに変換するライブラリです。実際のロゴ生成を担当します。

### 開発時の依存パッケージ（devDependencies）
- **typescript**: TypeScriptのコンパイラ(tsc)を提供します。`.ts`ファイルを`.js`ファイルに変換するために必要です。
- **@types/node**: Node.jsの型定義ファイル。`process.argv`などのNode.js固有のAPIを型安全に使うために必要です。

### 型定義ファイル（@typesパッケージ）について

`@types/node`のような型定義ファイルは、既存のJavaScriptライブラリをTypeScriptで型安全に使うために必要です。これらのファイルには、ライブラリの関数や変数の型情報が記載されており、TypeScriptのコンパイラが型チェックを行う際に参照されます。

## なぜコンパイルが必要なのか？

TypeScriptは型情報やインターフェースなど、JavaScriptにはない機能を持っています。Node.jsはJavaScriptのみを実行できるため、TypeScriptで書いたコードは必ずJavaScriptに変換（コンパイル）する必要があります。

コンパイル前後の違いを見てみましょう：

**コンパイル前（generateLogo.ts）:**
```typescript
const font: string = "slant";  // 型定義あり
```

**コンパイル後（generateLogo.js）:**
```javascript
const font = "slant";          // 型定義が削除される
```

これにより、型安全性を保ちつつ、Node.js環境で動作するプログラムを作成できます。

## tsconfig.jsonについて

このプロジェクトでは `tsconfig.json` を作成していませんが、作成することで以下のメリットが得られます：

### tsconfig.jsonを使うメリット
- TypeScriptコンパイラの設定（出力先、対象ファイル、ESバージョン、型チェックの厳格さなど）を細かく制御できる
- 複数のTypeScriptファイルを一括でコンパイルできる（`npx tsc`だけで実行可能）
- 厳格な型チェック（`strict`オプションなど）を有効にできる

### 厳格な設定によるメリット
- 型の不一致や未定義の変数・関数の利用を防げる
- 予期しない型変換や実行時エラーを減らせる
- コードの保守性・可読性が向上する
- チーム開発での品質統一が可能

### tsconfig.jsonがない場合の現在の挙動
- `npx tsc generateLogo.ts` のように個別ファイルのみコンパイル可能
- コンパイラのデフォルト設定で動作（比較的緩い設定）
- プロジェクト全体の型安全性管理が困難

TypeScriptを本格的に使う場合は、`tsconfig.json`の作成をおすすめします。

## Figletのフォント
Figletは多くのフォントをサポートしています。`generateLogo.ts`では、`slant`というフォントを使用していますが、他にも様々なフォントが利用可能です。
フォントを変更するには、`font`変数の値を変更するだけです。

### フォントの例
- `slant`: スラント体のフォント
- `standard`: 標準的なフォント
- `block`: ブロック体のフォント
他にもいろいろあるのでFiglet公式ページを参照してください。

## 参考リンク
- [TypeScript公式サイト](https://www.typescriptlang.org/)
- [Figlet公式ページ](https://www.npmjs.com/package/figlet)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---
このREADMEは初心者向けに、TypeScriptの基礎と本プロジェクトの使い方をわかりやすくまとめています。
