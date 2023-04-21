<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <SearchBar></SearchBar>
  <h1 class="text-red-500">Hello mn nhá</h1>
  <RouterLink to="/login">Đăng nhập</RouterLink>
  <RouterLink to="/register">Đăng ký</RouterLink>
  <RouterView />
</template>
