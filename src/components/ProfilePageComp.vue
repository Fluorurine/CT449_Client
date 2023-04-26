<template>
  <form @submit.prevent="handlesubmit" class="border border-gray-300 rounded-lg block py-16">
    <h5 class="mb-2 ml-10 text-2xl font-semibold tracking-tight text-gray-900">
      Bổ sung thông tin cho tài khoản của bạn!
    </h5>
    <div class="grid gap-3 grid-cols-2">
      <div class="mb-6">
        <label for="username" class="block mb-2 ml-10 font-semibold text-base text-gray-900"
          >Tên người dùng</label
        >
        <input
          v-model="username"
          type="username"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập tên người dùng"
          required
        />
      </div>
      <div class="mb-6">
        <label for="username" class="block mb-2 font-semibold text-base text-gray-900">Email</label>
        <input
          type="email"
          v-model="useremail"
          id="useremail"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 p-2.5"
          placeholder="Vui lòng nhập email của bạn"
          required
        />
      </div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <div class="mb-6">
        <label for="password" class="block mb-2 ml-10 text-base font-semibold text-gray-900"
          >Mật khẩu</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập mật khẩu"
          required
        />
      </div>
      <div class="mb-6">
        <label for="phone" class="block mb-2 text-base font-semibold text-gray-900"
          >Số điện thoại</label
        >
        <input
          v-model="phone"
          type="text"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 p-2.5"
          placeholder="Vui bổ sung số điện thoại"
          required
        />
      </div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <div class="mb-6">
        <label for="phone" class="block mb-2 ml-10 text-base font-semibold text-gray-900"
          >Địa chỉ</label
        >
        <input
          v-model="address"
          type="address"
          id="address"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline hover:outline-2 hover:outline-blue-500 focus:outline-blue-500 block w-4/5 ml-10 p-2.5"
          placeholder="Vui lòng nhập mật khẩu"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block mb-2 font-medium text-gray-900" for="multiple_files"
          >Tải ảnh đại diện</label
        >
        <input
          @change="handleFileUpload"
          ref="fileInput"
          class="block w-full mb-5 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="multiple_files"
          placeholder="Test"
          type="file"
          multiple
        />
      </div>
    </div>
    <button
      type="submit"
      class="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Cập nhật thông tin tài khoản
    </button>
    <div class="mt-6 ml-10">
      <p class="text-red-500 text-sm font-semibold">{{ error }}</p>
    </div>
  </form>
</template>
<style></style>
<script setup>
import { ref } from 'vue'
import ApiService from '@/services/client.services'
const error = ref('')
const username = ref('')
const useremail = ref('')
const password = ref('')
const phone = ref('')
const address = ref('')
const fileInput = ref(null)
const userimage = ref('')

const handlesubmit = async () => {
  const result = await ApiService.createUser({
    username: username.value,
    useremail: useremail.value,
    password: password.value,
    phonenumber: phone.value,
    address: address.value,
    userimage: userimage.value,
    type: 'update'
  })
  if (result.err) {
    error.value = result.err
    return
  } else {
    alert('Đã đăng kí tài khoản thành công!')
  }
}
//Lấy địa chỉ ảnh lưu trong thư mục public
const handleFileUpload = () => {
  const startIndex = fileInput.value.value.lastIndexOf('\\')
  let filename = fileInput.value.value.substring(startIndex)
  userimage.value = '\\upload' + filename
}
</script>
