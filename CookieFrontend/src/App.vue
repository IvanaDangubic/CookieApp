<template>
  <div id="app" @prijava="prijaviSe">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        prijava: false
      }
    },
    mounted () {
      if (!this.prijava) {
        this.$router.replace ({ name: "home" })
      } else {
        this.$router.replace ({ name: "Izbornik" })
      }
    },
    methods: {
      prijaviSe : function (status) {
        this.prijava = status;
      }
    }
  }

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
