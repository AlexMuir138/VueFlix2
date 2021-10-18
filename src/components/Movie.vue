<template>
  <div class="card rounded shadow">
    <div class="card-body">
      <div>
        <h4>
          <u>
            {{ movie.title }}
          </u>
        </h4>
      </div>
      <div class="d-flex justify-content-between">
        <p> Made In:</p>
        {{ movie.year }}
      </div>
      <div class="d-flex justify-content-between">
        <p> Rated:</p>
        {{ movie.rating }}
      </div>
      <div class="d-flex justify-content-between">
        <p> Run Time:</p>
        {{ movie.run_time }}
      </div>
      <div class="d-flex justify-content-between">
        <p> Genre:</p>
        {{ movie.genre }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
