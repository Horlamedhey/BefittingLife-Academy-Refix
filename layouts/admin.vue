<template>
  <v-app :dark="mode === 'dark'">
    <admin-filter />
    <admin-drawer />
    <admin-toolbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <admin-footer v-if="$route.name !== 'Maps'" />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AdminFilter from '~/components/admin/Filter.vue'
import AdminToolbar from '~/components/admin/Toolbar.vue'
import AdminDrawer from '~/components/admin/Drawer.vue'
import AdminFooter from '~/components/admin/Footer.vue'
export default {
  name: 'Admin',
  components: {
    AdminFilter,
    AdminToolbar,
    AdminDrawer,
    AdminFooter
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('admin', ['mode'])
  }
}
</script>

<style scoped>
</style>
