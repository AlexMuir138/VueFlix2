<template>
  <form @submit.prevent="findMovieTimes" class="bg-primary rounded shadow">
    <div class="form-group d-flex align-items-center m-3">
      <input v-model="query"
             type="text"
             name="search"
             class="form-control bg-white border-0  m-2"
             placeholder="search movies"
      >
      <button class="btn mx-3" type="submit">
        <i class="mdi mdi-movie-search text-white f-20"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { moviesService } from '../services/MoviesService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {

  setup() {
    const query = ref('')

    onMounted(() => {
      moviesService.getMovies()
      AppState.searchTime = window.localStorage.getItem('time')
      query.value = AppState.searchTime
      logger.log('search time', AppState.searchTime)
    })
    return {
      query,
      async findMovieTimes() {
        try {
          await moviesService.searchMovieTimes(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
