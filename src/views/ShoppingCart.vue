<template>
  <div class="my-10">
    <div class="flex flex-row justify-between my-5">
      <h2 class="text-3xl font-semibold">Danh sách giỏ hàng</h2>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              <!-- <span class="sr-only">Image</span> -->
            </th>
            <th scope="col" class="px-6 py-3">Tên sản phẩm</th>
            <th scope="col" class="px-6 py-3">Số lượng</th>
            <th scope="col" class="px-6 py-3">Giá</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in localcart"
            :key="index"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="w-32 p-4">
              <img :src="item.productimage" :alt="item.productname" />
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900">
              <div class="flex flex-col">
                <p>{{ item.productname }}</p>
                <p>{{ item.variantname }}</p>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center space-x-3">
                <button
                  @click="handleDecrease(index)"
                  class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                  type="button"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div>
                  <input
                    type="number"
                    :value="item.quantity"
                    id="first_product"
                    class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                    placeholder="1"
                    required
                  />
                </div>
                <button
                  @click="handleIncrease(index)"
                  class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                  type="button"
                >
                  <span class="sr-only">Quantity button</span>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </td>
            <td class="px-6 py-4 font-semibold text-gray-900">
              {{ item.quantity * item.variantprice }}
            </td>
            <td class="px-6 py-4">
              <a
                @click.prevent="removeItems(index)"
                href="#"
                class="font-medium text-red-600 hover:underline"
                >Xóa</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between text-xl font-semibold">
        <p class="pl-8">Tổng số tiền phải thanh toán</p>
        <p class="pr-8">{{ parseInt(totalcount).toLocaleString() }}VND</p>
      </div>
    </div>
    <button
      @click.prevent="handleSubmit"
      type="button"
      class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5"
    >
      Thanh toán
    </button>
  </div>
</template>
<style></style>
<script setup>
import ApiService from '@/services/client.services'
import { ref, onMounted, computed } from 'vue'

const localcart = ref([])
onMounted(
  //TODO thay bang ham refresh list
  () => {
    localcart.value = JSON.parse(localStorage.getItem('cart'))
    console.log(localcart.value)
    //cẦN Sync giữa local và data trả về do
    // Dữ liệu có thể bị thay đổi khi người đăng thêm chỉnh sửa hoặc xóa nhưng do quá phức tạp nên không implement
  }
)
// Trả về total các giá trị
const totalcount = computed(() => {
  let value = 0
  for (const i of localcart.value) {
    value += i.variantprice * i.quantity
  }
  return value
})

// Khi tăng hàm lên thì cập nhật lại cả 2 cái
const handleIncrease = (index) => {
  localcart.value[index].quantity++
  localStorage.setItem('cart', JSON.stringify(localcart.value))
}
const handleDecrease = (index) => {
  localcart.value[index].quantity--
  localStorage.setItem('cart', JSON.stringify(localcart.value))
}
const removeItems = (index) => {
  localcart.value = localcart.value.filter((_, i) => {
    return i !== index
  })
  localStorage.setItem('cart', JSON.stringify(localcart.value))
}
//TODO : Thêm thanh toán vào Trasition DB
const handleSubmit = async () => {
  const test = await ApiService.addTransaction(JSON.parse(JSON.stringify(localcart.value)))
  if (!test || test.err) {
    alert('Có lỗi trong quá trình tạo giao dịch')
    return
  }
  alert('Đã tạo giao dịch thành công')
}
</script>
