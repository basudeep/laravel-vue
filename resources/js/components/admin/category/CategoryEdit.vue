<template>
    <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- left column -->
          <div class="col-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Edit Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @submit.prevent='updateCategory()' >
                <div class="card-body">
                  <div class="form-group">
                    <label for="category">Categories</label>
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
    mounted(){
        axios.get(`/edit-category/${this.$route.params.categoryid}`)
        .then( res =>{
          this.form.fill(res.data.category)
        })
    },
    data(){
      return{
        form: new Form({
          'category_name': ' '
        })
      }
    },
    methods :{
      updateCategory(){
        this.form.post(`/update-category/${this.$route.params.categoryid}`)
          .then( res =>{
            this.$router.push('/category-lists')
            Toast.fire({
              icon: 'success',
              title: res.data.message
            })
          })
      }
    }
}
</script>