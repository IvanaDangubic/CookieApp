<template>
    <div id="Izbornik">
        <div class="img">
           <img src="../assets/gornja.png" style="width: 100%" alt="Naslovna slika">
        </div>
        <div>
            <b-button @click="odjava" style="float: right; margin: 2.5% 1%">Odjava</b-button>
            <router-link to="Novi"><b-button variant="outline-primary" style="margin: 2.5% 1%;width: 30%; float: right" >Unesite novi recept !</b-button></router-link>
        </div>
        <div class="sekcije-kategorije">
            <b-form-select v-model="odabranaKategorija" :options="dostupneKategorije" style="width: 20%; margin-left:2.5%; float: left">
                <template slot="first">
                    <option :value="null" disabled>Odaberite kategoriju</option>
                </template>
            </b-form-select>
            <div class="prikaz">
                <ul v-if="odabrana" style="list-style-type: none">
                    <li v-for="(kolac, index) in trenutnaKategorija" :key="kolac.id" @click="odabirKolaca(kolac)">
                        <h1 class="item">{{ index + 1 + '.' }}</h1>
                        <b-img rounded v-bind="props" :src="kolac.fotografija" :alt="kolac.Naziv_kolaca"></b-img>
                        <h3 class="item">{{ kolac.Naziv_kolaca }}</h3>
                    </li>
                </ul>
                <div v-else>
                    <p>Nije odabrana niti jedna kategorija.</p>
                </div>
            </div>
        </div>

</div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Izbornik',
        data () {
            return {
                odabranaKategorija: '',
                dostupneKategorije: [],
                trenutnaKategorija: [],
                odabrana: false,
                kolaci: [],
                props: {width: 75, height: 75, class: 'item'}
            }
        },
        created () {
          this.dohvatiKategorije();
          this.dohvatiKolace();
        },
        watch: {
          odabranaKategorija () {
              this.popuniTrenutnuKategoriju();
              if (this.trenutnaKategorija.length === 0) {
                  this.odabrana = false;
              } else {
                  this.odabrana = true;
              }
          }
        },
        methods: {
            async dohvatiKategorije () {
              await axios.get("http://127.0.0.1:5000/kategorije")
                  .then((response) => {
                      response.data.kategorije[0].forEach(function(value) {
                          this.dostupneKategorije.push({value: value.id, text: value.Naziv})
                      }, this);
                  })
            },
            async dohvatiKolace () {
              await axios.get("http://127.0.0.1:5000/kolaci")
                  .then((response) => {
                      this.kolaci = response.data.kolaci[0];
                })
            },
            popuniTrenutnuKategoriju : function () {
                this.trenutnaKategorija = [];
                this.kolaci.forEach(function (value) {
                    if ( value.kategorije === this.odabranaKategorija) {
                        this.trenutnaKategorija.push(value);
                    }
                }, this);
            },
            odabirKolaca : function (kolac) {
                this.$store.state.kolac = kolac;
                this.$router.replace({name: 'recept'})
            },
            odjava : function () {
                this.$store.state.korisnik = '';
                this.$router.replace({ name: 'home'});
            }
        },

    }
</script>

<style scoped>
    #Izbornik{
        background-image: linear-gradient(white, #deeff5);
        margin: 4% auto;
        height: auto;
        min-height: 550px;
        width: 75%;
        border-radius: 8px;
        transition: .5s ease;
        box-shadow: 0 6px 5px 1px #2c3e50;
    }
    .sekcije-kategorije{
        padding-top: 10%;
    }
    .prikaz{
        padding: 1.5%;
        background-color: #d4ebf2;
        width: 80%;
        margin: 5% auto;
        border-radius: 8px;
    }
    .prikaz ul li{
        cursor: pointer;
    }
    .item{
        display: inline-block;
        margin-right: 2%;
    }

</style>