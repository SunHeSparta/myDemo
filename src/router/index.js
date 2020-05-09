import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import index from '@/components/channelPayOrder/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // children: [
      //   {
      //     path: 'hi1',
      //     component: Hi1
      //   },
      //   {
      //     path: 'hi2',
      //     component: Hi2
      //   }
      // ]
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/hi1',
      name: 'Hi1',
      component: Hi1
    },
    {
      path: '/hi2',
      name: 'Hi2',
      component: Hi2
    }
  ]
})
