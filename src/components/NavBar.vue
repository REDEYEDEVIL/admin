<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Alphabe Institute</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/attendance">AttendancePage</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>
<style>
  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }
</style>