// These can be imported from other files
import AdminHome from '../js/components/admin/AdminHome.vue'
import CategoryList from '../js/components/admin/category/CategoryList.vue'
import CategoryAdd from '../js/components/admin/category/CategoryAdd.vue'
import CategoryEdit from '../js/components/admin/category/CategoryEdit.vue'

//**   Post Component  *//
import PostAdd from '../js/components/admin/post/PostAdd.vue'
import PostList from '../js/components/admin/post/PostList.vue'
import PostEdit from '../js/components/admin/post/PostEdit.vue'
import PostView from '../js/components/admin/post/PostView.vue'


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
    },

    //Post Route
    {
        path: '/posts',
        component: PostList
    },
    {
        path:'/post-add',
        component: PostAdd
    },
    {
        path:'/post-edit/:postId',
        component: PostEdit
    },
    {
        path: '/post-view/:postId',
        component: PostView
    }

]
