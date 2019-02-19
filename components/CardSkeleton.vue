<template>
  <v-card>
    <card-skeleton-header v-if="hasHeader" />
    <v-container v-if="isHorizontal" class="pa-0">
      <v-layout column>
        <v-flex>
          <card-skeleton-media v-if="hasMedia" height="150px" width="100%" />
        </v-flex>
        <v-flex class="flex--grow">
          <card-skeleton-text v-if="hasText" :lines="lines" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout v-else column>
      <v-flex>
        <card-skeleton-media v-if="hasMedia" />
      </v-flex>
      <v-flex>
        <card-skeleton-text v-if="hasText" :lines="lines" />
      </v-flex>
    </v-layout>
    <card-skeleton-actions v-if="hasActions" />
    <div class="animate" />
  </v-card>
</template>

<script>
import CardSkeletonHeader from './CardSkeletonHeader/CardSkeletonHeader.vue'
import CardSkeletonMedia from './CardSkeletonMedia/CardSkeletonMedia.vue'
import CardSkeletonText from './CardSkeletonText/CardSkeletonText.vue'
import CardSkeletonActions from './CardSkeletonActions/CardSkeletonActions.vue'

export default {
  name: '',
  components: {
    CardSkeletonHeader,
    CardSkeletonMedia,
    CardSkeletonText,
    CardSkeletonActions
  },
  props: {
    hasHeader: {
      type: Boolean,
      default: true
    },
    hasMedia: {
      type: Boolean,
      default: true
    },
    hasText: {
      type: Boolean,
      default: true
    },
    hasActions: {
      type: Boolean,
      default: true
    },
    isHorizontal: {
      type: Boolean,
      default: true
    },
    lines: {
      type: Number,
      default: 2
    }
  },
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style>
.animate {
  position: absolute;
  left: 0;
  /*right: 95%;*/
  right: 0;
  top: 0;
  bottom: 0;
}
.animate:empty {
  left: 40%;
  /*right: 0;*/
  /*width: 20%;*/
  /*background: red;*/
  position: absolute;
  content: '';
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.4) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 1s infinite;
}
/*animation: shimmer 5s infinite;*/
/*content: '';*/
/*}*/
@keyframes shimmer {
  100% {
    transform: translateX(100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.4) 60%,
      rgba(255, 255, 255, 0.2) 80%,
      rgba(255, 255, 255, 0)
    );
  }
}
.flex--grow {
  flex-grow: 99 !important;
}
</style>
