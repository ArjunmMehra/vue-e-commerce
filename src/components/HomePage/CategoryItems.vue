<template>
  <v-container fluid>
    <v-layout wrap
      text-xs-center
    >
      <v-flex>
        <carousel-3d :controls-visible="true" :autoplay="true" :disable3d="false" :space="365" :autoplay-timeout="2000">
            <slide :index=index v-for="(subcat, index) in categories.subcategoriesspecific"
                :key=index
            >
        <figure>
          <v-img  contain aspect-ratio="1.5"
            :src="subcat.src"
        ></v-img>
        <figcaption class="mt-2">
          {{subcat.name}}
          <v-spacer></v-spacer>
          <v-btn color="#66181f" dark small>Shop Now</v-btn>
        </figcaption>
        </figure>
            </slide>
        </carousel-3d>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from '../../config'
import { Carousel3d, Slide} from 'vue-carousel-3d'
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
            immediate: true,
            handler(value){
                this.categories=config.categories.find((category)=>(category.name===value))
            }
        }
    },
    components:{
        Carousel3d,
        Slide 
    }
  }
</script>

<style scoped>
.carousel-3d-container figure {
  margin:1;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: white;
  color: black;
  bottom: 0;
  position: absolute;
  font-weight: bold;
  padding: 0px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}
</style>
