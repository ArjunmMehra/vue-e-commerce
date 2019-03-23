<template>
    <v-layout row>
       <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            height="200px"
            width="190"
            dark
        >
      <v-toolbar flat color="#66181f">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="require('../../static/images/logo/logored.jpeg')">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Categories</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
        <v-list class="pt-0" dense>
        <v-divider></v-divider>
          <v-list-tile
            v-for="(category,index) in categories"
            :key=index
            @click="setCategory(category.name)"
          >
            <v-list-tile-action>
              <v-icon>grade</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ category.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
      </v-navigation-drawer>
    <v-toolbar app dark color="#66181f">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
      <router-link to="/">
         <v-img width="100" height="50" contain :src="require('../../static/images/logo/logored.jpeg')">
        </v-img>
      </router-link>
       <v-spacer></v-spacer>
      <v-text-field flat color="white" class="mt-2 hidden-sm-and-down" placeholder="Search for products and brands" append-icon="search" clearable></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#"
        target="_blank"
      >
        ${{cartvalue}}&nbsp;
             <v-badge overlap color="#77d86a" inline>
               <span slot="badge">6</span>
              <v-icon class="mr-2">shopping_cart</v-icon>
               </v-badge>
      </v-btn>
      <v-btn
        flat
        href="#"
        target="_blank"
      >
      Login&nbsp;
      <v-icon dark>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </v-layout>
</template>

<script>
//import CategoryPanel from '../components/Category/CategoryPanel'
//@todo make mixin for setcategory method
import config from "../config"
export default {
  data() {
    return {
      cartvalue: 100,
      drawer:null,
      categories: config.categories
    };
  },
  components: {
    //CategoryPanel
  },
  methods:{
    setCategory(category){
      this.$store.commit('setCategory',category)
      this.drawer= !this.drawer
    }
  }
};
</script>

<style>
</style>