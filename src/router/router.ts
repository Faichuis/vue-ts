/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'index',
      targer:'_blank'
    }
  },
  {
    path: '/orderdetails',
    name: 'orderdetails',
    component: () => import('@/views/order/orderdetails/orderDetail.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'orderdetails'
    }
  },
  {
    path: '/shipmentdetails',
    name: 'shipmentdetails',
    component: () => import('@/views/order/shipmentdetails/shipmentDetail.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'shipmentdetails'
    }
  }
]
