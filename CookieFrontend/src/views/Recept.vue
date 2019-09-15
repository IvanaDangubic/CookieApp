<template>
    <div id="recept">
        <div class="img">
            <img src="../assets/gornja.png" style="width: 100%" alt="Naslovna slika">
        </div>
        <div class="detalji">
            <b-img left rounded v-bind="props" :src="kolac.fotografija" :alt="kolac.Naziv_kolaca"></b-img>
            <h1>{{kolac.Naziv_kolaca}}</h1>
            <div class="detalj-dijete">
                <h3><i>Sastojci:</i></h3>
                <p>{{kolac.sastojci}}</p>
            </div>
            <div class="detalj-dijete">
                <h3><i>Priprema:</i></h3>
                <p>{{kolac.priprema}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recept",
        data () {
          return {
              kolac: this.$store.state.kolac,
              props: {width: 400, height: 350, class: 'kolac-foto'}
          }
        },

    }
</script>

<style scoped>
    #recept{
        background-color: #deeff5;
        margin: 4% auto;
        height: auto;
        min-height: 550px;
        width: 75%;
        border-radius: 8px;
        transition: .5s ease;
        box-shadow: 0 6px 5px 1px #2c3e50;
    }
    .detalji{
        padding: 15px;
        overflow: hidden;
    }
    .detalj-dijete{
        height: auto;
        width: 65%;
        float: right;
        background-color: #d4ebf2;
        padding: 4% 1.8% 1.8% 1.8%;
        margin: 1.8%;
        position: relative;
        display: block;
        transition: .5s ease;
    }
    .kolac-foto{
        transition: .5s ease;
    }
    .detalj-dijete:hover, .kolac-foto:hover{
        box-shadow: 0 4px 4px 1px #2c3e50;
    }
    .detalj-dijete h3{
        position: absolute;
        top: 0;
    }
</style>