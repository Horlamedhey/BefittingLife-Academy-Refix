<template>
  <v-layout>
    <!--<v-flex>-->
    <!--<SkeletonCard-->
    <!--style="width: 400px"-->
    <!--:has-text="false"-->
    <!--:is-horizontal="true"-->
    <!--:has-header="false"-->
    <!--:has-actions="true"-->
    <!--/>-->
    <!--</v-flex>-->
    <v-flex>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex v-for="(blog, i) in blogs" :key="i" xs12 md4>
            <v-card class="elevation-4 transparent" hover @mouseover="showDetails(i)" @mouseleave="hideDetails(i)">
              <v-card-actions class="justify-center">
                <v-badge overlap class="mr-2">
                  <span slot="badge">0</span>
                  <v-icon size="32">
                    mdi-eye
                  </v-icon>
                </v-badge>
                <v-badge overlap class="ml-2">
                  <span slot="badge">0</span>
                  <v-icon size="32">
                    mdi-message-reply-text
                  </v-icon>
                </v-badge>
                <!--<v-icon>mdi-instagram</v-icon>-->
                <!--</v-btn>-->
                <!--<v-btn icon flat color="primary">-->
                <!--<v-icon>mdi-twitter</v-icon>-->
                <!--</v-btn>-->
                <!--<v-btn :href="blog.facebook" icon flat color="primary">-->
                <!--<v-icon>mdi-facebook</v-icon>-->
                <!--</v-btn>-->
                <!--<v-btn icon flat color="primary">-->
                <!--<v-icon>mdi-linkedin</v-icon>-->
                <!--</v-btn>-->
              </v-card-actions>
              <v-img style="max-height: 150px" :src="blog.img">
                <v-card-title
                  :id="`blog_${i}`"
                  style="background: rgba(0, 0, 0, 0.5); position: absolute; bottom: -100%; left: 0; right: 0;
    justify-content: center; transition: 0.5s"
                  class="me white--text title text-xs-center Lato"
                >
                  {{ blog.title }}
                </v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn class="Lato">
                  Watch
                </v-btn>
                <v-btn class="Lato">
                  Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
// import SkeletonCard from '~/components/CardSkeleton.vue'
export default {
  components: {
    // SkeletonCard
  },
  data() {
    return {
      blogs: [
        {
          img: require('~/assets/mission.jpg'),
          title: 'Judgement Day',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam magnam similique? At magni ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'temporibus, voluptate?'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    showDetails: function(i) {
      document.getElementById(`blog_${i}`).style.bottom = '0'
    },
    hideDetails: function(i) {
      document.getElementById(`blog_${i}`).style.bottom = '-100%'
    }
  }
}
</script>

<style scoped>
</style>
