/*
 * @Author: fzf404
 * @Date: 2022-03-04 18:26:21
 * @LastEditTime: 2022-03-12 13:55:23
 * @Description: socket.io
 */
import { io } from 'socket.io-client'

// 初始化 websocket
const socket = io(import.meta.env.VITE_SERVER_URL)

export { socket }
