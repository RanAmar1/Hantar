<template>
  <div id="app">
    <img src="./assets/MAZAL.png">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link active" to="/">ניהול מסדר</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/addCourse">הוספת קורס</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/forceMangnent">הוספת חניך</router-link>
            </li>
        </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
img {
    margin-left: 400px;
}
</style>
