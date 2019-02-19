<template>
  <v-responsive class="card-skeleton__media" :style="{height:height,width:width}" />
</template>

<script>
export default {
  name: '',
  props: {
    height: {
      type: String,
      default: '150px'
    },
    width: {
      type: String,
      default: '150px'
    }
  }
}
</script>

<style scoped>
.card-skeleton__media {
  background-color: grey;
  height: 200px;
  width: auto;
}
</style>
