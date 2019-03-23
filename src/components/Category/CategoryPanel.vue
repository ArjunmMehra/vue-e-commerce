<template>
    <panel  class="ml-4 mr-4 mt-2">
        <v-menu 
          v-for='category in categories' 
          :key="category.id" 
          class="ml-8" 
          open-on-hover 
          bottom 
          offset-y
          >
          <v-btn 
            flat
            active-class="btn-active" 
            color="#545454" 
            slot="activator"
            @click="setCategory(category.name)"
          >
            {{category.name}}
          </v-btn>
            <!-- <v-list>
              <v-list-tile
                v-for="(subcategory, index) in category.subcategoriesspecific"
                :key="index"
                >
              <v-list-tile-title>
                {{ subcategory.name }}
              </v-list-tile-title>
              </v-list-tile>
           </v-list> -->
        </v-menu>
      </panel>
</template>

<script>
import config from "../../config"

export default {
  data() {
    return {
      categories: config.categories
    };
  },
  methods:{
    setCategory(category){
      this.$store.commit('setCategory',category)
    }
  }
};
</script>

<style>
.btn-active{
  background-color:black !important;
  color: white !important;
}
</style>
