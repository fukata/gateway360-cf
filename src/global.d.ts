export type ReceivedLog = {
  // 受信ログID
  id: string
  // イベントID
  event_id: string
  // 受信日時
  received_at: string
  // ペイロード
  payload: string
  // イベント発生日時
  event_fired_at: string
  // 送信元IPアドレス
  source_ip_address: string
}
