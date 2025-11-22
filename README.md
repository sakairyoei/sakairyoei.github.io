# Portfolio Website - Next.js + Tailwind CSS

AI × DXコンサルタントのポートフォリオサイト

## 🚀 技術スタック

- **Next.js 14** - Reactフレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS
- **Framer Motion** - アニメーションライブラリ
- **GitHub Pages** - ホスティング

## ✨ 特徴

- ⚡ 高速なページロード（静的サイト生成）
- 🎨 モダンでレスポンシブなデザイン
- 🌈 滑らかなアニメーション
- 📱 モバイルファースト設計
- ♿ アクセシビリティ対応
- 🔍 SEO最適化

## 📦 セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール手順

1. **依存パッケージのインストール**
```bash
npm install
```

2. **開発サーバーの起動**
```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開く

## 🛠️ カスタマイズ方法

### 基本情報の変更

1. **メタデータ（SEO情報）**
   - `app/layout.tsx` の `metadata` オブジェクトを編集

2. **個人情報**
   - `components/Contact.tsx` の `contactMethods` 配列を編集
   - メールアドレス、SNSリンクなどを変更

3. **プロジェクト内容**
   - `components/Projects.tsx` の `projects` 配列を編集

4. **スキル**
   - `components/Skills.tsx` の `skillCategories` 配列を編集

5. **サービス内容**
   - `components/Services.tsx` の `services` 配列を編集

### デザインのカスタマイズ

`tailwind.config.js` でカラーテーマを変更：

```javascript
colors: {
  primary: {
    500: '#667eea',  // メインカラー
    600: '#5568d3',  // ホバーカラー
    // ...
  },
}
```

### Next.js設定の変更

`next.config.js` でビルド設定を変更：

```javascript
const nextConfig = {
  output: 'export',
  // リポジトリ名が username.github.io の場合は basePath を '' に設定
  // 別の名前の場合は '/repository-name' に設定
  basePath: '',
}
```

## 🌐 GitHub Pagesへのデプロイ

### 方法1: 自動デプロイ（推奨）

1. **GitHubリポジトリを作成**
   - リポジトリ名: `username.github.io` または任意の名前

2. **コードをプッシュ**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

3. **GitHub Pagesの設定**
   - リポジトリの Settings > Pages へ移動
   - Source: GitHub Actions を選択

4. **自動デプロイ**
   - main ブランチにプッシュすると自動的にデプロイされます
   - デプロイ状況は Actions タブで確認できます

### アクセスURL

- リポジトリ名が `username.github.io` の場合:
  - `https://username.github.io`
  
- 別の名前の場合:
  - `https://username.github.io/repository-name`
  - `next.config.js` の `basePath` を `/repository-name` に変更してください

## 📝 ビルドコマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 静的ファイル生成（GitHub Pages用）
npm run export

# リント
npm run lint
```

## 📁 プロジェクト構成

```
portfolio/
├── app/
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # メインページ
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── Navbar.tsx        # ナビゲーションバー
│   ├── Hero.tsx          # ヒーローセクション
│   ├── About.tsx         # 自己紹介
│   ├── Services.tsx      # サービス
│   ├── Skills.tsx        # スキル
│   ├── Projects.tsx      # プロジェクト（タイムライン）
│   ├── Contact.tsx       # お問い合わせ
│   └── Footer.tsx        # フッター
├── .github/
│   └── workflows/
│       └── nextjs.yml    # GitHub Actions設定
├── public/
│   └── .nojekyll         # GitHub Pages用
├── next.config.js        # Next.js設定
├── tailwind.config.js    # Tailwind CSS設定
├── tsconfig.json         # TypeScript設定
└── package.json          # 依存関係
```

## 🐛 トラブルシューティング

### ビルドエラー

```bash
# node_modules と .next を削除して再インストール
rm -rf node_modules .next
npm install
npm run dev
```

### GitHub Pagesで表示されない

1. GitHub Actions のログを確認
2. `next.config.js` の `basePath` が正しいか確認
3. リポジトリ設定で GitHub Pages が有効か確認

## 📄 ライセンス

このプロジェクトは自由に使用・改変できます。

---

**最終更新**: 2025年11月22日
