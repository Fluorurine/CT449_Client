<script setup>
import { RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="overflow-hidden">
    <SearchBar></SearchBar>
    <div class="h-[60px]"></div>
    <!-- <h1 class="text-red-500">Hello mn nhá</h1>
    <RouterLink to="/login">Đăng nhập</RouterLink>
    <RouterLink to="/register">Đăng ký</RouterLink> -->
    <RouterView />
    <div
      class="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm"
    >
      <div class="mb-4">
        <a href="#" class="mx-2.5">Về chúng tôi</a>
        <a href="#" class="mx-2.5">Chính sách bảo mật</a>
        <a href="#" class="mx-2.5">Điều khoản và dịch vụ</a>
      </div>
      <p>&copy; Copyright Reserved 2023 - B2111871</p>
    </div>
  </div>
</template>
