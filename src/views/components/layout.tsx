import { Sidebar } from './sidebar'

export const Layout = (props: { title?: string; children?: any }) => {
  const appName = 'Gateway 360'
  const title = props.title != null ? `${props.title} | ${appName}` : appName
  return (
    <html lang="ja" style={htmlStyle}>
      <head>
        <title>{title}</title>
      </head>
      <body style={htmlStyle}>
        <header style={headerStyle}>
          <img src={'/static/images/logo.png'} style={{ height: '40px' }} alt={appName} />
          <span style={{ fontSize: 'x-large', fontWeight: 'bold', paddingLeft: basePadding }}>
            {appName}
          </span>
        </header>

        <div style={containerStyle}>
          <aside style={sidebarStyle}>
            <Sidebar />
          </aside>

          <main style={contentStyle}>
            {props.children}
          </main>
        </div>
      </body>
    </html>
  )
}

// 基本の背景色
const baseBackgroundColor = '#222'

// 基本の文字色
const baseColor = '#cdcdcd'

// 基本のパディング
const basePadding = '10px'

// ヘッダーの高さ
const headerHeight = '40px'

// サイドバーの幅
const sidebarWidth = '300px'

// サイドバーの背景色
const sidebarBackgroundColor = '#333'

// サイドバーのボーダー
const sidebarBorder = '1px solid #444'

// コンテンツの背景色
const contentBackgroundColor = '#333'

const htmlStyle = {
  margin: 0,
  padding: 0,
  fontFamily: ["Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans", "Meiryo", "sans-serif"],
  fontSize: '16px',
  lineHeight: '1.5',
  color: baseColor,
  backgroundColor: baseBackgroundColor,
  height: '100%',
  boxSizing: 'border-box',
}

const headerStyle = {
  height: headerHeight,
  display: 'flex', // フレックスボックスを使用
  alignItems: 'center', // アイテムを縦方向に中央寄せ
  padding: basePadding,
}

const containerStyle = {
  display: 'flex',
  // 画面いっぱいの高さ（ヘッダーの高さ, 上下の余白）
  height: `calc(100vh - ${headerHeight} - ${basePadding} - ${basePadding})`,
}

const sidebarStyle = {
  width: sidebarWidth,
  height: '100%', // 高さを画面いっぱい
  backgroundColor: sidebarBackgroundColor,
  borderRight: sidebarBorder,
  padding: basePadding,
}

const contentStyle = {
  flex: '1', // 残りの幅を全て使用
  height: '100%', // 高さを画面いっぱい
  backgroundColor: contentBackgroundColor,
  padding: basePadding,
}