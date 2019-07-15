<template>
  <div class="page employe-edit">
    <h1 class="employees-list__header">Update employe</h1>
    <b-form @submit="updateEmploye">
      <b-form-group id="fieldset-1" label="Name and surname" label-for="name">
        <b-form-input
          id="name"
          v-model="employe.name"
          trim
          required
          type="text"
          pattern="^[a-zA-Z ]*$"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-2" label="Username" label-for="username">
        <b-form-input
          id="username"
          v-model="employe.username"
          trim
          type="text"
          required
          minlength="6"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-3" label="Email" label-for="email">
        <b-form-input id="email" v-model="employe.email" trim required type="email"></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-4" label="Street" label-for="street">
        <b-form-input
          id="street"
          v-model="employe.address.street"
          trim
          required
          type="text"
          pattern="^[a-zA-Z0-9 ]*$"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-5" label="Suite" label-for="suite">
        <b-form-input
          id="suite"
          v-model="employe.address.suite"
          trim
          required
          type="text"
          pattern="^[a-zA-Z0-9 ]*$"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-6" label="City" label-for="city">
        <b-form-input
          id="city"
          v-model="employe.address.city"
          trim
          required
          type="text"
          pattern="^[a-zA-Z ]*$"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-7" label="Zipcode" label-for="zipcode">
        <b-form-input
          id="zipcode"
          v-model="employe.address.zipcode"
          trim
          required
          type="text"
          pattern="^\d{5}(?:[-\-]\d{4})?$"
          title="For example: 55555-4444"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-8" label="phone" label-for="phone">
        <b-form-input id="phone" v-model="employe.phone" trim></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-9" label="Website" label-for="website">
        <b-form-input id="website" v-model="employe.website" trim></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-10" label="Company" label-for="company">
        <b-form-input id="company" v-model="employe.company.name" trim></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router";

export default {
  components: {},
  data() {
    return {
      loading: false,
      employe: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get("http://localhost:3000/users/" + this.$route.params.id)
        .then(({ data }) => {
          this.employe = data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateEmploye(e) {
      e.preventDefault();

      let tempAddress = {
        street: this.employe.address.street,
        suite: this.employe.address.suite,
        city: this.employe.address.city,
        zipcode: this.employe.address.zipcode
      };
      let tempCompany = {
        name: this.employe.company.name
      };

      let updatedEmploye = {
        name: this.employe.name,
        username: this.employe.username,
        email: this.employe.email,
        phone: this.employe.phone,
        website: this.employe.website,
        address: tempAddress,
        company: tempCompany
      };

      axios
        .put(
          "http://localhost:3000/users/" + this.$route.params.id,
          updatedEmploye
        )
        .then(res => console.log(res.data));

      router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.employees-list {
  &__header {
    font-size: 20px;
    padding: 0 0 10px;
  }
  &__loading {
    color: #999d9d;
    text-align: center;
  }
}
</style>