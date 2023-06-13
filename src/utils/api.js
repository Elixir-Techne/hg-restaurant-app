import axios from 'axios'

axios.defaults.baseURL = ''

// get reuqest
export const getOrders = (restaurant_id) =>
    axios.get(`restaurant/${restaurant_id}/orders`)
  
export const getOrderByID = (restaurant_id, order_id) =>
  axios.get(`restaurant/${restaurant_id}/orders/${order_id}`)

export const getMenu = (restaurant_id) =>
  axios.get(`restaurant/${restaurant_id}/menus`)

export const getMenuItem = (restaurant_id, menu_id) =>
    axios.get(`/restaurant/${restaurant_id}/menus/${menu_id}`)
  
export const getCategories = (restaurant_id) =>
    axios.get(`/restaurant/${restaurant_id}/categories`)

