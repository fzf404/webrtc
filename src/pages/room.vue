<!--
 * @Author: fzf404
 * @Date: 2022-03-04 15:13:53
 * @LastEditTime: 2022-03-16 16:56:05
 * @Description: 房间
-->
<script setup>
import { NButton, NModal, NCard, NInput, useMessage, NSpace, NTag, useNotification, NInputGroup } from 'naive-ui'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import Clipboard from 'clipboard'
import { socket } from '../utils/socket'
import router from '../router/router'

// 通知组件
const message = useMessage()
const notification = useNotification()

// 剪贴板
new Clipboard('.copy-btn')

// 房间 id 及 变量
const roomId = useRoute().params.roomId
const url = window.location.href

// RTC 连接, 媒体流
let peer, stream

// 展示信息
const show = reactive({
  modal: true,
  copy: true,
  call: false,
})

const info = reactive({
  name: '',
  users: [],
})

// 初始化 RTC
const init = async () => {
  // 读取本地摄像头并显示
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    const video = document.getElementById('local')
    video.srcObject = stream
    video.muted = true // 静音
  } catch {
    notification.error({ title: '找不到媒体流！', content: '请使用有 摄像头/麦克风 的设备，或授与访问权限。' })
    return
  }
  console.log('本地媒体流已获取')

  // 新建连接
  peer = new RTCPeerConnection()

  // RTC 检测
  if (!peer) {
    notification.error({ title: '浏览器暂不支持WebRTC！', content: '推荐使用新版 Chrome、Firefox、Edge 浏览器。' })
    return
  }

  // 添加媒体流
  stream.getTracks().forEach((track) => peer.addTrack(track, stream))

  console.log('WebRTC 已初始化')

  // 提供连接信息
  peer.onicecandidate = (e) => {
    if (e.candidate) {
      socket.emit('candidate', { roomId, candidate: e.candidate })
      console.log('候选人发送成功')
    } else {
      console.log('候选人收集成功')
    }
  }

  // 接收对方音视频数据
  peer.ontrack = async (e) => {
    show.call = false
    console.log('接收到音视频数据')
    // 展示视频
    const video = document.getElementById('remote')
    video.srcObject = e.streams[0]
  }

  // 接收对方应答
  socket.on('answer', async (answer) => {
    console.log('收到回答')

    await peer.setRemoteDescription(new RTCSessionDescription(answer))
  })

  // 接收候选人信息
  socket.on('candidate', async (candidate) => {
    console.log('收到候选人')

    await peer.addIceCandidate(candidate)
  })
}

// 加入房间
const join = () => {
  // 关闭模态框
  show.modal = false

  // 验证用户名
  if (info.name.length === 0) {
    info.name = '无名氏'
  }

  // 加入房间
  socket.emit('join', { roomId, userName: info.name })

  console.log('已加入房间')
}

// 发起连接
const send = async () => {
  // 初始化 RTC
  await init()

  // 关闭发起通话按钮
  show.call = false

  console.log('发起连接')

  // 创建 offer
  const offer = await peer.createOffer()

  // 设置本地连接属性
  await peer.setLocalDescription(offer)

  // 发起连接
  socket.emit('offer', { roomId, offer })
}

// 接收远程连接
socket.on('offer', async (offer) => {
  // 初始化 RTC
  await init()

  console.log('收到连接')

  // 设置远程连接属性
  await peer.setRemoteDescription(new RTCSessionDescription(offer))

  // 创建响应
  const answer = await peer.createAnswer()
  // 设置本地响应
  await peer.setLocalDescription(answer)

  // 发送响应
  socket.emit('answer', { roomId, answer })
})

// 用户加入
socket.on('joined', (users) => {
  info.users = users.room
  if (info.users.length > 1) {
    message.success('有用户加入啦～')
    show.call = true
    show.copy = false
  }
})

// 用户离开
socket.on('exited', async (users) => {
  info.users = users.room
  message.warning('有用户离开了！')
  if (info.users.length < 2) {
    show.call = false
    show.copy = true
  }
})

// 错误处理
socket.on('error', (msg) => {
  notification.error({ title: '出错了', content: msg })
  router.push('/')
})

// 退出
const exit = () => {
  // 退出房间
  socket.emit('exit', { roomId })
  // 停止 RTC 连接
  peer && peer.close()
  // 停止摄像头
  stream && stream.getTracks().forEach((track) => {
    track.stop()
  })
  // 回到主页
  router.push('/')
}
</script>

<template lang="pug">

//- 用户昵称模态框
n-modal(:show="show.modal") 
  n-card(title="请设置昵称" size="huge")
    n-input(maxlength="16" show-count v-model:value="info.name" @keyup.enter="join()" placeholder="输入昵称")
    template(#footer)
      n-button.float-right( @click="join()") 确认


.flex.flex-col.space-y-4.items-center.p-4
  //- 房间号
  n-tag(type="info" size="large" round) 房间号：{{ roomId }}
  //- 当前房间用户信息
  .max-w-6xl.mt-4
    n-space
      n-tag(v-for="user in info.users" type="warning" ) 用户：{{ user.userName }}

  //- 音视频展示
  .relative.bg-gray-200(style="width: 720px;")
    video#remote.w-full.h-full(autoplay)
    video#local.absolute.right-0.bottom-0(class="w-1/4" autoplay)
  //- 邀请链接
  n-input-group(style="max-width: 400px;" v-show="show.copy")
    n-input(disabled v-model:value="url")
    n-button.copy-btn(ghost type="success" :data-clipboard-text="url" @click="message.success('复制成功')") 复制链接
  //- 发起通话
  div
    n-space
      n-button(strong secondary round type="primary" size="large" v-show="show.call" @click="send()") 发起通话
      n-button(strong secondary round type="error" size="large" @click="exit()") 返回首页

</template>

<style>
.n-card {
  max-width: 350px;
}
</style>
