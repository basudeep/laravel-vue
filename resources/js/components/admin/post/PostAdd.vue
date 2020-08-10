<template>
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- left column -->
          <div class="col-8">
            <!-- general form elements -->
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Add New Posts</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" enctype="multipart/form-data" @submit.prevent="handlePost()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="title">Post Title</label>
                    <input name="title"  id='title' type="text" placeholder="Title"  v-model="form.title"  class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                    <has-error v-if="form.errors.has('title')" :form="form" field="title"></has-error>
                    <alert-error  v-if="form.errors.has('title')" :form="form" field="title"></alert-error>
                  </div>
                  

                  <div class="form-group">
                    <label for="title">Description</label>
                    <textarea rows='5' name="description" id='description' v-model="form.description" class="form-control" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                    <has-error v-if="form.errors.has('description')" :form="form" field="description"></has-error>
                    <alert-error v-if="form.errors.has('description')" :form="form" field="description"></alert-error>
                  </div>


                <div class="form-group">
                    <label>Category List</label>
                    <select class="form-control" v-model="form.category_id"  :class="{ 'is-invalid': form.errors.has('category_id') }">
                      <option selected disabled value="">Select a category</option>
                      <option  v-for="category in categories" :value='category.id' :key="category.id" > {{category.category_name}} </option>
                    </select>
                    <has-error v-if="form.errors.has('category_id')" :form="form" field="category_id"></has-error>
                    <alert-error v-if="form.errors.has('category_id')" :form="form" field="category_id"></alert-error>
                  </div>

                    <div class="form-group">
                    <label for="photo">Photo</label><br>
                    <!-- <div class="input-group">
                      <div class="custom-file">
                        <input @change="handleChange($event)" type="file" name="photo"  class="custom-file-input" :v-model="form.photo" id="photo" :class="{ 'is-invalid': form.errors.has('photo') }">
                        <label class="custom-file-label" for="photo">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div> -->
                    <input type="file"  accept="image/x-png,image/gif,image/jpeg,image/jpg"  @change="handleChange($event)"  :class="{ 'is-invalid': form.errors.has('photo') }">
                    <div v-if="form.photo" class="image-uploaded mt-3" width="100px" height="100px">
                        <img :src="form.photo" width="100px" height="100px" alt=""  >
                        <p @click="handleClear()">X</p>
                    </div>
                    <has-error v-if="form.errors.has('photo')" :form="form" field="photo"></has-error>
                    <alert-error v-if="form.errors.has('photo')" :form="form" field="photo"></alert-error>
                  </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-block btn-warning btn-lg">Save</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
        </div>
        </div>
      </div>
</section>
</template>
<script>
export default {
    data(){
        return{
            form: new Form({
                'title': '',
                'description': '',
                'category_id': '',
                'photo': ''
            })
        }
    },
    mounted(){
        //Call Action During Mount Which Fetch Category
        this.$store.dispatch('allitems')
    },

    computed:{
        //Store Fetch Data in Method
         categories(){
            return this.$store.getters.getItems
        }
    },
    methods:{
        handleChange($event){
            let file = event.target.files[0];
            console.log(file)
            if(file.size > 3000000 ){
               return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image Must be Less Than 3 MB!'
                    })   
                }
            let reader = new FileReader();
            reader.onload = e => {
                this.form.photo = e.target.result
            };
            reader.readAsDataURL(file);
        },
       handleClear(){
           this.form.photo = ''
       },
       handlePost(){
           
           this.form.post('/add-post')
                .then( res => {
                    this.$router.push('/posts')
                    Toast.fire({
                        icon: 'success',
                        title: res.data.message
                    })
                })
                .catch( errors => {
                    Toast.fire({
                        icon: 'error',
                        title: 'Failed'
                    })
                    
                })
       }
    }
}
</script>