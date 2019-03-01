<template>
  <v-app>
    <v-navigation-drawer
      v-if="$route.path !== '/admin'"
      class="hidden-sm-and-down"
      :hide-overlay="true"
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
      v-if="$route.path !== '/' && $route.path !== '/admin'"
      flat
      style="background: transparent"
      :clipped-left="true"
      app
      fixed
    >
      <v-toolbar-title>
        <v-avatar tile size="40">
          <v-img src="/logo.png" />
        </v-avatar>{{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-content :class="$route.path === '/' || $route.path === '/admin' ? 'pa-0' : ''">
      <v-container :fill-height="$route.path === '/sign'" style="max-width: unset" :class="$route.path === '/' || $route.path === '/admin' ? 'pa-0 ma-0' : ''">
        <nuxt />
      </v-container>
      <v-container v-if="!loaded" style="background: rgba(255, 255, 255, 0.85); position: fixed; z-index: 3; top: 0;" class="justify-center" fill-height fluid>
        <div class="fingerprint-spinner">
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
          <div class="spinner-ring" />
        </div>
      </v-container>
    </v-content>
    <v-footer
      class="justify-center secondary mt-5"
      dark
      height="auto"
    >
      <span v-if="$route.path === '/sign'">
        &copy;{{ new Date().getFullYear() }} —
        <strong>
          {{ title }}
        </strong>
      </span>
      <v-card
        v-if="$route.path !== '/sign'"
        flat
        tile
        class="white--text text-xs-center secondary"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0 Lato font-weight-regular">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider />

        <v-card-text class="white--text">
          &copy;{{ new Date().getFullYear() }} — <strong class="Salsa">{{ title }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <feedback />
  </v-app>
</template>

<script>
import Feedback from '~/components/Feedback.vue'
// import { FingerprintSpinner } from 'epic-spinners'
export default {
  components: {
    Feedback
    // FingerprintSpinner
  },
  data() {
    return {
      loaded: false,
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
          to: '/sign',
          isHovered: false
        },
        {
          icon: 'mdi-email-variant',
          title: 'Contact Us',
          to: '/contact',
          isHovered: false
        }
      ],
      icons: ['mdi-facebook', 'mdi-google-plus', 'mdi-linkedin']
    }
  },
  mounted() {
    if (this.$route.path !== '/admin') {
      this.fix()
    }
    this.loaded = true
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
.fingerprint-spinner,
.fingerprint-spinner * {
  box-sizing: border-box;
}

.fingerprint-spinner {
  height: 64px;
  width: 64px;
  padding: 2px;
  overflow: hidden;
  position: relative;
}

.fingerprint-spinner .spinner-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #00a685;
  animation: fingerprint-spinner-animation 1500ms
    cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.fingerprint-spinner .spinner-ring:nth-child(1) {
  height: calc(60px / 9 + 0 * 60px / 9);
  width: calc(60px / 9 + 0 * 60px / 9);
  animation-delay: calc(50ms * 1);
}

.fingerprint-spinner .spinner-ring:nth-child(2) {
  height: calc(60px / 9 + 1 * 60px / 9);
  width: calc(60px / 9 + 1 * 60px / 9);
  animation-delay: calc(50ms * 2);
}

.fingerprint-spinner .spinner-ring:nth-child(3) {
  height: calc(60px / 9 + 2 * 60px / 9);
  width: calc(60px / 9 + 2 * 60px / 9);
  animation-delay: calc(50ms * 3);
}

.fingerprint-spinner .spinner-ring:nth-child(4) {
  height: calc(60px / 9 + 3 * 60px / 9);
  width: calc(60px / 9 + 3 * 60px / 9);
  animation-delay: calc(50ms * 4);
}

.fingerprint-spinner .spinner-ring:nth-child(5) {
  height: calc(60px / 9 + 4 * 60px / 9);
  width: calc(60px / 9 + 4 * 60px / 9);
  animation-delay: calc(50ms * 5);
}

.fingerprint-spinner .spinner-ring:nth-child(6) {
  height: calc(60px / 9 + 5 * 60px / 9);
  width: calc(60px / 9 + 5 * 60px / 9);
  animation-delay: calc(50ms * 6);
}

.fingerprint-spinner .spinner-ring:nth-child(7) {
  height: calc(60px / 9 + 6 * 60px / 9);
  width: calc(60px / 9 + 6 * 60px / 9);
  animation-delay: calc(50ms * 7);
}

.fingerprint-spinner .spinner-ring:nth-child(8) {
  height: calc(60px / 9 + 7 * 60px / 9);
  width: calc(60px / 9 + 7 * 60px / 9);
  animation-delay: calc(50ms * 8);
}

.fingerprint-spinner .spinner-ring:nth-child(9) {
  height: calc(60px / 9 + 8 * 60px / 9);
  width: calc(60px / 9 + 8 * 60px / 9);
  animation-delay: calc(50ms * 9);
}

@keyframes fingerprint-spinner-animation {
  100% {
    transform: rotate(360deg);
  }
}
</style>
