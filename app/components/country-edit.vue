<template>
  <div class="container">
    <h1>Country</h1>
    <pre>
      {{ country }}
    </pre>
    <!-- edit the country's note field here -->
  </div>
</template>

<script>
module.exports = {
  props: {
    countryName: { type: String, required: true }
  },
  name: "country-edit"
};
</script>
