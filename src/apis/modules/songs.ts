import { request } from '@/utils'

export const getHotList = () => request.get('/api/playlist/hot')