import { Hono } from 'hono'
import { serveStatic } from "hono/cloudflare-workers";

const app = new Hono()

app.get('/static/*', serveStatic({ root: './' }))
app.get('/', (c) => c.text('Hello World!'))

export default app