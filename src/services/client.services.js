import createApiClient from './api.service'
const api = createApiClient('/api')
const ApiService = {}
ApiService.createUser = async (data) => {
  return (await api.post('/customers', data)).data
}
ApiService.login = async (data) => {
  return (await api.post('/login', data)).data
}
ApiService.createProduct = async (data) => {
  return (await api.post('/products', data)).data
}
ApiService.categorysearch = async (categoryId, lastId, sortType) => {
  return (
    await api.get(
      `/products/category?categoryId=${categoryId}&lastId=${lastId}&sortType=${sortType}`
    )
  ).data
}
ApiService.getProductById = async (Id) => {
  return (await api.get(`/products/detail?Id=${Id}`)).data
}
ApiService.getTransaction = async () => {
  return (await api.get(`/transaction`)).data
}
ApiService.addTransaction = async (data) => {
  return (await api.post(`/transaction`, data)).data
}
// ApiService.getCartItems = async (array) => {
//   return (await api.post(`/products/detail`, array)).data
// }
ApiService.getProductUser = async () => {
  return (await api.get(`/products/user`)).data
}
ApiService.searchText = async (text) => {
  return (await api.get(`/products/name?text=${text}`)).data
}
ApiService.postComment = async (data) => {
  return (await api.post(`/comment`, data)).data
}
//TODO Chờ đợi để implement hàm này và còn hàm xóa theo id nữa nha
ApiService.getComment = async (id) => {
  return (await api.get(`/comment/?id=${id}`)).data
}

//Phần này là của Admin
ApiService.getProductAdmin = async () => {
  return (await api.get('/products')).data
}
ApiService.getAllUser = async () => {
  return (await api.get('/customers')).data
}
ApiService.getUserInfo = async () => {
  return (await api.get('/login')).data
}
ApiService.logOut = async () => {
  return (await api.get('/login/logout')).data
}
ApiService.deleteProduct = async (id) => {
  return (await api.delete(`/products/?Id=${id}`)).data
}
ApiService.deleteUserById = async (id) => {
  return (await api.delete(`/customers?id=${id}`)).data
}
ApiService.deleteTransaction = async (id) => {
  return (await api.delete(`/transaction?id=${id}`)).data
}

export default ApiService
