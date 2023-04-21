<template>
  <div class="bg-red-500 h-screen">
    <h1 class="text-3xl font-bold underline">Hello world lần 2 nha!</h1>
    <div id="app">
      <button type="button" class="btn" @click="toogleModal()">Open Modal!</button>
    </div>
  </div>
  <Modal v-show="isModalVisible" @close="toogleModal()"></Modal>
</template>
<style></style>
<script setup>
import { ref } from 'vue'
import Modal from './ProductAddModal.vue'

const isModalVisible = ref(false)
const toogleModal = () => {
  isModalVisible.value = !isModalVisible.value
}
</script>
