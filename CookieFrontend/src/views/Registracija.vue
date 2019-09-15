<template>
  <div id="Registracija">
    <div class="img">
      <img src="../assets/reg.png" alt="Naslovna slika">
    </div>
    <div class="forma">
      <b-form>
        <b-form-group  style = "margin-left: 20%" id="input-group-2" >
          <b-form-input

                  id="input-1"
                  v-model="korisnik.ime"
                  type="text"
                  required
                  placeholder="Upisite ime"
          ></b-form-input>

          <b-form-input
                  id="input-3"
                  v-model="korisnik.prezime"
                  type="text"
                  required
                  placeholder="Upišite prezime"
          ></b-form-input>

          <b-form-input
                  id="input-2"
                  v-model="korisnik.korisnickoime"
                  type="text"
                  required
                  placeholder="Upišite zeljeno korisnicko ime"
          ></b-form-input>
          <b-form-input
                  id="input-3"
                  v-model="korisnik.lozinka"
                  type="text"
                  required
                  placeholder="Upišite lozinku"
          ></b-form-input>

        </b-form-group>
      </b-form>
    </div>
    <b-button variant="danger" v-on:click="onSubmit">Registriraj</b-button>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "korisnik",

    data() {
      return {
        korisnik: {
          ime: '',
          prezime: '',
          korisnickoime: '',
          lozinka: '',
        }
      }
    },

    methods: {


      onSubmit: function () {
        const Korisnik = {
          Ime: this.korisnik.ime,
          Prezime: this.korisnik.prezime,
          Username: this.korisnik.korisnickoime,
          Lozinka: this.korisnik.lozinka
        };
        axios.post("http://127.0.0.1:5000/korisnici", Korisnik)
                .then(() => {
                  this.korisnik.ime = "";
                  this.korisnik.prezime = "";
                  this.korisnik.korisnickoime = "";
                  this.korisnik.lozinka = "";

                  alert("Uspjesno obavljena registracija");

                })
                .catch((error) => {
                  alert(error);
                })
      },

    },
    
  }
</script>

<style scoped>
  #input-group-2{
    width: 50%;
  }
  #input-1, #input-2, #input-3{
    margin-bottom: 1%;
  }

</style>