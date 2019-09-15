<template>
<div id="Novi">
    <div >
       <img src="../assets/gornja.png" style="width: 100%" alt="Naslovna slika">
    </div>
    <div class="forma">
        <b-form>
            <b-form-group id="input-group-1">
                <div class="input-1">
                    <b-form-select class="row-item" v-model="trenutni">
                        <option :value="null" disabled="true">Odaberite kategoriju</option>
                        <option v-for="k in kategorije" v-bind:value="k.id" :key="k.id"> {{ k.Naziv }}</option>
                    </b-form-select>
                </div>

                <b-form-input
                        id="input-1"
                        v-model="novi.naziv"
                        type="text"
                        required
                        placeholder="Napišite naziv kolača"
                ></b-form-input>
                <b-form-input
                        id="input-1"
                        v-model="novi.sastojci"
                        type="text"
                        required
                        placeholder="Navedite sastojke"
                ></b-form-input>
                <b-form-textarea
                        id="input-1"
                        v-model="novi.priprema"
                        type="text"
                        required
                        placeholder="Opišite pripremu"
                ></b-form-textarea>
                <b-form-group label="Ispustite fotografiju na zadano područje ili ju učitate s gumbom 'Browse'">
                    <b-form-file
                            id="input-4"
                            v-model="novi.fotografija"
                    ></b-form-file>
            </b-form-group>
            </b-form-group>
        </b-form>

    </div>
    <b-button variant="info" v-on:click="ucitajFotografiju">Ucitaj fotografiju</b-button>
    <b-button variant="success" v-on:click="onSubmit">Spremi</b-button>

</div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Novi",
        data() {
            return {
                novi: {
                    naziv: '',
                    sastojci: '',

                    priprema: '',
                    fotografija: null,
                },
                kategorije: [
                    { id: '', Naziv: '' }
                ],
                trenutni: null,

            }
        },
        created () {
            this.ucitajkategorije();
        },
        methods: {
            async ucitajkategorije () {
                await axios.get("http://127.0.0.1:5000/kategorije")
                    .then((response) => {
                        response.data.kategorije.forEach(function(values) {
                            this.kategorije = values;
                        }, this);
                    })
                    .catch((error) => {
                        alert(error);
                    })
            },

            ucitajFotografiju : function (){

                var self = this;
                var reader = new FileReader();
                var fotografija = new Blob([this.novi.fotografija]);
                reader.readAsDataURL(fotografija);
                reader.onload = function () {
                    fotografija = reader.result;
                    self.novi.fotografija = fotografija;
                };
            },

            onSubmit: function () {

                const Novi = {
                    Naziv_kolaca: this.novi.naziv,
                    sastojci: this.novi.sastojci,
                    priprema: this.novi.priprema,
                    fotografija: this.novi.fotografija,
                    korisnici: this.$store.state.korisnik.id,
                    kategorije: this.trenutni


                };
                axios.post("http://127.0.0.1:5000/kolaci", Novi)
                    .then(() => {
                        this.novi.kategorija='';
                        this.novi.naziv='';
                        this.novi.sastojci='';
                        this.novi.priprema='';
                        this.novi.fotografija = null;

                        alert("Novi kolač postavljen na stranicu!");

                    })
                    .catch((error) => {
                        alert(error);
                    })
            },

        },

    }
</script>

<style scoped>
    #Novi{
        background-color: #deeff5;
        margin: 4% auto;
        height: auto;
        min-height: 550px;
        width: 75%;
        border-radius: 8px;
        transition: .5s ease;
        box-shadow: 0 6px 5px 1px #2c3e50;
    }
    #input-group-2{
        width: 50%;

    }
    #input-1, #input-2, #input-3{
        margin-bottom: 1%;
    }

</style>