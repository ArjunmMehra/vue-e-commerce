<template>
<v-container fluid grid-list-md>
  <v-layout wrap>
    <v-flex
        v-for="(subcategory,index) in categories.subcategoriesgeneric"
        :key=index>
      <v-hover>
      <v-card slot-scope="{ hover }"
        :class="`elevation-${hover ? 24 : 2}`" max-height="100%">
        <v-img max-height="480px" contain
          :src="subcategory.src"
        ></v-img>
        <v-divider light></v-divider>
              <v-card-actions class="pa-3">
               <div class="title font-weight-bold" > {{ subcategory.name }}</div>
                <v-spacer></v-spacer>
                <div>
              <v-btn color="#66181f" dark large>Shop Now</v-btn>
      </div>
        </v-card-actions>
      </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import config from '../../config'
export default {
    data(){
      return {
       categories:[]
      }
    },
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
