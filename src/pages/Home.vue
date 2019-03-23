<template>
    <div>
      <category-panel class="hidden-sm-and-down"/>
      <Banner/>
      <panel class="ml-4 mr-4">
         <v-container class="text-md-center headline">
          STYLES & FEEDS
         </v-container >
      </panel>
      <CategoryList/>
      <panel class="ml-4 mr-4">
       <v-container class="text-md-center headline">
          SHOP BY CATEGORY
        </v-container >
      </panel>
      <CategoryItems/>
    </div>
</template>
<script>
import Banner from '../components/HomePage/Banner'
import CategoryPanel from '../components/Category/CategoryPanel'
import CategoryList from "../components/HomePage/CategoryList";
import CategoryItems from "../components/HomePage/CategoryItems";

export default {
  name: 'App',
  components: {
    Banner,
    CategoryPanel,
    CategoryList,
    CategoryItems
  },
  data () {
    return {
    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style scoped>
.my-input.v-input {
  border-radius: 100px;
}

</style>



