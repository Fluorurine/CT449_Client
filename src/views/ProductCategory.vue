<template>
  <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Chọn danh mục sản phẩm</h1>
    <div class="flex items-center">
      <!-- Menu -->
      <div class="relative inline-block text-left"></div>
      <div class="pr-10">
        <button
          @mouseover="toogletype"
          @mouseleave="toggletype"
          type="button"
          class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          Lọc theo
          <svg
            class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          v-show="typeview"
          class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                -->
            <a
              @click.prevent="setSortType(1)"
              class="font-medium text-gray-500 block px-4 py-2 text-sm cursor-pointe hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >Cũ nhất</a
            >

            <a
              @click.prevent="setSortType(2)"
              class="text-gray-500 block px-4 py-2 text-sm cursor-pointer hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >Mới nhất</a
            >

            <a
              @click.prevent="setSortType(3)"
              class="text-gray-500 block px-4 py-2 text-sm cursor-pointer hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
              >Giá: Thấp đến cao</a
            >

            <a
              @click.prevent="setSortType(4)"
              class="text-gray-500 block px-4 py-2 text-sm cursor-pointer hover:text-gray-900"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
              >Giá:Cao đến thấp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="item in productdata" :key="item._id" class="group">
          <router-link :to="'/product/detail/?Id=' + item._id">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                :src="item.productimage"
                :alt="item.productname"
                class="imagesize object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="flex items-baseline justify-between">
              <div>
                <h3 class="mt-4 text-sm text-gray-700 font-semibold">{{ item.productname }}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  Giá: {{ item.productminprice }}
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-700">Đã bán: {{ item.productsell }}</p>
                <p class="mt-2 text-sm text-yellow-400"></p>
              </div>
            </div>
          </router-link>
        </div>
        <div v-if="!productdata">Không có dữ liệu để hiển thị</div>
      </div>
      <div class="flex flex-1 justify-center mt-14">
        <button
          @click.prevent="nextButton"
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Tải thêm
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.imagesize {
  width: 100%;
  object-fit: contain;
  height: 15rem;
  /* height: 15rem; */
}
</style>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import ApiService from '@/services/client.services'
const typeview = ref(false)
const route = useRoute()
onMounted(async () => {
  productdata.value = await ApiService.categorysearch(route.query.categoryId, 0, 1)

  if (productdata.value.err) {
    console.log(productdata.value)
    return
  }
  if (productdata.value.length == 0) {
    productdata.value = null
  }
  console.log(productdata.value)
})

const sortType = ref(1)

const productdata = ref([
  {
    productid: '',
    productname: 'Đây là sản phẩm Test',
    productimage: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    productminprice: 9000,
    productsell: 0
  }
])

const setSortType = async (num) => {
  productdata.value = await ApiService.categorysearch(route.query.categoryId, 0, num)
  console.log('Đã fetch')
}
const toogletype = () => {
  typeview.value = !typeview.value
}
const nextButton = async () => {
  let test

  if (sortType.value == 1 || sortType.value == 2) {
    test = await ApiService.categorysearch(
      route.query.categoryId,
      productdata.value[productdata.value.length - 1]._id,
      sortType.value
    )
  }
  if (sortType.value == 3 || sortType.value == 4) {
    test = await ApiService.categorysearch(
      route.query.categoryId,
      productdata.value[productdata.value.length - 1].productminprice,
      sortType.value
    )
  }
  if (test.err) {
    console.log(test)
    return
  }
  if (test.length === 0) {
    console.log('Hết dữ liệu để fetch')
    return
  }

  productdata.value = [...productdata.value, ...test]
  console.log([...productdata.value, ...test])
}

// TODO: implement sort logic

// const password = ref('')
</script>
