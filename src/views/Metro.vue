<template>
  <div>
    <h1>This is a Metro Listing Page</h1>
    <hr>
    <h3>Filterle <span style="color: red">{{ metroListCount}}</span> </h3>
    <input style="margin-right: 10px" type="text">
    <button>Bul</button>
    <hr>

    <div style="border: 1px dotted #2c3e50;margin-bottom: 20px" v-for="metro in metroList" :key="metro.ID">
      <h3> {{ metro.dc_Hat_Adi}}  </h3>
      <span style="color: red;"> {{ metro.dc_Sure}} </span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "Metro",
  computed:{
    ...mapState({
      metroList : state => state.metro.data
    }),
    ...mapGetters({
      metroListCount :'metro/dataCount'
    })
  },
  methods :{
    ...mapActions({
      fetchMetro : 'metro/fetchMetro'
    })
  },
  created() {
    this.fetchMetro();
  }
}
</script>

<style scoped>

</style>
