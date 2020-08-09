export default {
    state: {
        //same 1
        category: []
    },
    getters: {
        getItems(state){
                        //same 1
            return state.category
        }
    },
    actions: {
        allitems( context ){
            axios.get('/categories')
                .then( res =>{       //same 2
                    context.commit('categories', res.data.categories )
                })
        }
    },
    mutations: {
        //same 2
        categories( state, data ){
                         //same 1   
            return state.category = data
        }
    }
}