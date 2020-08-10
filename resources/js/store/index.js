export default {
    state: {
        //same 1
        category: [],
        post:[]
    },
    getters: {
        getItems(state){
                        //same 1
            return state.category
        },
        
        //Computed Methods Which Call From Component
        getPosts( state ){
            return state.post
        }
    },
    actions: {
        allitems( context ){
            axios.get('/categories')
                .then( res =>{       //same 2
                    context.commit('categories', res.data.categories )
                })
        },
        // Get Post Action During Component Mount
        getPosts( context ){
            axios.get('/all-posts')
                .then( res =>{
                    context.commit('allposts', res.data.posts)
                })
                
        }
    },
    mutations: {
        //same 2
        categories( state, data ){
                         //same 1   
            return state.category = data
        },
        // Store Data In Store
        allposts( state, data ){
            return state.post = data
        }
    }
}