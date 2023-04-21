<template>
  <div
    class="fixed flex flex-1 top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto modalbackground"
  >
    <div class="relative w-full max-w-2xl m-auto bg-white rounded-lg shadow">
      <!-- Phần Header của Modal -->
      <form class="w-full p-4">
        <div class="flex items-start p-4 border-b rounded-t">
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
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
              >First name</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Last name</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900"
              >Company</label
            >
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900"
              >Phone number</label
            >
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900"
              >Website URL</label
            >
            <input
              type="url"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900"
              >Unique visitors (per month)</label
            >
            <input
              type="number"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <div class="mb-6">
          <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900"
            >Confirm password</label
          >
          <input
            type="password"
            id="confirm_password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>

        <p class="ml-2 text-base font-medium text-gray-900 mb-4">
          Vui lòng kiểm tra lại kĩ các thông tin trước khi gửi.
        </p>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
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
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>
