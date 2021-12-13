<template>
<div class="container">
 <div class="row">
   <div class="col-md-12">
     <h1 class="text-center">User List</h1>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="input_data.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Fist Name</label>
    <input type="firstName" class="form-control"  placeholder="First Name" v-model="input_data.firstName">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="last_name" class="form-control"  placeholder="Last Name" v-model="input_data.lastName">
  </div>

  <button type="submit" class="btn btn-primary"  @click.prevent="userCreate">Submit</button>
</form>
   </div>
 </div>
</div>

</template>

<script>
import { userPost } from './Service';
export default {
  name: 'Create',
  data () {
    return {
      input_data: {
        firstName: null,
        lastName: null,
        email: null,
      }
    }
  },
   methods: {
    userCreate: function() {
      console.log(this.input_data)
      userPost(this.input_data).then((response) => {
        console.log('response',response.message)
        this.$router.push("/");
      }).catch((error) => {
        console.log('error',error)
      })
      // this.$router.push("/");
    }
  },
  created() {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
