<template>
  <div class="container">
    <h1>Countries</h1>

    <filters></filters>

    <table class="table table-striped">
      <thead>
        <!-- need to be able to sort by clicking on the headers for the country row -->
      </thead>

      <tbody>
        <tr>
          <!-- render a row for each country here -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
module.exports = {
  components: { filters: httpVueLoader("/components/filters.vue") },
  name: "countries",
  mounted() {
    this.$store.dispatch("countries/load");
  }
};
</script>
