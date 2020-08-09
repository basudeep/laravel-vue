<template>
    <div>
        
    <!-- Main content -->
    <section class="content">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Categories Lists</h3>
              <div class="card-tools">
                  <router-link to='/category-add' href="#" class="btn btn-primary">Add New</router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead class="text-center">
                <tr>
                  <th>Items</th>
                  <th>Category Name</th>
                  <th>Created Time</th>
                  <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="( category, index) in getCategory" :key="category.id"> 
                  <td>{{ index+1 }}</td>
                  <td>{{ category.category_name }}</td>
                  <td>{{ category.created_at | timeformat }}</td>
                  <td> 
                      <router-link :to='`/category-edit/${category.id}`'   class="btn btn-warning">Edit</router-link>
                      <a @click.prevent ="deleteCategory(category.id)" class="btn btn-danger">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
    </div>
</template>
<script>
export default {

    mounted(){
    this.$store.dispatch('allitems')
  },
  computed:{
    getCategory(){
      return this.$store.getters.getItems
    }
  },  
  methods:{
    deleteCategory(id){

    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      axios.get('/category/'+id )
        .then( res =>{
          console.log(res)
          this.$store.dispatch('allitems')
          Toast.fire({
              icon: 'success',
              title: 'Category Delted Succesfully'
            })
        })
        .catch( err =>{
          console.log(err)
        })
    }
  })

        
      }
  }
}
</script>