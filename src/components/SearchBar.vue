<template>
  <div
    @click="closeSearch"
    class="h-[60px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
  >
    <!-- Hambuger menu -->
    <div class="cursor-pointer" @click="toggleSideBar">
      <img
        src="/upload/Logo.png
      "
        alt="Anhr Logo"
        class="w-16 h-16"
      />
    </div>
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
              class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search..."
              required
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
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->

                <div class="flex justify-between">
                  <div class="flex">
                    <div class="ml-2">
                      <img class="w-10 h-10 p-1" :src="item.productimage" :alt="item.productname" />
                    </div>
                    <div class="ml-2">{{ item.productname }}</div>
                  </div>
                  <div class="mr-2">{{ item.productminprice }}</div>
                </div>
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
      <div class="w-[200px]">
        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
          <img
            class="w-10 h-10 rounded-full border-2 border-gray-50"
            src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <div class="font-semibold text-left">
            <div>Madona ,Dev OP</div>
            <div class="text-xs text-gray-500">Admin</div>
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
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >Account settings</a
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >Support</a
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >License</a
            >
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ApiService from '@/services/client.services'
import { ref } from 'vue'
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
