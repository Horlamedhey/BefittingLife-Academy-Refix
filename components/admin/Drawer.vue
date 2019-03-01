<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    app
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
        style="background: rgba(27,27,27,.74);"
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title white--text Lato">
            Vuetify MD
          </v-list-tile-title>
        </v-list-tile>
        <v-divider class="ml-3 mr-3 mb-3 grey" />
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          avatar
          style="border-radius: 5px; color: #eeeeee;"
          :class="['v-list-item', 'Lato', link.text === active ? color : '', 'ml-3', 'mr-3']"
        >
          <v-list-tile-action>
            <v-icon style="color: #dddddd;">
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    logo: '/logo.png',
    links: [
      {
        to: 'dashboard',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      },
      {
        to: 'user-profile',
        icon: 'mdi-account',
        text: 'User Profile'
      },
      {
        to: 'table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List'
      },
      {
        to: 'typography',
        icon: 'mdi-format-font',
        text: 'Typography'
      },
      {
        to: 'icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons'
      },
      {
        to: 'maps',
        icon: 'mdi-map-marker',
        text: 'Maps'
      },
      {
        to: 'notifications',
        icon: 'mdi-bell',
        text: 'Notifications'
      }
    ]
  }),
  computed: {
    ...mapState('admin', ['image', 'color', 'active']),
    drawer: {
      get() {
        return this.$store.state.admin.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    },
    items() {
      return this.$t('Layout.View.items')
    }
  },
  mounted() {},
  methods: {
    ...mapMutations('admin', ['setDrawer'])
  }
}
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
