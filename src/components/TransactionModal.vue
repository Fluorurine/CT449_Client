<template>
  <div
    class="fixed flex flex-1 top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto modalbackground"
  >
    <div class="relative w-full max-w-2xl m-auto bg-white rounded-lg shadow">
      <!-- Phần Header của Modal -->
      <form @submit.prevent="productsubmit" class="w-full p-4">
        <div class="flex items-start p-4 border-b rounded-t">
          <div class="text-xl font-semibold text-gray-900">
            <p>Thông tin giao dịch:</p>
          </div>
          <button
            type="button"
            @click="close"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <table class="table-auto w-full text-center">
          <thead>
            <tr>
              <th>Hình minh họa</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in modaltransactiondata" :key="index">
              <td>
                <img class="w-10 h-10 mx-auto" :src="item.productimage" :alt="item.productname" />
              </td>
              <td>{{ item.productname }}</td>
              <td>{{ item.variantprice }}</td>
              <td>{{ item.quantity }}</td>
            </tr>
          </tbody>
          <p class="font-semibold">Thành tiền: {{ parseInt(sum).toLocaleString() }}</p>
        </table>
      </form>
    </div>
  </div>
</template>
<style>
.modalbackground {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<script setup>
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['close'])
const modaltransactiondata = ref([])
const prop = defineProps(['transactiondata'])

const sum = computed(() => {
  let sum = 0
  for (const i of modaltransactiondata.value) {
    sum += parseInt(i.variantprice) * i.quantity
  }
  return sum
})
//Theo dõi prop để cập nhật Giá trị mới
watch(
  () => prop.transactiondata,
  (newValue) => {
    modaltransactiondata.value = newValue.data
    console.log(modaltransactiondata.value)
  }
)
const close = () => {
  console.log(prop.productdata)

  emit('close')
}
</script>
