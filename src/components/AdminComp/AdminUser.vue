<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Tên người dùng</th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Email người dùng</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Ngày tạo tài khoản</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Nội dung</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!userdata">
          Không có dữ liệu để hiển thị
        </tr>
        <tr v-for="(item, index) in userdata" :key="index" class="bg-white border-b cursor-pointer">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900">
            {{ item.username }}
          </th>
          <td class="py-4 px-6">{{ item.useremail }}</td>
          <td class="py-4 px-6">
            {{
              new Date(item.createdAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                minute: 'numeric',
                second: 'numeric'
              })
            }}
          </td>

          <td class="py-4 px-6 text-right">
            <a @click="handleClick(item._id)" href="#" class="font-medium text-blue-600 underline"
              >Xóa tài khoản</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style></style>
<script setup>
import { ref, onMounted } from 'vue'

import ApiService from '@/services/client.services'
onMounted(() => {
  refreshList()
})

const userdata = ref([])
const refreshList = async () => {
  const tmp = await ApiService.getAllUser()
  if (!tmp || tmp.err) {
    alert('Người dùng chưa đăng nhập')
    return
  }
  userdata.value = tmp
}

const handleClick = async (id) => {
  //TODO: chua implement hàm này
  let data = await ApiService.deleteUserById(id)

  if (data.err) {
    console.log('Có lỗi khi xóa dữ liệu người dùng')
    return
  }
  console.log(data)
  alert('Xóa người dùng thành công')
  refreshList()
}
</script>
