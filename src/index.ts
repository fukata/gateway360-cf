import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  USERNAME: string
  PASSWORD: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Basic Auth
app.use('*', async (c, next) => {
  console.log(`username=${c.env.USERNAME}, password=${c.env.PASSWORD}`)
  const auth = basicAuth({
    username: c.env.USERNAME,
    password: c.env.PASSWORD,
  })

  return auth(c, next)
})

app.get('/static/*', serveStatic({ root: './' }))

// API
// すべてのイベントを返す
app.get('/api/events', async (c) => {
  const events = []
  return c.json({ events: events })
})

// イベントを作成する
app.post('/api/events', async (c) => {
  const event = {}
  return c.json({ event: event })
})

// イベントを更新する
app.put('/api/events/:eventId', async (c) => {
  const event = {}
  return c.json({ event: event })
})

// イベントを削除する
app.delete('/api/events/:eventId', async (c) => {
  const event = {}
  return c.json({ event: event })
})

// すべてのイベントに対する
app.post('/api/events/:eventId/received_logs', async (c) => {
  return c.json({ message: 'ok' })
})

// すべてのイベントに対する受信ログを返す
app.get('/api/received_logs', async (c) => {
  const receivedLogs = []
  return c.json({ received_logs: receivedLogs })
})

// すべてのイベントに対する送信ログを返す
app.get('/api/sent_logs', async (c) => {
  const sentLogs = []
  return c.json({ sent_logs: sentLogs })
})

app.get('/', (c) => c.text('Hello World!'))

export default app
