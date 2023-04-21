<template>
  <!-- Nền của Modal -->
  <div
    class="fixed flex flex-1 top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto modalbackground"
  >
    <!--
    Content của Modal
   -->
    <div class="relative w-full max-w-2xl m-auto bg-white rounded-lg shadow">
      <div class="flex items-start justify-between p-4 border-b rounded-t">
        <!-- Modal Header -->
        <div class="text-xl font-semibold text-gray-900">
          <slot name="header"> This is the default title! </slot>
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
      <!-- Modal Body -->
      <div class="p-6 space-y-6">
        <div class="text-base leading-relaxed text-gray-500">
          <slot name="body"> This is the default body! </slot>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-6 space-x-2 border-t border-gray-200">
        <button
          @click="close"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Đồng ý
        </button>
        <button
          type="button"
          @click="close"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Hủy
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.modalbackground {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
<script setup>
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>
