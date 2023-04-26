<template>
  <div
    @click="closeSearch"
    class="h-[60px] fixed bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
  >
    <!-- Hambuger menu -->
    <div class="cursor-pointer" @click="toggleSideBar"></div>
    <RouterLink to="/"
      ><img
        src="/upload/Logo.png
          "
        alt="Ảnh Logo"
        class="w-16 h-16"
    /></RouterLink>
    <!-- Search bar -->
    <div class="w-[calc(100%-30px)] flex">
      <div class="w-[calc(100%-200px)] flex justify-center">
        <!-- Search bar -->
        <form class="flex items-center w-[500px]">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <input
              @input="searchChange"
              v-model="searchValue"
              type="text"
              id="search"
              class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Tìm kiếm sản phẩm"
            />
            <div
              v-show="showSearch"
              class="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div
                class="py-1 text-left border-b"
                v-for="(item, index) in searchData"
                :key="index"
                role="none"
              >
                <router-link :to="'/product/detail/?Id=' + item._id">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <div class="flex justify-between">
                    <div class="flex">
                      <div class="ml-2">
                        <img
                          class="w-10 h-10 p-1"
                          :src="item.productimage"
                          :alt="item.productname"
                        />
                      </div>
                      <div class="ml-2">{{ item.productname }}</div>
                    </div>
                    <div class="mr-2">{{ item.productminprice }}</div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="flex absolute inset-y-0 right-0 items-center pr-3">
              <label for="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-4 h-4 text-gray-300 hover:text-black"
                >
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </form>
      </div>
      <!-- User login -->
      <div v-if="userdata" class="w-[200px]">
        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
          <img
            class="w-10 h-10 rounded-full border-2 border-gray-50"
            :src="userdata.userimage ? userdata.userimage : '\\upload\\blank_picture.png'"
            alt=""
          />
          <div class="font-semibold text-left">
            <div>{{ userdata.username }}</div>
            <div class="text-xs text-gray-500 w-[100px] truncate">{{ userdata.useremail }}</div>
          </div>
        </div>
        <!-- Drop down -->
        <div
          v-show="showDropDown"
          class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1 text-left" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <router-link to="/dashboard">
              <div
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Thông tin tài khoản
              </div>
            </router-link>
            <router-link to="/dashboard/product">
              <div
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Sản phẩm đã đăng
              </div>
            </router-link>
            <router-link to="/cart">
              <div
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Giỏ hàng
              </div>
            </router-link>
            <div
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              <router-link to="/dashboard/transaction"> Các giao dịch</router-link>
            </div>
            <form method="POST" action="#" role="none">
              <button
                @click="signout"
                type="submit"
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Đăng xuất
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        v-if="!userdata"
        class="w-[200px] flex justify-around mt-2 text-blue-400 underline font-semibold"
      >
        <RouterLink to="/login">Đăng nhập</RouterLink>
        <RouterLink to="/register">Đăng ký</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router'
import ApiService from '@/services/client.services'
import { ref, onMounted } from 'vue'
const userdata = ref(null)
const router = useRouter()
const signout = async () => {
  await ApiService.logOut()

  router.go()
}
onMounted(async () => {
  const data = await ApiService.getUserInfo()
  if (data.err) {
    console.log(data.err)
    return
  }
  userdata.value = data
})
const showDropDown = ref(false)
const showSearch = ref(false)
const searchValue = ref('')
const searchData = ref([])
const searchChange = async () => {
  showSearch.value = true
  searchData.value = await ApiService.searchText(searchValue.value)
}
const closeSearch = () => {
  showSearch.value = false
}
const toggleDrop = () => {
  showDropDown.value = !showDropDown.value
}
</script>
