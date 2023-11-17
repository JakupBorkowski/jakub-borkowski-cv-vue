<template>
  <Navbar>
  </Navbar>

  <div class="banner">
    
    <router-view>

    </router-view>
  </div>


  <div class="footer">
    <p>&copy; 2022 Jakub Borkowski</p>
  </div>

</template>



<script>

import Navbar from './components/Navbar.vue'

export default {
  components:{
    Navbar,
  },
}


</script>

<style>
.banner{
  width: 100%;
  min-height:100vh;
  background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(./assets/tlo.png);
  background-size: cover;
  background-position: center;
}

</style>

