<template>
  <form class="form-inline">
    <div class="form-group">
      <label>Field:</label>
      <select class="form-control">
        <option :value="null">
          -- Select a Field --
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Value:</label>
      <input type="search" class="form-control" />
    </div>
    <button type="submit" class="btn btn-default">Filter</button>
  </form>
</template>

<script>
module.exports = {
  name: "filters"
};
</script>
