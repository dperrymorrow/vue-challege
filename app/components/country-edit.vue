<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-danger" @click="previous()">&larr; Previous Page</button>
      <h2 class="text-center">
        Country:
        {{ country }}
      </h2>

      <h2 class="bg-success text-center" v-if="!hidden">Success</h2>
      <div class="well">
        <!-- edit the country's fields here -->
        <form @submit.prevent="updateCountry(form)">
          <div class="form-group col-lg-6">
            <label for="country">Country:</label>
            <input class="form-control" type="text" id="country" v-model="form.name" />
          </div>
          <div class="form-group col-lg-6">
            <label for="city">City:</label>
            <input class="form-control" type="text" id="city" v-model="form.city" />
          </div>
          <div class="form-group col-lg-6">
            <label for="abbreviation">Abbreviation:</label>
            <input class="form-control" type="text" id="abbreviation" v-model="form.abbreviation" />
          </div>
          <div class="form-group col-lg-6">
            <label for="currency">City:</label>
            <input class="form-control" type="text" id="currency" v-model="form.currency_name" />
          </div>
          <div class="form-group">
            <button class="btn btn-success form-control" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "country-edit",
  data: function() {
    return {
      hidden: true,
      country: "",
      form: {
        name: "",
        city: "",
        abbreviation: "",
        currency_name: ""
      }
    };
  },
  mounted() {
    this.country = this.$attrs.name;
    this.form.name = this.$attrs.name;
    this.form.city = this.$attrs.city;
    this.form.abbreviation = this.$attrs.abbreviation;
    this.form.currency_name = this.$attrs.currency_name;
  },
  methods: {
    updateCountry(data) {
      this.hidden = false;
      this.$store.dispatch("countries/findByName", {
        data,
        country: this.country
      });
      setTimeout(() => {
        this.hidden = true;
      }, 2000);
    },
    previous() {
      this.$store.dispatch(
        "countries/filterTable",
        this.$store.state.countries.merged
      );
      this.$router.push({ name: "root" });
    }
  }
};
</script>
