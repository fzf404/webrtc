/*
 * @Author: fzf404
 * @Date: 2022-03-02 18:57:39
 * @LastEditTime: 2022-03-11 21:50:48
 * @Description: 后端
 */

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, { cors: true })

const port = 9000

let rooms = {} // 房间数据
let users = [] // 用户数据

// 封装日志
const log = (msg) => {
  console.log(`${new Date().toLocaleString()} - ${msg}`)
}

io.on('connection', (sock) => {
  // 保存入用户
  log(`${sock.id} - 连接成功`)
  users.push(sock.id)

  // 加入房间
  sock.on('join', ({ userName, roomId }) => {
    rooms[roomId] = rooms[roomId] || []
    // 判断是否已经加入过房间 && 用户数量
    if (rooms[roomId].findIndex((item) => item.sockId === sock.id) === -1 && rooms[roomId].length < 2) {
      // 加入房间
      sock.join(roomId)
      rooms[roomId].push({ roomId, userName, sockId: sock.id })
      // 广播房间信息
      io.to(roomId).emit('joined', { room: rooms[roomId] })
      log(`${sock.id} - ${userName} 加入房间 ${roomId}`)
    } else {
      sock.emit('error', '已经加入过房间 或 房间已满')
    }
  })

  // 退出房间
  sock.on('exit', ({ roomId }) => {
    // 退出房间
    sock.leave(roomId)
    // 删除用户
    rooms[roomId] = rooms[roomId].filter((item) => item.sockId !== sock.id)
    // 广播房间信息
    io.to(roomId).emit('exited', { room: rooms[roomId] })
    log(`${sock.id} - 退出房间 ${roomId}`)
  })

  // 断开连接
  sock.on('disconnect', () => {
    log(`${sock.id} - 断开连接`)

    // 从用户列表中删除
    users.pop(sock.id)

    // 遍历退出房间
    let exits = []
    for (let roomId in rooms) {
      rooms[roomId] = rooms[roomId].filter((item) => {
        if (item.sockId === sock.id) {
          sock.leave(roomId) // 离开房间
          exits.push(roomId) // 保存修改过的房间号
          return false
        } else {
          return true
        }
      })
    }

    // 广播房间用户信息
    exits.forEach((roomId) => {
      io.to(roomId).emit('exited', { room: rooms[roomId] })
    })

    log(`${sock.id} - 退出房间 ${exits}`)
  })

  // 创建 RTC 连接
  sock.on('offer', ({ roomId, offer }) => {
    log(`${sock.id} - 发送 offer`)
    // 向房间内除自己的其他用户广播 offer
    sock.to(roomId).emit('offer', offer)
  })

  // 应答 RTC 连接
  sock.on('answer', ({ roomId, answer }) => {
    log(`${sock.id} - 发送 answer`)
    sock.to(roomId).emit('answer', answer)
  })

  // 候选人信息转发
  sock.on('candidate', ({ roomId, candidate }) => {
    log(`${sock.id} - 发送 candidate`)
    sock.to(roomId).emit('candidate', candidate)
  })

  // 用户人数
  sock.on('number', () => {
    sock.emit('number', { user: users.length, room: Object.keys(rooms).length })
  })
})

// 启动服务
http.listen(port, () => {
  log('server running on ' + port)
})
