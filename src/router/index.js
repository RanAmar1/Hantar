import Vue from 'vue'
import Router from 'vue-router'
import AddCourse from '@/components/AddCourse.vue'
import AddStudent from '@/components/AddStudent.vue'
import forceMangnent from '@/components/forceMangnent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddCourse',
      component: AddCourse
    },
    {
      path: '/addCourse',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/forceMangnent',
      name: 'forceMangnent',
      component: forceMangnent
    }
  ]
})
