<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      dark
      mobile-break-point="768"
      floating
      style="width: unset; display: flex;align-items: center; background: transparent"
      :mini-variant="true"
      clipped
      fixed
      app
    >
      <v-list id="menuList" style="margin-left: -35px">
        <v-list-tile
          v-for="(item, i) in items"
          :id="'id_' + i"
          :key="i"
          :to="item.to"
          router
          exact
          @mouseenter="hoverIt(i)"
          @mouseleave="unhoverIt(i)"
        >
          <v-list-tile-content style="opacity: 1;">
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
          <v-list-tile-action
            :id="'iconcont_' + i"
            style="justify-content: center; transition: 0.5s;"
          >
            <v-icon :id="'icon_' + i" style="transition: 0.5s" :size="item.isHovered ? '36px' : '28px'">
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="$route.path !== '/'"
      flat
      style="background: transparent"
      :clipped-left="true"
      app
      fixed
    >
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer" />


      <v-toolbar-title>
        <v-avatar tile size="40">
          <v-img src="/logo.png" />
        </v-avatar>{{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-content :class="$route.path === '/' ? 'pa-0' : ''">
      <v-container style="max-width: unset" :class="$route.path === '/' ? 'pa-0 ma-0' : ''">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      miniVariant: true,
      right: true,
      title: 'BefittingLife Academy',
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/',
          isHovered: false
        },
        {
          icon: 'mdi-library',
          title: 'Courses',
          to: '/courses',
          isHovered: false
        },
        {
          icon: 'mdi-chat',
          title: 'Blog',
          to: '/blog',
          isHovered: false
        },
        {
          icon: 'mdi-account',
          title: 'SignUp/SignIn',
          to: '/blog',
          isHovered: false
        },
        {
          icon: 'mdi-email-variant',
          title: 'Contact Us',
          to: '/blog',
          isHovered: false
        }
      ]
    }
  },
  mounted() {
    this.fix()
  },
  methods: {
    fix: function() {
      for (let i = 0; i < 5; i++) {
        document.getElementById(`id_${i}`).style.width = '80px'
        document.getElementById(`id_${i}`).style.transition = '0.3s'
        document.getElementById(`id_${i}`).style.paddingRight = 'unset'
        document.getElementById(`id_${i}`).style.paddingLeft = '32px'
        document.getElementById(`id_${i}`).style.borderBottomRightRadius =
          '50px'
        document.getElementById(`id_${i}`).style.borderTopRightRadius = '50px'
        // document.getElementById(`id_${i}`).style.background = '#47494e'
        document.getElementById(`id_${i}`).style.background = '#334455'
        document.getElementById(`iconcont_${i}`).style.borderRadius = '50px'
      }
    },
    hoverIt: function(i) {
      document.getElementById('menuList').style.marginLeft = 'unset'
      document.getElementById(`id_${i}`).style.width = '200px'
      document.getElementById(`iconcont_${i}`).classList.add('sideIconsCont')
      document.getElementById(`icon_${i}`).classList.add('sideIcons')
      this.items[i].isHovered = true
    },
    unhoverIt: function(i) {
      document.getElementById('menuList').style.marginLeft = '-35px'
      document.getElementById(`id_${i}`).style.width = '80px'
      document.getElementById(`iconcont_${i}`).classList.remove('sideIconsCont')
      document.getElementById(`icon_${i}`).classList.remove('sideIcons')
      this.items[i].isHovered = false
    }
  }
}
</script>

<style scoped>
aside {
  animation: 2s;
}
.sideIcons {
  color: #ffffff !important;
}
.sideIconsCont {
  background: #00a685 !important;
}

.v-list__tile--active > .v-list__tile__action > .v-icon {
  color: inherit;
}
</style>
