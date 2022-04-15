<!--
 * @Author: fzf404
 * @Date: 2022-03-04 15:13:28
 * @LastEditTime: 2022-03-12 20:34:30
 * @Description: 首页
-->
<script setup>
import { NH1, NTag, NP, NSpace, NButton, NDivider, NModal, NCard, NInput, NText } from 'naive-ui'
import { socket } from '../utils/socket'
import { ref } from 'vue'
import router from '../router/router'

// 房间 ID
const roomId = ref('')

// 数量
const number = ref({
  user: 0,
  room: 0,
})

// 信息展示
const show = ref({
  modal: false,
})

// 查询人数信息
socket.emit('number')
socket.on('number', (num) => {
  number.value = num
})

// 创建房间
const start = () => {
  const minNum = 100
  const maxNum = 999
  roomId.value = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  router.push('/' + roomId.value)
}
</script>

<template lang="pug">
n-modal(v-model:show="show.modal") 
  n-card(title="请输入房间号" size="huge")
    n-input( maxlength="3" show-count v-model:value="roomId" @keyup.enter="$router.push('/'+roomId)" placeholder="房间号")
    template(#footer)
      n-button.float-right( @click="$router.push('/'+roomId)") 确认
      
.flex.flex-col.space-y-2.items-center.p-4
  n-h1.h-12 WebRTC - 实时音视频通话

  n-space.h-14
    n-p 在线人数：
      n-tag(type="error" size="small") {{number.user}}
    n-p 房间数：
      n-tag(type="warning" size="small") {{number.room}}

  n-space
    n-button(strong secondary type="info" size="large" @click="start()") 创建房间
    n-button(strong secondary type="success" size="large" @click="show.modal=true") 加入房间

  .w-80.h-10
    n-divider

  n-p 
   | 使用p2p点对点通信技术，无需担心隐私泄漏
  n-p
   | (就算想记录服务器也没那个带宽WQW)
  n-p
    n-text(type="warning" size="small")
      | 目前一个房间只能进两个人哦～
</template>

<style>
.n-card {
  max-width: 350px;
}
</style>
