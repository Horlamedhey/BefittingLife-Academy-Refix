<template>
  <div>
    <v-parallax class="parallax" :src="require('~/assets/connection.jpg')">
      <!--<v-toolbar-->
      <!--flat-->
      <!--style="background: transparent"-->
      <!--:clipped-left="true"-->
      <!--app-->
      <!--fixed-->
      <!--&gt;-->
      <!--<v-toolbar-title>-->
      <!--<v-avatar tile size="40">-->
      <!--<v-img src="/logo.png" />-->
      <!--</v-avatar>-->
      <!--{{ title }}-->
      <!--</v-toolbar-title>-->
      <!--</v-toolbar>-->
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <img src="/logo.png" alt="Vuetify.js" height="200">
        <h1 class="blue-grey--text darken-4 mb-2 display-1 text-xs-center">
          {{ title }}
        </h1>
        <div class="subheading mb-3 text-xs-center">
          Investing in MINDS
        </div>
        <v-btn
          class="primary mt-5"
          dark
          large
          href="/pre-made-themes"
        >
          SignUp for 7 days free trial
        </v-btn>
      </v-layout>
    </v-parallax>
    <v-img style="top: -50px;" src="/curve.png" />
    <v-layout
      column
      wrap
      class="mt-5"
      align-center
    >
      <v-flex xs12 sm4 class="mt-3">
        <div class="text-xs-center">
          <h2 class="headline">
            The best place to start growing
          </h2>
          <span class="subheading">
            Empowering the MIND
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-4 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-currency-usd
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">
                    Affordability
                  </div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-4 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-chart-line
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">
                    Productivity
                  </div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-4 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">
                    mdi-web
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">
                    Accesibility
                  </div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data() {
    return {
      title: 'BefittingLife Academy'
    }
  }
}
</script>

<style scoped>
.parallax:after {
  content: '';
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}
</style>
