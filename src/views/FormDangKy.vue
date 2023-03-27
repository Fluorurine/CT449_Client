<template>
  <div class="flex items-center justify-center h-screen">
    <form class="border border-gray-300 rounded-lg w-4/5 block py-16">
      <h5 class="mb-2 ml-10 text-2xl font-semibold tracking-tight text-gray-900">
        Vui lòng nhập thông tin để đăng ký tài khoản
      </h5>
      <div class="mb-6">
        <label for="username" class="block mb-2 ml-10 font-semibold text-base text-gray-900"
          >Tên người dùng</label
        >
        <input
          type="username"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập tên người dùng"
          required
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 ml-10 text-base font-semibold text-gray-900"
          >Mật khẩu</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập mật khẩu"
          required
        />
      </div>
      <div class="mb-6">
        <label for="repassword" class="block mb-2 ml-10 text-base font-semibold text-gray-900"
          >Nhập lại mật khẩu</label
        >
        <input
          type="password"
          id="repassword"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập mật khẩu"
          required
        />
      </div>

      <button
        type="submit"
        class="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Đăng ký
      </button>
      <div class="mt-6 ml-10">
        <div class="text-sm font-medium text-gray-900">
          Đã có tài khoản ?
          <a href="#" class="text-blue-500 hover:underlink">Đăng nhập ngay</a>
        </div>
      </div>
    </form>
  </div>
</template>
<style></style>
<script setup></script>
