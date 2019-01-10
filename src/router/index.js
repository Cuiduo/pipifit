import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloFromVux from '@/components/HelloFromVux'
import mealDetails from '@/components/onefloor/mealDetails' 
import mealplan from '@/components/onefloor/mealplan'
import onefloor from '@/components/onefloor/onefloor'
import fixedIcon from '@/components/common/fixedIcon'
import slider from '@/components/common/slider'
import twoIndex from '@/components/twofloor/twoIndex'
import favorite from '@/components/favorite/favorite'
import interpretation from '@/components/favorite/interpretation'
import customization from '@/components/favorite/customization'
import nutritionprogram from '@/components/favorite/nutritionprogram'
import articles from '@/components/favorite/article'
import search from '@/components/search/search'
import windzxsh from '@/components/threefloor/windzxsh'
import specialist from '@/components/threefloor/specialist'
import tips from '@/components/tips/tips'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloFromVux',
    //   component: HelloFromVux,
    //   meta: {
    //     keepAlive: true
    //   }
    // },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/mealDetails',
      name: 'mealDetails',
      component: mealDetails,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/mealplan',
      name: 'mealplan',
      component: mealplan,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/onefloor',
      name: 'onefloor',
      component: onefloor
    },
    {
      path: '/fixedIcon',
      name: 'fixedIcon',
      component: fixedIcon
    },
    {
      path: '/twoIndex',
      name: 'twoIndex',
      component: twoIndex
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite,
      
      // redirect: '/favorite/customization',
      children:[
        {
          path:'customization',
          name: 'customization',
          component: customization,
          meta: {
            keepAlive: false
          },
        },
        {
          path:'nutritionprogram',
          name: 'nutritionprogram',
          component: nutritionprogram,
          meta: {
            keepAlive: true
          },
        },
        {
          path:'articles',
          name: 'articles',
          component: articles,
          meta: {
            keepAlive: true
          },
        },
        {
          path:'interpretation',
          name: 'interpretation',
          component: interpretation,
          meta: {
            keepAlive: true
          },
        },
      ]
    },
    {
      path: '/interpretation',
      name: 'interpretation',
      component: interpretation
    },
    {
      path: '/search',
      name: 'search',
      component: search   
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/specialist',
      name: 'specialist',
      component: specialist
    },
    {
      path: '/windzxsh',
      name: 'windzxsh',
      component: windzxsh
    },
    {
      path: '/tips',
      name: 'tips',
      component: tips
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})
