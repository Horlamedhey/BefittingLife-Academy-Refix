<template>
  <div>
    <v-btn
      style="bottom: 0;"
      color="primary"
      fixed
      right
      bottom
      @click="feedbackStatus = true"
    >
      <v-icon>
        mdi-emoticon-outline
      </v-icon>
      <span class="ml-2 text-capitalize Salsa">Submit Feedback</span>
    </v-btn>
    <v-card v-if="feedbackStatus" dark style="transition: 2s; position: fixed; bottom: 0; right: 16px; width: 300px;">
      <v-btn
        absolute
        fab
        right
        small
        style="top: -20px"
        @click="closeFeedback"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title class="Lato-300">
        Rate Your Experience with BefittingLife Academy
      </v-card-title>
      <v-divider />
      <v-card-actions class="justify-center">
        <v-rating v-model="rating">
          <v-icon
            slot="item"
            slot-scope="props"
            color="primary"
            medium
            @click="feedback(props)"
          >
            {{ props.isFilled ? 'mdi-star-circle' : 'mdi-circle-outline' }}
          </v-icon>
        </v-rating>
      </v-card-actions>
      <div v-if="feedbackEdit">
        <v-card-text>
          <v-textarea
            v-model="feedbackText"
            outline
            autofocus
            no-resize
            counter="400"
            name="feedback"
            rows="10"
            :rules="[checkLength]"
            label="Tell us about your experience"
            class="Lato"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn class="text-capitalize">
            Submit
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      feedbackStatus: false,
      feedbackEdit: false,
      feedbackText: '',
      rating: 3
    }
  },
  methods: {
    feedback: function(p) {
      p.click()
      this.feedbackEdit = true
    },
    closeFeedback: function() {
      this.feedbackStatus = false
      this.feedbackEdit = false
      this.feedbackText = ''
      this.rating = 3
    },
    checkLength: function() {
      if (this.feedbackText.length > 400) {
        return 'Maximum feedback length exceeded!'
      }
    }
  }
}
</script>
