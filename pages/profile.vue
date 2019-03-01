<template>
  <v-layout id="core-view">
    <v-fade-transition mode="out-in">
      <keep-alive>
        <component :is="Dashboard" />
      </keep-alive>
    </v-fade-transition>
  </v-layout>
</template>

<script>
import Dashboard from '~/components/admin/views/Dashboard'
export default {
  layout: 'admin',
  components: {
    Dashboard
  },
  metaInfo() {
    return {
      title: 'Vuetify Material Dashboard by CreativeTim'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
