<template>
  <v-toolbar flat app>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="setDrawer(true)" />
    <v-toolbar-title class="Lato">
      {{ active }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      "You're now a friend with Andrew",
      'Another Notification',
      'Another One'
    ],
    title: null
  }),
  computed: {
    ...mapState('admin', ['active'])
  },
  methods: {
    ...mapMutations('admin', ['setDrawer'])
  }
}
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
