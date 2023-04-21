import createApiClient from './api.service'
const api = createApiClient('/api')
const ApiService = {}
ApiService.getUser = async () => {
  return (await api.get('/customers')).data
}
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
ApiService.getCartItems = async (array) => {
  return (await api.post(`/products/detail`, array)).data
}
ApiService.getProductUser = async () => {
  return (await api.get(`/products/user`)).data
}
ApiService.searchText = async (text) => {
  return (await api.get(`/products/name?text=${text}`)).data
}
// ApiService.getProduct = async (data) => {
//   return (await api.get('/product', data)).data
// }

export default ApiService
