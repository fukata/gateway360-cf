import { Suspense } from 'hono/jsx/streaming'
import { getReceivedLogs } from '../../api'
import { Layout } from '../components/layout'

export const ReceivedLogs = () => {
  return (
    <Layout title="受信ログ">
      <h2>受信ログ</h2>
      <Suspense fallback={<div>loading...</div>}>
        <AsyncLogsTable />
      </Suspense>
    </Layout>
  )
}

const AsyncLogsTable = async () => {
  const logs = await fetchLogs()

  return (
    <table border={'1'} style={tableStyle}>
      <thead style={headStyle}>
        <tr>
          <th>ID</th>
          <th>イベントID</th>
          <th>受信日時</th>
          <th>ペイロード</th>
          <th>イベント発生日時</th>
          <th>送信元IP</th>
        </tr>
      </thead>
      <tbody style={bodyStyle}>
        {logs.map((log) => (
          <tr key={log.id}>
            <td>{log.id}</td>
            <td>{log.event_id}</td>
            <td>{log.received_at}</td>
            <td>{log.payload}</td>
            <td>{log.event_fired_at}</td>
            <td>{log.source_ip_address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const fetchLogs = async () => {
  return getReceivedLogs()
}

const tableStyle = {
  width: '100%',
  borderColor: '#ccc',
  borderCollapse: 'collapse',
}

const headStyle = {
  backgroundColor: '#222',
  color: '#cdcdcd',
  fontWeight: 'bold',
}

const bodyStyle = {
  backgroundColor: '#444',
  color: '#cdcdcd',
}
