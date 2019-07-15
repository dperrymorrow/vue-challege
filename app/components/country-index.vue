<template>
  <div class="container">
    <h1>Countries</h1>

    <filters></filters>
    <table class="table table-striped">
      <thead>
        <th @click="sortBy('name')" style="cursor:pointer">Country</th>
        <th @click="sortBy('city')" style="cursor:pointer">Capital City</th>
        <th @click="sortBy('abbreviation')" style="cursor:pointer">Abbreviation</th>
        <th @click="sortBy('currency_name')" style="cursor:pointer">Currency</th>
      </thead>

      <tbody>
        <tr v-if="tableLoaded">
          <td>
            <h3>No data found</h3>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr
          v-for="country in sortedCountries"
          :key="country.name"
          @click="goToCountryEdit(country)"
          v-else
          style="cursor:pointer"
        >
          <!-- render a row for each country here -->
          <td>{{country.name}}</td>
          <td>{{country.city}}</td>
          <td>{{country.abbreviation}}</td>
          <td>{{country.currency_name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
module.exports = {
  components: { filters: httpVueLoader("/components/filters.vue") },
  name: "countries",
  beforeMount() {
    this.$store.dispatch("countries/load");
  },
  data: function() {
    return {
      currentSort: "name",
      sortDirection: "asc",
      reverse: false
    };
  },
  computed: {
    sortedCountries() {
      return this.$store.state.countries.filterTable.sort((a, b) => {
        // mod is a modifier for reversing on decend
        let mod = 1;
        if (this.sortDirection === "desc") mod = -1;
        if (a[this.currentSort] < b[this.currentSort]) {
          return -1 * mod;
        }
        if (a[this.currentSort] > b[this.currentSort]) {
          return 1 * mod;
        }
        return 0;
      });
    },
    tableLoaded() {
      if (this.$store.state.countries.filterTable.length === 0) {
        return true;
      }
    }
  },
  methods: {
    sortBy(field) {
      if (field === this.currentSort) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      }
      this.currentSort = field;
    },
    goToCountryEdit(data) {
      this.$router.push({
        name: "countryEdit",
        params: {
          name: data.name,
          city: data.city,
          abbreviation: data.abbreviation,
          currency_name: data.currency_name
        }
      });
    }
  }
};
</script>
