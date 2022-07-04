<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0133093">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
          alt="Matrix poster" class="feature-img">
        <div class="detail">
          <h3> Matrix </h3>
          <p>
            Thomas A. Anderson is a man living two lives. By day he is an average computer
            programmer and by night a hacker known as Neo.
          </p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="searchMovies" class="search-box">
      <label for="search">
        <input id="search" type="text" placeholder="What are you looking for ?"
               v-model="searchQuery">
      </label>
      <input type="submit" value="Search">
    </form>

    <div class="movies-list">
      <div class="movie" v-for="m in movies" :key="m.imdbID">
        <router-link :to="'/movie/' + m.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="m.Poster" alt="Movie Poster">
            <div class="type">{{ m.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ m.Year }}</p>
            <h3>{{ m.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import searchByQuery from '@/api/searchByQuery';
import { useRoute } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const searchQuery = ref('');
    const movies = ref([]);

    const searchMovies = async () => {
      if (!searchQuery.value) {
        console.log('You must write a search query');
      }
      movies.value = await searchByQuery(searchQuery.value);
      searchQuery.value = '';
    };

    onBeforeMount(() => {
      const route = useRoute();
      if (route.query?.search) {
        searchQuery.value = route.query?.search;
        searchMovies();
      }
    });

    return {
      searchQuery,
      movies,
      searchMovies,
    };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .feature-card {
    position: relative;
    max-width: 300px;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #FFF;
        margin-bottom: 16px;
      }

      p {
        color: #FFF;
      }
    }
  }

  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3B8070;
        }
      }
    }
  }

  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .year {
            color: #AAA;
            font-size: 14px;
          }

          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
