<template>
  <div class="container">
    <h1>Countries</h1>

    <filters></filters>

    <table class="table table-striped">
      <thead>
        <!-- need to be able to sort by clicking on the headers for the country row -->
        <th>Name</th>
        <th>Capital</th>
        <th>Abbreviation</th>
        <th>Currency</th>
      </thead>

      <tbody>
        <tr
          v-for="country in $store.state.countries.merged"
          :key="country.country"
        >
          <td>{{ country.country }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.abbreviation }}</td>
          <td>{{ country.currency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
module.exports = {
  name: "countries"
};
</script>
