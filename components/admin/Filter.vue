<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      right
      top
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card class="grey">
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="Lato text-xs-center body-2 text-uppercase sidebar-filter">
              Sidebar Filters
            </div>

            <v-layout justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                class="ma-1"
                :color="c === color ? 'color-active ' + c: c"
                size="23"
                @click="setColor(c)"
              />
            </v-layout>
            <v-layout>
              <v-radio-group v-model="mode" class="justify-center" row>
                <v-radio label="light" value="light" />
                <v-radio label="dark" value="dark" />
              </v-radio-group>
            </v-layout>
            <v-divider class="mt-3" />
          </v-flex>
          <v-flex
            xs12
          >
            <div class="Lato text-xs-center body-2 text-uppercase sidebar-filter">
              Images
            </div>
          </v-flex>
          <v-flex
            v-for="img in images"
            :key="img"
            xs3
          >
            <v-img
              :class="[image === img ? 'image-active' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    colors: [
      'success',
      'info',
      'warning',
      'primary',
      'error',
      'accent',
      'secondary'
    ],
    images: [
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
    ]
  }),

  computed: {
    ...mapState('admin', ['image', 'color']),
    mode: {
      get() {
        return this.$store.state.admin.mode
      },
      set(val) {
        this.setMode(val)
      }
    }
  },

  methods: {
    ...mapMutations('admin', ['setImage', 'setColor', 'setMode'])
  }
}
</script>

<style lang="scss">
.v-avatar,
.v-responsive {
  cursor: pointer;
}
.color-active {
  border: 3px solid #00bcd4 !important;
}
</style>
