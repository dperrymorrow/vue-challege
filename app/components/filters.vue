<template>
  <form class="form-inline">
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
      <input type="search" v-model="filterValue" class="form-control" />
    </div>
  </form>
</template>

<script>
module.exports = {
  name: "filters"
};
</script>
