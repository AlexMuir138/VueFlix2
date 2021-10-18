<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <MovieFinder />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { moviesService } from '../services/MoviesService'

export default {

  setup() {
    onMounted(() => {
      moviesService.getMovies()
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
