<template>
  <v-layout>
    <div>
      <SkeletonCard
        style="width: 400px"
        :has-text="false"
        :is-horizontal="true"
        :has-header="false"
        :has-actions="true"
      />
    </div>
  </v-layout>
</template>

<script>
import SkeletonCard from '~/components/CardSkeleton.vue'
export default {
  components: {
    SkeletonCard
  },
  mounted() {}
}
</script>

<style scoped>
</style>
