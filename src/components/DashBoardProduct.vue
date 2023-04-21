<template>
  <div class="overflow-x-auto relative sm:rounded-lg">
    <div class="float-right">
      <button
        @click="toogleAddModal"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 flex"
      >
        <p>Thêm sản phẩm</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-5 h-5 inline ml-2 mb-1"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </button>
    </div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Tên sản phẩm</th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Ngày đăng
              <a href="#"></a>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Danh mục
              <a href="#"></a>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <div class="flex items-center">
              Giá
              <a href="#"></a>
            </div>
          </th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!productdata">
          Không có dữ liệu để hiển thị
        </tr>
        <tr
          @click.prevent="handleRow(index)"
          v-for="(item, index) in productdata"
          :key="index"
          class="bg-white border-b cursor-pointer"
        >
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{ item.productname }}
          </th>
          <td class="py-4 px-6">{{ item.createdAt }}</td>
          <td class="py-4 px-6">{{ item.category }}</td>
          <td class="py-4 px-6">{{ item.productminprice }}</td>
          <td class="py-4 px-6 text-right">
            <a
              @click.stop="handleClick"
              href="#"
              class="block font-medium text-red-600 no-underline"
              >Xóa</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Modal v-show="isModalVisible" :productdata="currentproduct" @close="toogleModal()"></Modal>
  <AddModal
    v-show="isAddModalVisble"
    :productdata="currentproduct"
    @close="toogleAddModal()"
  ></AddModal>
</template>
<style></style>
<script setup>
import { ref, onMounted } from 'vue'
import Modal from '@/components/ProductEditModal.vue'
import AddModal from '@/components/ProductAddModal.vue'
import ApiService from '@/services/client.services'
onMounted(() => {
  refreshList()
})
const currentproduct = ref(null)
const isModalVisible = ref(false)
const isAddModalVisble = ref(false)
const productdata = ref([
  {
    productid: '',
    productname: 'Đây là sản phẩm Test',
    productimage: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    productminprice: 9000,
    productsell: 0
  },
  {
    productid: '',
    productname: 'Đây là sản phẩm Test2',
    productcategory: 'CAT1',
    productimage: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    productminprice: 9000,
    productsell: 0
  },
  {
    productid: '',
    productname: 'Đây là sản phẩm Test3',
    productimage: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    productminprice: 9000,
    productsell: 0
  }
])
const refreshList = async () => {
  const tmp = await ApiService.getProductUser()
  if (tmp.err) {
    alert('Người dùng chưa đăng nhập')
    return
  }
  productdata.value = tmp
}

const toogleModal = () => {
  // refreshList()
  isModalVisible.value = !isModalVisible.value
}
const toogleAddModal = () => {
  // refreshList()
  isAddModalVisble.value = !isAddModalVisble.value
}
const handleRow = (i) => {
  currentproduct.value = productdata.value[i]
  toogleModal()
}
const handleClick = () => {
  console.log('Click Xoa')
}
</script>
