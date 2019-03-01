<template>
  <v-layout style="height: unset;" align-center justify-center wrap class="pb-3">
    <v-dialog v-model="dialog.status" persistent max-width="400">
      <v-card>
        <v-icon class="pa-3" :color="dialog.color" style="font-size:80px;margin-left:35%;">
          {{ dialog.icon }}
        </v-icon>
        <v-btn icon flat class="right" @click="dialog.status = false">
          <v-icon color="black">
            mdi-close
          </v-icon>
        </v-btn>
        <v-card-text class="headline text-xs-center">
          {{ dialog.content }}
        </v-card-text>
        <v-card-actions>
          <v-layout justify-space-around>
            <v-btn color="green darken-1" flat @click="$store.commit('default/index', 'Home')">
              BACK TO HOME?
            </v-btn>
            <v-btn
              v-if="dialog.color !== 'error'"
              color="green darken-1"
              flat
              @click="$router.push('/profile')"
            >
              PROCEED TO PROFILE?
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-flex class="primary white--text" xs12 sm6>
      <v-card dark class="elevation-12" :img="require('~/assets/beautiful.jpg')">
        <v-toolbar color="primary" style="border-top-left-radius: 50px; border-bottom-right-radius: 50px;">
          <v-toolbar-title class="Salsa white--text headline">
            CONTACT FORM
          </v-toolbar-title>
        </v-toolbar>
        <div style="background: rgba(0,0,0,0.3)">
          <v-card-text>
            <v-form ref="form" class="pa-4">
              <v-layout row justify-space-around>
                <v-flex>
                  <v-text-field
                    id="email"
                    v-model="user.email"
                    class="Lato"
                    color="primary"
                    placeholder="Email"
                    prepend-icon="mdi-email"
                    solo-inverted
                  />
                </v-flex>
              </v-layout>
              <v-layout wrap justify-space-around>
                <v-flex>
                  <v-textarea
                    v-model="user.password"
                    solo-inverted
                    color="primary"
                    no-resize
                    counter="400"
                    name="feedback"
                    rows="10"
                    :rules="[checkLength]"
                    label="Tell us about your experience"
                    prepend-icon="mdi-chat"
                    class="Lato"
                    placeholder="Message"
                  />
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn class="Lato" color="primary" @click="submit">
              send
            </v-btn>
            <!-- <v-btn color="primary" @click="recover">recover password</v-btn> -->
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import axios from '~/plugins/axios'
// import io from 'socket.io-client'
export default {
  name: 'Login',
  data() {
    return {
      contactText: '',
      dialog: {
        status: false,
        color: 'error',
        icon: 'mdi-account-alert',
        content: ''
      },
      alert: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {},
  mounted() {
    // this.navigate()
    setTimeout(() => {
      this.alert = true
    }, 500)
  },
  methods: {
    checkLength: function() {
      if (this.contactText.length > 400) {
        return 'Maximum feedback length exceeded!'
      }
    }
    //   navigate() {
    //     document.getElementById('email').addEventListener('keypress', e => {
    //       if (e.key === 'Enter') {
    //         document.getElementById('password').focus()
    //       }
    //     })
    //     document.getElementById('password').addEventListener('keypress', e => {
    //       if (e.key === 'Enter') {
    //         if (document.getElementById('email').value !== '') {
    //           document.getElementById('submit').click()
    //         } else {
    //           document.getElementById('email').focus()
    //         }
    //       }
    //     })
    //   },
    //   async submit() {
    //     const { email, password } = this.user
    //     const user = { email: email.toLowerCase(), password }
    //     await axios
    //       .post('/login', user)
    //       .then(res => {
    //         if (res.data.status === 'error') {
    //           this.dialog.content = res.data.message
    //           this.dialog.color = 'error'
    //           this.dialog.icon = 'mdi-account-alert'
    //           this.dialog.status = true
    //         } else {
    //           const data = JSON.stringify(res.data.info)
    //           this.$cookie.set('userInfo', data, { path: '/', maxAge: 14400 })
    //           this.dialog.content = res.data.message
    //           this.dialog.color = 'success'
    //           this.dialog.icon = 'mdi-account-check'
    //           this.dialog.status = true
    //           this.$store.commit('profile/userIsLogged', true)
    //           setTimeout(() => {
    //             this.user = {}
    //           }, 20)
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   },
    //   closeDialog() {
    //     this.dialog.status = false
    //     if (this.dialog.content === 'Login failed. User not found.') {
    //       this.$store.commit('default/index', 'Register')
    //     }
    //   }
  }
}
</script>

<style scoped>
</style>
