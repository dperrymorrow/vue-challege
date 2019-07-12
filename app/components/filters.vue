<template>
  <form class="form-inline">
    <div class="form-group">
      <!-- filter by field and matching value -->
      <label>Field:</label>
      <select class="form-control">
        <option :value="null">Select</option>
      </select>
    </div>

    <div class="form-group">
      <label>Value:</label>
      <input type="search" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Filter</button>
  </form>
</template>

<script>
module.exports = {
  name: "filters"
};
</script>
