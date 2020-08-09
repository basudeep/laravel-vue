<template>
    <div >
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- left column -->
          <div class="col-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @submit.prevent='addCategory()'>
                <div class="card-body">
                  <div class="form-group">
                    <label for="category">Email address</label>
                    <input name="category_name" type="text" placeholder="Category Name"  v-model="form.category_name"  class="form-control" :class="{ 'is-invalid': form.errors.has('category_name') }">
                    <has-error :form="form" field="category_name"></has-error>
                    <alert-error :form="form" field="category_name"></alert-error>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
        </div>
        </div>
      </div>
</section>
</div>
</template>
<script>
export default {
  data() {
    return{
      form: new Form({
        category_name: '',

      })
    }
  },
  methods : {
    addCategory(){
      this.form.post('/add-category')
          .then((res)=>{
            console.log(res)
            this.$router.push('/category-lists')
            Toast.fire({
              icon: 'success',
              title: res.data.message
            })
          })
          .catch( err =>{
            Toast.fire({
              icon: 'error',
              title: 'please try again'
            })
          })
    }
  }
}
</script>