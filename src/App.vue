<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view/>
  </main>
  <footer/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

  &::selection {
    background: transparentize(#42B883, 0.5)
  }

  body {
    background-color: #35495E;
  }

  a {
    text-decoration: none
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2c3d4e;

    h1 {
      color: white;
      font-size: 20px;

      span {
        color: #42B883;
      }
    }
  }
}

</style>
