// These can be imported from other files
import AdminHome from '../js/components/admin/AdminHome.vue'
import CategoryList from '../js/components/admin/category/CategoryList.vue'
import CategoryAdd from '../js/components/admin/category/CategoryAdd.vue'
import CategoryEdit from '../js/components/admin/category/CategoryEdit.vue'
export const routes = [
    { path:'/home', component: AdminHome },
    { 
        path:'/category-lists',
        component: CategoryList
    },
    {
        path: '/category-add',
        component: CategoryAdd
    },
    {
        path: '/category-edit/:categoryid',
        component: CategoryEdit
    }

]
