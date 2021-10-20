<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-8">
        <MovieFinder />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-8">
        <MovieTimeFinder />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4" v-for="m in movies" :key="m.id">
        <Movie :movie="m" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { moviesService } from '../services/MoviesService'
import { AppState } from '../AppState'

export default {

  setup() {
    onMounted(() => {
      moviesService.getMovies()
    })
    return {
      movies: computed(() => AppState.searchedMovies)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
