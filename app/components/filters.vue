<template>
  <form class="form-inline" @submit.prevent>
    <div class="form-group">
      <!-- filter by field and matching value -->
      <label>Field:</label>
      <select class="form-control" v-model="filterField">
        <option :value="null">Select</option>
        <option value="name">Name</option>
        <option value="city">City</option>
        <option value="abbreviation">Abbreviation</option>
        <option value="currency_name">Currency</option>
      </select>
    </div>

    <div class="form-group">
      <label>Value:</label>
      <input
        type="search"
        v-model="filterValue"
        class="form-control"
        @input="filterTable(filterField, filterValue)"
        :disabled="isDisabled"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-default" @click.prevent="clearFilters()">Clear Filters</button>
    </div>
  </form>
</template>

<script>
module.exports = {
  name: "filters",
  data: function() {
    return {
      filterField: null,
      filterValue: null
    };
  },
  computed: {
    isDisabled() {
      if (!this.filterField) {
        return true;
      }
    }
  },
  methods: {
    filterTable(field, term) {
      const filtered = this.$store.state.countries.merged.filter(country => {
        if (country[field] !== undefined) {
          return country[field].toUpperCase().includes(term.toUpperCase());
        }
      });
      this.$store.dispatch("countries/filterTable", filtered);
    },
    clearFilters() {
      this.filterField = null;
      this.filterValue = null;
      this.$store.dispatch(
        "countries/filterTable",
        this.$store.state.countries.merged
      );
    }
  },
};
</script>
