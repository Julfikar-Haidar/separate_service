<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">User List</h1>
        <router-link to="/create-user">
          <button type="submit" class="btn btn-primary">Cerate User</button>
        </router-link>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, i) in user_list" :key="i">
              <th scope="row">{{ i }}</th>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'EditUser',
                    params: { id: user.id },
                  }"
                >
                  <button type="submit" class="btn btn-primary">Edit</button>
                </router-link>

                <button
                  @click="userDelete(user.id)"
                  type="submit"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserList, userDelete } from "./Service";
export default {
  name: "UserList",
  data() {
    return {
      user_list: null,
    };
  },
  methods: {
    getUser: function () {
      getUserList().then((result) => {
        console.log("45", result);
        this.user_list = result;
      });
    },
    userDelete: function (id) {
      userDelete(id)
        .then((response) => {
          console.log("response", response.message);
          this.getUser();
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
