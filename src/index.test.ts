import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { unstable_dev } from 'wrangler'
import type { UnstableDevWorker } from 'wrangler'

/**
 * テスト用のヘッダーオブジェクトを返す
 * @param init 初期化オブジェクト（ヘッダーのHashMap）
 */
function newTestHeaders(init?: Map<string, string>): Headers {
  const headers = new Map<string, string>()
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Basic ${btoa('admin:admin')}`)
  if (init) {
    for (const [k, v] of init) {
      headers.set(k, v)
    }
  }
  return new Headers(headers)
}

describe('Worker', () => {
  let worker: UnstableDevWorker

  beforeAll(async () => {
    worker = await unstable_dev('src/index.ts', {
      experimental: { disableExperimentalWarning: true },
    })
  })

  afterAll(async () => {
    await worker.stop()
  })

  it('should return Hello World', async () => {
    const resp = await worker.fetch('/', {
      method: 'GET',
      headers: newTestHeaders(),
    })
    if (resp) {
      const text = await resp.text()
      // <title>Gateway 360</title> が含まれていることを確認する
      expect(text).toContain('<title>Gateway 360</title>')
    }
  })
})
