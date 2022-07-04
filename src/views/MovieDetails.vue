<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="movie poster" class="feature-img">
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import getInfoById from '@/api/getInfoById';

export default {
  name: 'MovieDetails',
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(async () => {
      movie.value = await getInfoById(route.params.id);
    });

    return {
      movie,
    };
  },
};
</script>

<style lang="scss">
.movie-detail {
  padding: 16px;

  h2 {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }

  p {
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
