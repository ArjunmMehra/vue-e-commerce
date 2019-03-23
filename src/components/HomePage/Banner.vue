<template>
  <v-container fluid>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
         <v-carousel  hide-delimiters max>
            <v-carousel-item
              v-for="(item,i) in categories.bannerItems"
              :key="i"
              :src="item.src"
    ></v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from '../../config'
  export default {
    data: () => ({
        categories: []
    }),
    computed:{
      selectedCategory(){
        return this.$store.state.selectedCategory
      }
    },
    watch:{
      selectedCategory:{
        immediate:true,
        handler(value){
         this.categories= config.categories.find((category)=>(category.name===value))
        }
    }
   }
  }
</script>

<style>

</style>
