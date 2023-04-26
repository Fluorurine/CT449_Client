<template>
  <!-- Product info -->
  <div
    class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
  >
    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {{ productdata.productname }}
      </h1>
    </div>

    <!-- Options -->
    <div class="mt-4 lg:row-span-3 lg:mt-0">
      <p class="text-3xl tracking-tight text-gray-900">
        Giá: {{ parseInt(productcurrentvariant.variantprice).toLocaleString() }} VND

        <!-- Reviews -->
      </p>

      <div class="mt-6">
        <div class="flex items-center">
          <div class="flex items-center">
            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
            <svg
              v-for="i in 5"
              :key="i"
              :class="[
                'w-5 h-5 ',
                i > Math.floor(productdata.totalstar / (productdata.reviewcount * 5))
                  ? 'text-gray-300'
                  : 'text-yellow-400'
              ]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >{{ productdata.reviewcount }} reviews</a
          >
        </div>
      </div>
      <div class="mt-6 ext-base text-gray-900">
        Đăng vào: {{ new Date(productdata.createdAt).toLocaleDateString() }}
      </div>
      <div class="mt-6 ext-base text-gray-900 font-bold">
        Còn lại: {{ productcurrentvariant.variantremain }} sản phẩm
      </div>
      <form class="mt-10">
        <!-- Colors -->
        <div>
          <h3 class="text-sm font-medium text-gray-900">Loại :</h3>

          <fieldset class="mt-4">
            <div class="flex items-center space-x-3 w-11/12 flex-wrap justify-start">
              <button
                @click.prevent="setCurrentVariant(index)"
                v-for="(item, index) in productdata.productvariant"
                :key="index"
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {{ item.variantname }}
              </button>
            </div>
          </fieldset>
        </div>

        <button
          @click.prevent="handlesubmit"
          type="submit"
          class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Thêm vào giỏ hàng
        </button>
      </form>
    </div>

    <div
      class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
    >
      <!-- Description and details -->

      <div>
        <div class="space-y-6">
          <img class="w-1/2 object-contain" :src="productdata.productimage" alt="" />
          <h3 class="text-2xl font-medium text-gray-900">Mô tả sản phẩm</h3>

          <p class="text-base text-gray-900">
            {{ productdata.productdescription }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-white 00 py-8 lg:py-16">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">
          Bình luận ({{ productdata.reviewcount }})
        </h2>
        <div class="flex items-center">
          <svg
            v-for="i in 5"
            :key="i"
            @mouseenter="hoverStar(i)"
            @mouseleave="unHoverStar(i)"
            aria-hidden="true"
            :class="['w-5 h-5 ', i > currentStar ? 'text-gray-300' : 'text-yellow-400']"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </div>
      </div>
      <form class="mb-6">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <textarea
            v-model="reviewdata"
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Viết bình luận của bạn vào đây..."
          ></textarea>
        </div>
        <button
          @click.prevent="handlePostComment"
          type="submit"
          class="mt-10 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Đăng bình luận
        </button>
      </form>
      <article
        v-for="(item, index) in commentdata"
        :key="index"
        class="border p-6 mb-6 text-base bg-white rounded-lg"
      >
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="\upload\blank_picture.png"
                alt="Michael Gough"
              />{{ item.username }}
            </p>
            <p class="text-sm text-gray-600">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">{{
                new Date(item.createdAt).toLocaleDateString()
              }}</time>
            </p>
          </div>
          <div class="flex items-center">
            <svg
              v-for="i in 5"
              :key="i"
              aria-hidden="true"
              :class="['w-5 h-5 ', i > item.star ? 'text-gray-300' : 'text-yellow-400']"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </footer>
        <p class="text-gray-500">
          {{ item.reviewdata }}
        </p>
      </article>
    </div>
  </section>
</template>
<style></style>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import ApiService from '@/services/client.services'
const reviewdata = ref('')
const productdata = ref('')

const productcurrentvariant = ref('')
const route = useRoute()
const currentStar = ref(3)
const commentdata = ref([
  {
    username: 'Michael Gough',
    createdAt: Date.now(),
    star: 2,
    reviewdata:
      'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.'
  }
])
onMounted(async () => {
  refreshComment()
  const test = await ApiService.getProductById(route.query.Id)
  if (test.err) {
    console.log('Có lỗi trong quá trình fetch dữ liệu')
  }
  console.log(test)
  productdata.value = test

  productcurrentvariant.value = test.productvariant[0]
})

//Hàm để xử lý thay đổi thông tin theo sao của người dùng

const hoverStar = (i) => {
  currentStar.value = i
}
const unHoverStar = (i) => {
  currentStar.value = i
}
const setCurrentVariant = (i) => {
  console.log(i)
  productcurrentvariant.value = productdata.value.productvariant[i]
}
const handlesubmit = () => {
  let data = localStorage.getItem('cart')
  if (data) {
    console.log(1)
    data = JSON.parse(data)
    data = [
      ...data,
      {
        publishBy: productdata.value.publishBy,
        productId: route.query.Id,
        productname: productcurrentvariant.value.variantname,
        variantprice: productcurrentvariant.value.variantprice,
        productimage: productdata.value.productimage,
        quantity: 1
      }
    ]
    console.log(data)
    localStorage.setItem('cart', JSON.stringify(data))
  } else {
    localStorage.setItem(
      'cart',
      JSON.stringify([
        {
          publishBy: productdata.value.publishBy,
          productId: route.query.Id,
          productname: productcurrentvariant.value.variantname,
          variantprice: productcurrentvariant.value.variantprice,
          productimage: productdata.value.productimage,
          quantity: 1
        }
      ])
    )
  }

  alert('Thêm sản phẩm thành công')
}
//Hàm để refresh comment của người dùng
const refreshComment = async () => {
  commentdata.value = await ApiService.getComment(route.query.Id)
  console.log(commentdata.value)
}
const handlePostComment = async () => {
  const tmp = await ApiService.postComment({
    reviewdata: reviewdata.value,
    star: currentStar.value,
    productId: route.query.Id
  })
  if (tmp.err) {
    alert(tmp.err)
    return
  }
  alert('Đã đăng sản phẩm thành công')
  refreshComment()
}
//  Date(productdata.createdAt).toLocaleString('en-GB', { hour12: false })

// .toLocaleString()
</script>
