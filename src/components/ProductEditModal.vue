<template>
  <div
    class="fixed flex flex-1 top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto modalbackground"
  >
    <div class="relative w-full max-w-2xl m-auto bg-white rounded-lg shadow">
      <!-- Phần Header của Modal -->
      <form @submit.prevent="productsubmit" class="w-full p-4">
        <div class="flex items-start p-4 border-b rounded-t">
          <div class="text-xl font-semibold text-gray-900">
            <p>Vui lòng nhập thông tin để thêm sản phẩm</p>
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

        <div class="mb-6">
          <label for="product-name" class="block mb-2 text-base font-medium text-gray-900"
            >Nhập tên sản phẩm:</label
          >
          <input
            v-model="productname"
            type="text"
            id="product-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Tên sản phẩm"
            required
          />
        </div>
        <div class="mb-6">
          <label for="category" class="block mb-2 text-base font-medium text-gray-900"
            >Chọn danh mục sản phẩm:</label
          >
          <select
            v-model="productcategory"
            id="category"
            class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option disabled>Chọn danh mục</option>
            <option value="CAT1">Điện thoại</option>
            <option value="CAT2">Dụng cụ gia dụng</option>
            <option value="CAT3">Quần áo</option>
            <option value="CAT4">Giày dép</option>
            <option value="CAT5">Sách</option>
          </select>
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-base font-medium text-gray-900"
            >Nhập mô tả sản phẩm:</label
          >
          <textarea
            v-model="productdescription"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập mô tả sản phẩm ..."
          ></textarea>
        </div>

        <div v-for="(item, index) in productvariant" :key="index" class="mb-6">
          <div class="grid gap-6 mb-6 grid-cols-4">
            <div>
              <label
                class="block mb-2 text-base font-medium text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden"
                >Tên loại {{ index + 1 }}</label
              >
              <input
                @change="updateVariantName(item, index)"
                v-model="item.variantname"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhâp tên loại sản phẩm"
              />
            </div>
            <div>
              <label
                class="block mb-2 text-base font-medium text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden"
                >Giá</label
              >
              <input
                @change="updateVariantName(item, index)"
                v-model="item.variantprice"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập giá sản phẩm"
              />
            </div>
            <div>
              <label
                class="block mb-2 text-base font-medium text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden"
                >Số lượng còn lại</label
              >
              <input
                @change="updateVariantName(item, index)"
                v-model="item.variantcount"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập số lượng còn lại"
              />
            </div>
            <div class="flex flex-col">
              <p class="font-medium text-base">Còn lại :{{ item.variantremain }} cái</p>
              <button
                @click="deleteVariant(index)"
                type="button"
                class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-auto text-center h-9 mt-3"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <button
            @click="addVariant"
            type="button"
            class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center"
          >
            Thêm thể loại
          </button>
          <label class="block mb-2 mt-2 font-medium text-gray-900" for="multiple_files"
            >Cập nhật lại ảnh mô tả</label
          >
          <input
            @change="handleFileUpload"
            ref="fileInput"
            class="block w-full mb-5 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="multiple_files"
            placeholder="Test"
            type="file"
            multiple
          />
        </div>
        <p class="ml-2 mt-4 text-red-500 text-sm font-semibold">{{ error }}</p>
        <p class="ml-2 mt-4 text-green-500 text-sm font-semibold">{{ sucessstatus }}</p>
        <p class="ml-2 text-base font-medium text-gray-900 mb-4">
          Vui lòng kiểm tra lại các thông tin trước khi gửi.
        </p>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cập Nhật
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
import { ref, watch } from 'vue'
import ApiService from '@/services/client.services'
const emit = defineEmits(['close'])
const productname = ref('')
const productcategory = ref('')
const productdescription = ref('')
const fileInput = ref(null)
const error = ref('')
const productId = ref(null)
const sucessstatus = ref('')
const productvariant = ref([{ variantname: 0, variantprice: 0, variantcount: 0 }])
const productimage = ref('')
const prop = defineProps(['productdata'])

//Theo dõi prop để cập nhật Giá trị mới
watch(
  () => prop.productdata,
  (newValue) => {
    console.log('Đã thay đổi')
    productname.value = newValue.productname

    productcategory.value = newValue.productcategory
    productdescription.value = newValue.productdescription
    productvariant.value = newValue.productvariant
    productimage.value = newValue.productimage
    productId.value = newValue._id
  }
)
const close = () => {
  console.log(prop.productdata)
  sucessstatus.value = ''
  emit('close')
}
const updateVariantName = (item, index) => {
  const newarray = [...productvariant.value]
  newarray[index] = item
  productvariant.value = newarray
  console.log(JSON.parse(JSON.stringify(productvariant.value)))
}
const deleteVariant = (index) => {
  productvariant.value = productvariant.value.filter((_, i) => {
    return i !== index
  })
}
const addVariant = () => {
  if (productvariant.value.length >= 5) alert('Số loại cho phép không vượt quá 5')
  else
    productvariant.value = [
      ...productvariant.value,
      { variantname: 0, variantprice: 0, variantcount: 0 }
    ]
}
//Lấy địa chỉ ảnh lưu trong thư mục public
const handleFileUpload = () => {
  const startIndex = fileInput.value.value.lastIndexOf('\\')
  let filename = fileInput.value.value.substring(startIndex)
  productimage.value = '\\upload' + filename
}
const productsubmit = async () => {
  console.log({
    productId: productId.value,
    productname: productname.value,
    productcategory: productcategory.value,
    productdescription: productdescription.value,
    productvariant: JSON.parse(JSON.stringify(productvariant.value)),
    productimage: productimage.value
  })
  const result = await ApiService.createProduct({
    flag: 'update',
    productId: productId.value,
    productname: productname.value,
    productcategory: productcategory.value,
    productdescription: productdescription.value,
    productvariant: JSON.parse(JSON.stringify(productvariant.value)),
    productimage: productimage.value
  })
  if (result.err) {
    error.value = result.err
  } else {
    error.value = ''
    sucessstatus.value = 'Cập nhật sản phẩm thành công'
    console.log('Sản phẩm đã được tạo thành công', result.NewId)
    emit('close')
  }
}
</script>
