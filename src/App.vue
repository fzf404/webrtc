<script setup>
import { NMessageProvider, NNotificationProvider } from 'naive-ui'
</script>

<template>
  <n-message-provider>
    <n-notification-provider>
      <router-view></router-view>
    </n-notification-provider>
  </n-message-provider>
</template>

<style></style>
