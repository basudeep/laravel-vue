<template>
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post List</h3>
              <div class="card-tools">
                  <router-link class="btn btn-block btn-outline-info" to='/post-add'>Add New Post</router-link>
              </div>
            </div>
            <!-- /.card-header -->
            <div v-if="allposts.length >= 1"  class="card-body align-items-center d-flex table-responsive p-0">
              <table id="example2" class="table table-bordered table-hover ">
                <thead>
                <tr>
                  <th>Number</th>
                  <th>Category</th>
                  <th>User</th>
                  <th>Post Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="( post, index ) in allposts" :key="post.id">
                  <td class="align-middle">{{index+1}}</td>
                  <td class="align-middle" v-if="post.category" >{{post.category.category_name}}</td>
                  <td class="align-middle" v-else>Uncategorized</td>
                  <td class="align-middle" v-if="post.user">{{post.user.name}}</td>
                  <td class="align-middle">{{post.title | wordfilter(20, ' ..') }}</td>
                  <td class="align-middle">{{post.description | wordfilter(50, ' ...')}}</td>
                  <td class="image"><img :src="getImage(post.photo)" alt="" class="img-fluid"></td>
                  <td class="align-middle text-center">{{post.created_at | timeformat}}</td>
                  <td class="align-middle">
                      <router-link to='/post-edit/3'  class="btn btn-warning text-dark">Edit</router-link>
                      <a @click.prevent='handleDelete(post.id)' class="btn btn-danger text-light">Delete</a>
                      <router-link to='/post-view/5' class="btn btn-primary">View</router-link>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="add text-center py-5">
              <h2>Please Add Post</h2>
               <router-link class="btn btn-outline-info mt-4" to='/post-add'>Add New Post</router-link>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch('getPosts')
    },
    computed:{
        allposts(){
            return this.$store.getters.getPosts
        }
    },
    methods:{
      getImage(src){
        return 'upload/postimages/'+src
      },
      handleDelete(id){
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
                axios.get('/delete-post/'+id )
                  .then( res =>{
                    this.$store.dispatch('getPosts')
                    Toast.fire({
                        icon: 'success',
                        title: 'Post Delted Succesfully'
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