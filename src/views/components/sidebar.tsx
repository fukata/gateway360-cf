export const Sidebar = () => {
  return (
    <div>
      <h2>Menu</h2>

      <ul style={{ margin: '0', padding: '0' }}>
        <li style={itemStyle}>
          <a href={'/events'} style={linkStyle}>
            イベント一覧
          </a>
        </li>
        <li style={itemStyle}>
          <a href={'/received_logs'} style={linkStyle}>
            受信ログ
          </a>
        </li>
        <li style={itemStyle}>
          <a href={'/sent_logs'} style={linkStyle}>
            送信ログ
          </a>
        </li>
      </ul>
    </div>
  )
}

const itemStyle = {
  listStyle: 'none',
  padding: '5px',
}

const linkStyle = {
  color: '#cdcdcd',
}
