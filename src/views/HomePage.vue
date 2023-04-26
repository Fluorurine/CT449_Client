<template>
  <div class="mx-auto p-5">
    <div class="lg:flex md:flex-row mt-20">
      <div class="lg:w-2/5 flex flex-col justify-center items-center">
        <h2 class="font-bold text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
          Chào mừng bạn tới cửa hàng của chúng tôi
        </h2>
        <p
          class="uppercase text-gray-600 tracking-wide text-center font-bold md:self-start md:text-left"
        >
          Chúng tôi mang đến những sản phẩm tuyệt vời nhất.
        </p>

        <a
          href="#"
          class="flex items-center justify-center h-1/6 bg-gradient-to-r from-blue-400 to-blue-800 rounded-full py-4 px-8 text-gray-50 uppercase text-lg md:self-start my-5"
          >Tìm theo tên sản phẩm</a
        >
      </div>
      <div class="lg:w-3/5 lg:max-h-full">
        <img
          src="https://cf.shopee.vn/file/vn-50009109-78a409b1aa73bc01791edb21c495f886_xxhdpi"
          class="w-full"
        />
      </div>
    </div>

    <!-- Men's Collection Section -->

    <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl font-semibold">Tìm kiếm theo danh mục</h2>
      </div>
      <div class="grid grid-flow-row grid-cols-5 gap-10">
        <router-link to="/product?categoryId=CAT1">
          <div class="shadow-lg rounded-lg">
            <a href="#">
              <img
                src="category\DienThoai.jpeg"
                class="rounded-tl-lg rounded-tr-lg w-64 h-64 object-scale-down mx-auto"
              />
            </a>
            <div class="p-5">
              <h3><p class="text-center text-lg font-semibold truncate">Điện thoại</p></h3>
              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="mx-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/product?categoryId=CAT2">
          <div class="shadow-lg rounded-lg">
            <a href="#">
              <img
                src="category\\GiaDung.jpeg"
                class="rounded-tl-lg rounded-tr-lg w-64 h-64 object-scale-down mx-auto"
              />
            </a>
            <div class="p-5">
              <h3><p class="text-center text-lg font-semibold truncate">Dụng cụ gia dụng</p></h3>

              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="mx-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/product?categoryId=CAT3">
          <div class="shadow-lg rounded-lg">
            <a href="#">
              <img
                src="category\\QuanAo.jpeg"
                class="rounded-tl-lg rounded-tr-lg w-64 h-64 object-scale-down mx-auto"
              />
            </a>
            <div class="p-5">
              <h3><p class="text-center text-lg font-semibold truncate">Quần áo</p></h3>

              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="mx-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/product?categoryId=CAT4">
          <div class="shadow-lg rounded-lg">
            <a href="#">
              <img
                src="category\\GiayDep.jpeg"
                class="rounded-tl-lg rounded-tr-lg w-64 h-64 object-scale-down mx-auto"
              />
            </a>
            <div class="p-5">
              <h3><p class="text-center text-lg font-semibold truncate">Giày dép</p></h3>

              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="mx-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/product?categoryId=CAT5">
          <div class="shadow-lg rounded-lg">
            <a href="#">
              <img
                src="category\\Sach.jpeg"
                class="rounded-tl-lg rounded-tr-lg w-64 h-64 object-scale-down mx-auto"
              />
            </a>
            <div class="p-5">
              <h3><p class="text-center text-lg font-semibold truncate">Sách</p></h3>

              <div class="flex flex-col xl:flex-row justify-between">
                <a
                  class="mx-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl font-semibold">Sản phẩm nổi bật</h2>
      </div>

      <div
        class="grid grid-flow-row grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-10"
      >
        <a v-for="item in productdata" :key="item._id" href="#" class="group">
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
              <h3 class="mt-4 truncate text-gray-700 text-base">{{ item.productname }}</h3>
              <p class="mt-1 text-lg font-medium text-red-500 font-serif">
                Giá: {{ item.productminprice }}
              </p>
            </div>
            <div>
              <p class="text-sm text-gray-700">Đã bán: {{ item.productsell }}</p>
              <p class="mt-2 text-sm text-gray-700">4.5/5 sao</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="rounded-lg shadow-lg my-20 flex flex-row">
      <div
        class="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12"
      >
        <div class="lg:w-1/2">
          <h3 class="text-2xl font-extrabold mb-4">Nhập thông tin để liên hệ với chúng tôi</h3>
          <p class="mb-4 leading-relaxed">
            Khi bạn nhập email bạn sẽ được chúng tôi thông báo về những sản phẩm mới nhất.
          </p>
          <div>
            <input
              type="email"
              placeholder="Nhập email của bạn ở đây"
              class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
            />
            <button type="submit" class="bg-red-600 py-3 rounded-lg w-full">Đăng ký</button>
          </div>
        </div>
      </div>
      <div class="lg:flex w-2/3 lg:flex-row hidden">
        <img src="upload\customerserive.jpg" class="h-96 w-full" />
      </div>
    </div>
    <!-- Newsletter Section -->

    <!-- Footer Section -->
  </div>
</template>
<style>
.opacity-0 {
  opacity: 0;
}
</style>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const productdata = ref([
  {
    productid: '',
    productname: 'Đây là sản phẩm Test',
    productimage: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    productminprice: 9000,
    productsell: 0
  }
])

// const next = () => {
//   carousel.value.querySelector('[data-carousel-item="active"]').style.display = 'none'
//   currentIndex = (currentIndex + 1) % carousel.value.querySelectorAll('[data-carousel-item]').length
//   carousel.value.querySelectorAll('[data-carousel-item]')[currentIndex].style.display = 'block'
// }

// const previous = () => {
//   carousel.value.querySelector('[data-carousel-item="active"]').style.display = 'none'
//   currentIndex =
//     (currentIndex - 1 + carousel.value.querySelectorAll('[data-carousel-item]').length) %
//     carousel.value.querySelectorAll('[data-carousel-item]').length
//   carousel.value.querySelectorAll('[data-carousel-item]')[currentIndex].style.display = 'block'
// }
</script>
