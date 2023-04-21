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
        Giá: {{ pprice }} VND

        <!-- Reviews -->
      </p>

      <div class="mt-6">
        <div class="flex items-center">
          <div class="flex items-center">
            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
            <svg
              class="text-gray-900 h-5 w-5 flex-shrink-0"
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

            <svg
              class="text-gray-900 h-5 w-5 flex-shrink-0"
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

            <svg
              class="text-gray-900 h-5 w-5 flex-shrink-0"
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

            <svg
              class="text-gray-900 h-5 w-5 flex-shrink-0"
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

            <svg
              class="text-gray-200 h-5 w-5 flex-shrink-0"
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
            >117 reviews</a
          >
        </div>
      </div>
      <div class="mt-6 ext-base text-gray-900">Đăng vào: {{ productdata.createdAt }}</div>
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
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Bình luận (20)</h2>
      </div>
      <form class="mb-6">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Viết bình luận của bạn vào đây..."
            required
          ></textarea>
        </div>
        <button
          @click.prevent="handlesubmit"
          type="submit"
          class="mt-10 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Đăng bình luận
        </button>
      </form>
      <article class="border p-6 mb-6 text-base bg-white rounded-lg">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />Michael Gough
            </p>
            <p class="text-sm text-gray-600">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
            </p>
          </div>
        </footer>
        <p class="text-gray-500">
          Very straight-to-point article. Really worth time reading. Thank you! But tools are just
          the instruments for the UX designers. The knowledge of the design tools are as important
          as the creation of the design strategy.
        </p>
      </article>
    </div>
  </section>
</template>
<style></style>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import ApiService from '@/services/client.services'
const productdata = ref('')
const pprice = computed(() => parseInt(productcurrentvariant.value.variantprice).toLocaleString())
const productcurrentvariant = ref('')
const route = useRoute()

onMounted(async () => {
  const test = await ApiService.getProductById(route.query.Id)
  if (test.err) {
    console.log('Có lỗi trong quá trình fetch dữ liệu')
  }
  console.log(test)
  productdata.value = test
  productdata.value.createdAt = new Date(productdata.value.createdAt).toLocaleString('en-GB', {
    hour12: false
  })
  productcurrentvariant.value = test.productvariant[0]
})
const setCurrentVariant = (i) => {
  console.log(i)
  productcurrentvariant.value = productdata.value.productvariant[i]
}
const handlesubmit = () => {
  let data = localStorage.getItem('cart')
  if (data) {
    data = [
      ...data,
      {
        variantname: productcurrentvariant.value.variantname,
        variantprice: productcurrentvariant.value.variantprice,
        quantity: 1
      }
    ]
    localStorage.setItem('cart', data)
  } else {
    localStorage.setItem('cart', [
      {
        variantname: productcurrentvariant.value.variantname,
        variantprice: productcurrentvariant.value.variantprice,
        quantity: 1
      }
    ])
  }

  console.log(data)
  alert('Thêm sản phẩm thành công')
}
//  Date(productdata.createdAt).toLocaleString('en-GB', { hour12: false })

// .toLocaleString()
</script>
