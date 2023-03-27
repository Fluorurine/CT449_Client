<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="text-red">Hello mn nhá</h1>
  <RouterLink to="/login">Đăng nhập</RouterLink>
  <RouterLink to="/register">Đăng ký</RouterLink>
  <RouterView />
</template>

<style scoped></style>
