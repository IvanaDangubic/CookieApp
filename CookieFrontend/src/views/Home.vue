<template>
  <div id="home">
    <div class="img">
     <img src="../assets/gornja.png" style="width: 100%" alt="Naslovna slika">
    </div>
    <div class="forma">
      <b-form>
        <b-form-group style = "margin-left: 40%" id="input-group-1">
          <b-form-input
                  style = "margin-top: 10%"
                  id="input-big"
                  v-model="user.korisnickoime"
                  type="text"
                  required
                  placeholder="Upišite korisničko ime"
          ></b-form-input>

          <b-form-input
                  style = "margin-top: 12%"
                  id="input-big"
                  v-model="user.lozinka"
                  type="password"
                  required
                  placeholder="Upišite lozinku"
          ></b-form-input>


        </b-form-group>
      </b-form>
    </div>
    <b-button variant="success" v-on:click="ulaz" style="margin-bottom: 4%; margin-right: 2%">Prijavi se</b-button>
    <router-link to="Registracija"><b-button variant="outline-primary" style="margin-bottom: 5%; margin-right: 2%" >Registriraj se</b-button></router-link>
    <div>


    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "user",

    data() {
      return {
        user: {
          korisnickoime: '',
          lozinka: '',

        }
      }
    },

    methods: {

      ulaz: function () {
        axios.get("http://127.0.0.1:5000/korisnici") .then((response) => {
          response.data.korisnici[0].forEach(function(value) {
            if(this.user.korisnickoime === value.Username && this.user.lozinka === value.Lozinka) {
              this.$store.state.korisnik = value;
              this.emitprijava();
            }
          }, this);
        });
      },
      emitprijava : function () {
        this.$emit("prijava", true);
        this.$router.replace ({ name: "Izbornik"})
      },
    },

  }
</script>

<style scoped>
  #home{
    background-color: #deeff5;
    margin: 4% auto;
    height: auto;
    min-height: 550px;
    width: 75%;
    border-radius: 8px;
    transition: .5s ease;
    box-shadow: 0 6px 5px 1px #2c3e50;
  }
  #input-group-1{
    width: 30%;
  }
  #input-1, #input-2{
    margin-right: 20%;
    margin-bottom: 4%;
  }

</style>