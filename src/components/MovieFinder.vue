<template>
  <form @submit.prevent="findMovies" class="bg-white rounded">
    <div class="form-group">
      <input v-model="query" type="text" name="search" class="form-control bg-white border-0 shadow" placeholder="search movies">
    </div>
  </form>
</template>

<script>
export default {

  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
