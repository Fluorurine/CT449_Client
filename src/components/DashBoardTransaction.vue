<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Người gửi</th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Người nhận</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Ngày đăng</div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">Nội dung</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!transactiondata">
          Không có dữ liệu để hiển thị
        </tr>
        <tr
          v-for="(item, index) in transactiondata"
          :key="index"
          class="bg-white border-b cursor-pointer"
        >
          <th scope="row" class="py-4 px-6 font-medium text-gray-900">
            {{ item.from }}
          </th>
          <td class="py-4 px-6">{{ item.to }}</td>
          <td class="py-4 px-6">
            {{
              new Date(Date.now(item.createdAt)).toLocaleString('en-US', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                minute: 'numeric',
                second: 'numeric'
              })
            }}
          </td>

          <td class="py-4 px-6 text-right">
            <a @click="handleClick(index)" href="#" class="font-medium text-blue-600 underline"
              >Xem nội dung</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <TransactionModal
    v-show="isTransactionModalVisble"
    :transactiondata="currenttransaction"
    @close="toogleTransactionModal()"
  ></TransactionModal>
</template>
<style></style>
<script setup>
import { ref, onMounted } from 'vue'
import TransactionModal from '@/components/TransactionModal.vue'

import ApiService from '@/services/client.services'
onMounted(() => {
  refreshList()
})
const currenttransaction = ref(null)

const isTransactionModalVisble = ref(false)
const transactiondata = ref([])
const refreshList = async () => {
  const tmp = await ApiService.getTransaction()
  if (!tmp || tmp.err) {
    alert('Người dùng chưa đăng nhập')
    return
  }
  transactiondata.value = tmp
}

const toogleTransactionModal = () => {
  // refreshList()
  isTransactionModalVisble.value = !isTransactionModalVisble.value
}
const handleClick = (i) => {
  currenttransaction.value = transactiondata.value[i]
  toogleTransactionModal()
}
</script>
