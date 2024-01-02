import { ReceivedLog } from './global'

export const getReceivedLogs = async (): Promise<ReceivedLog[]> => {
  const receivedLogs = [
    {
      id: '1',
      event_id: '1',
      received_at: '2020-01-01T00:00:00.000Z',
      payload: '{}',
      event_fired_at: '2020-01-01T00:00:00.000Z',
      source_ip_address: '192.168.1.100',
    },
  ]
  return receivedLogs
}
