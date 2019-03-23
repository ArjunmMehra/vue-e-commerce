<template>
  <v-footer
    dark
    height="auto"
    class="footer lighten-1 white--text text-xs-center"
  >
    <v-card
      flat
      tile
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Introduction: India’s Ultimate Online Shopping Destination NearBuyDeal’s vision is to create India’s most reliable and frictionless commerce ecosystem that creates life-changing experiences for buyers and sellers. NearBuyDeal is an online mega store for original sports Fitness and lifestyle products. It provides sports goods related information and online buying options for variety of sports goods like (Cricket, Badminton, Volleyball, Cycling , Boxing etc), Fitness Equipment like (Treadmill, Cross trainer, Steppers, Home Gyms, Dumbbell etc) and life style products for men and women like(shirt, T-shirts, Jeans, trouser, tops, shoes and accessories) NearBuyDeal is established by young and passionate team. Our prime objective is to provide true and authentic information to right product to right person. At NearBuyDeal we are working with concepts like Delivery the Original goods with high quality and optimum cost.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        &copy;2019 — <strong>NearBuy Deals</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data(){
        return {
            icons:[
            ]
        }
    }
}
</script>

<style>

.footer{
  background-color: #66181f
}

</style>