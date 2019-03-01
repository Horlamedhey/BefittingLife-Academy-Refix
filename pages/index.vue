<template>
  <div>
    <v-parallax style="height: fit-content;" class="parallax" :src="require('~/assets/beautiful.jpg')">
      <v-layout
        column
        align-center
        justify-center
        class="white--text pb-5"
      >
        <img src="/logo.png" alt="Vuetify.js" height="200">
        <h1 class="karabine mb-2 display-3 text-xs-center">
          {{ title }}
        </h1>
        <div class="subheading mb-3 text-xs-center Salsa">
          Investing in MINDS
        </div>
        <v-btn
          class="primary mt-5"
          dark
          large
          href="/pre-made-themes"
        >
          SignUp for 7 days free trial
        </v-btn>
      </v-layout>
      <v-img style="position: absolute; bottom: -10px; left: 0; right: 0;" src="/curve.png" />
    </v-parallax>
    <v-layout
      column
      wrap
      class="mt-5"
      align-center
    >
      <v-flex xs12 sm4 class="mt-5">
        <div class="text-xs-center">
          <h2 class="display-1 Salsa">
            The best place to start growing
          </h2>
          <span class="subheading Salsa">
            Empowering the MIND
          </span>
        </div>
      </v-flex>
      <v-flex class="mb-5" xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center justify-center>
            <v-flex v-for="(feature, i) in features" :key="i" xs12 sm6 md4>
              <v-card class="elevation-4 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large color="primary">
                    {{ feature.icon }}
                  </v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center Salsa">
                    {{ feature.title }}
                  </div>
                </v-card-title>
                <v-card-text class="Lato font-weight-regular text-xs-justify">
                  {{ feature.desc }}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout>
        <v-flex class="mt-5 mb-5" xs12>
          <v-layout
            v-for="(about, i) in abouts"
            :key="i"
            class="mb-5"
            row
            wrap
            align-center
            justify-space-around
          >
            <v-flex class="hidden-xs-only" v-if="i === 1 || i === 3" xs12 sm5>
              <v-img :src="about.img" />
            </v-flex>
            <v-flex class="hidden-sm-and-up" xs12 sm5>
              <v-img :src="about.img" />
            </v-flex>
            <v-flex xs12 sm5>
              <v-card class="transparent" elevation="0">
                <v-card-title class="headline Salsa">
                  {{ about.title }}
                </v-card-title>
                <v-card-text class="Lato font-weight-regular text-xs-justify">
                  {{ about.content }}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="hidden-xs-only" v-if="i === 0 || i === 2" xs12 sm5>
              <v-img :src="about.img" />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout column wrap class="mt-5 pt-5 primary white--text">
        <v-flex xs12>
          <h2 class="display-1 text-xs-center Salsa">
            Packages
          </h2>
        </v-flex>
        <v-flex class="mt-2">
          <v-container class="text-xs-center headline Lato-300">
            Earn more discounts for more than one user's subscription.
          </v-container>
        </v-flex>
        <v-flex class="mt-5" xs12>
          <v-container grid-list-xs>
            <v-layout row justify-center wrap>
              <v-flex
                v-for="(plan, i) in plans"
                :key="i"
                :style="i !== 0? 'margin-left: -4%' : ''"
                :class="i !== 0 ? `mt-${i+3}` : ''"
                xs12
                sm4
              >
                <v-card class="pb-3" elevation="14">
                  <v-card-title class="pb-0" style="justify-content: center;">
                    <h3>
                      {{ plan.title }}
                    </h3>
                  </v-card-title>
                  <v-card-text class="grey--text text-xs-center pt-1">
                    Unlimited access for {{ plan.desc }}
                  </v-card-text>
                  <v-card-text style="word-spacing: -12px;" class="display-3 font-weight-bold text-xs-center primary--text">
                    <sup>$</sup>
                    {{ plan.price }}
                    <span class="grey--text body-2 font-weight-bold">
                      /user
                    </span>
                  </v-card-text>
                  <v-card-text class="pb-0 text-xs-center subheading">
                    300+ Audio Lessons
                  </v-card-text>
                  <v-card-text class="pb-0 pt-2 text-xs-center subheading">
                    800+ Video Lessons
                  </v-card-text>
                  <v-card-text class="pt-2 text-xs-center subheading">
                    Online Support
                  </v-card-text>
                  <v-card-actions style="justify-content: center" class="mt-5">
                    <v-btn outline round color="primary" class="Salsa">
                      CHOOSE PACKAGE
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout column wrap class="mt-5 pt-5 justify-center">
        <h2 class="mb-5 display-1 text-xs-center Salsa">
          Feedbacks
        </h2>
        <v-layout style="margin-top: 70px; height: 380px;" class="justify-center">
          <v-flex id="feedback" xs12 sm6 style="transition: 0.5s;">
            <v-card class="grey lighten-3" style="box-shadow:  1px 1px 5px rgba(0, 0, 0, 0.3) inset, -1px -1px 5px rgba(0, 0, 0, 0.3) inset;">
              <v-layout class="justify-center">
                <v-avatar size="200">
                  <v-img
                    style="position: absolute; top: -40%; box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5),
                        -1px -1px 5px rgba(0, 0, 0, 0.5);"
                    :src="feedbacks[activeFeedback].img"
                  />
                </v-avatar>
              </v-layout>
              <v-card-text class="Lato" style="margin-top: -50px">
                {{ feedbacks[activeFeedback].text }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
      <!--<v-layout column wrap class="mt-5 pt-5">-->
      <!--<v-flex xs12>-->
      <!--<h2 class="display-1 text-xs-center Salsa">-->
      <!--Blog-->
      <!--</h2>-->
      <!--</v-flex>-->
      <!--<v-flex class="mb-5" xs12>-->
      <!--<v-container grid-list-xl>-->
      <!--<v-layout row wrap align-center justify-center>-->
      <!--<v-flex v-for="(tutor, i) in tutors" :key="i" xs12 md4>-->
      <!--<v-card class="elevation-4 transparent" hover @mouseover="showDetails(i)" @mouseleave="hideDetails(i)">-->
      <!--<v-card-actions class="justify-center">-->
      <!--<v-btn icon flat color="primary">-->
      <!--<v-icon>mdi-instagram</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon flat color="primary">-->
      <!--<v-icon>mdi-twitter</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn :href="tutor.facebook" icon flat color="primary">-->
      <!--<v-icon>mdi-facebook</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon flat color="primary">-->
      <!--<v-icon>mdi-linkedin</v-icon>-->
      <!--</v-btn>-->
      <!--</v-card-actions>-->
      <!--<v-img :src="tutor.img">-->
      <!--<v-card-title-->
      <!--:id="`tutor_${i}`"-->
      <!--style="background: rgba(0, 0, 0, 0.5); position: absolute; bottom: -100%; left: 0; right: 0;-->
      <!--justify-content: center; transition: 0.5s"-->
      <!--class="me white&#45;&#45;text title text-xs-center"-->
      <!--&gt;-->
      <!--{{ tutor.name }}-->
      <!--<v-card-text class="subheading">-->
      <!--{{ tutor.skill }}-->
      <!--</v-card-text>-->
      <!--</v-card-title>-->
      <!--</v-img>-->
      <!--</v-card>-->
      <!--</v-flex>-->
      <!--</v-layout>-->
      <!--</v-container>-->
      <!--</v-flex>-->
      <!--</v-layout>-->
    </v-container>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data: function() {
    return {
      title: 'BefittingLife Academy',
      features: [
        {
          title: 'Affordability',
          icon: 'mdi-currency-usd',
          desc:
            'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.' +
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' +
            'Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
        },
        {
          title: 'Productivity',
          icon: 'mdi-chart-line',
          desc:
            'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.' +
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' +
            'Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
        },
        {
          title: 'Accessibility',
          icon: 'mdi-web',
          desc:
            'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.' +
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' +
            'Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'
        }
      ],
      abouts: [
        {
          title: 'Who we are?',
          content:
            'We are a team of professionals with convictions and goals that are transformational. Our ' +
            'thrust hinges on the belief that majority of people never invest on themselves. We all ' +
            'need to invest in our most important possession; which is our MINDS. This singular fact ' +
            'culminated in the birth of BefittingLife.com.\n' +
            '\n' +
            'We are poised to providing the best skills set developments possible, in almost all spheres ' +
            'of life; from the best experts in the world.\n' +
            '\n' +
            'Words of Wisdom:\n' +
            '\n' +
            '"Formal education would make you a living but self-education will make you a fortune" - Jim Rohn\n' +
            '\n' +
            '“Your life does not get better by chance, it gets better by change” – Jim Rohn\n' +
            '\n' +
            '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela\n' +
            '\n' +
            '"It is the heart that makes a man rich.  He is rich according to what he is, not according to what ' +
            'he has......" - Henry Ward Beecher',
          img: require('~/assets/about.jpg')
        },
        {
          title: 'Our vision',
          content:
            'To be the leading provider of integrated skills development platform in the whole world. ' +
            'In order to attain this, we will direct our attention to emerging and trending skill sets, as well ' +
            'as, bringing alive any old but relevant skills; in the most relevant and modern ways.\n' +
            '\n' +
            'Our Vision is derived from this wonderful quote:\n' +
            '\n' +
            '"A man with a good coat upon his back meets with a better reception than he who has a bad one."- ' +
            'Samuel Johnson',
          img: require('~/assets/vision.jpg')
        },
        {
          title: 'Our mission',
          content:
            'We are daily driven and motivated by our dreams and inner convictions that no one is ever too ' +
            'old to learn something from someone, especially if that someone is an expert in the field. It is ' +
            'our desire to help people experience the level of success they never dreamed is possible in their ' +
            'lives. We are here to help you achieve successes in your professions, careers, businesses, or any ' +
            'callings that you might find yourself in.\n' +
            '\n' +
            'Words of Wisdom:\n' +
            '\n' +
            '"Whatever the mind of man can conceive and believe it, he can achieve. Thoughts are things! And ' +
            'powerful things at that, when mixed with definiteness of purpose, and burning desire, can be ' +
            'translated into riches." - Napoleon Hill',
          img: require('~/assets/mission.jpg')
        },
        {
          title: 'Our role',
          content:
            'Our basic role at BefittingLife.com is to ensure that all barriers militating against self-education' +
            ' are removed. Barriers such as geographical boundaries, the need for locations or learning premises, ' +
            'inability to have 24/7 interactions with learning platforms, time delay in progress reports and ' +
            'feedbacks, et cetera et cetera. All these barriers are virtually removed by the opportunities ' +
            'presented by our eLearning platform.\n\nYou Deserve a Befitting Life... Attain ' +
            'Your Goals, Achieve and Exceed Your Dreams... It Is Your Right to Transform Your Life Today!\n\n' +
            'Word of Wisdom:\n\n"Wisdom is knowing the right path to take, Integrity is taking it" M. H. McKee',
          img: require('~/assets/role.jpg')
        }
      ],
      plans: [
        {
          title: 'Monthly',
          desc: 'one month',
          price: '10'
        },
        {
          title: 'Quaterly',
          desc: 'three months',
          price: '26'
        },
        {
          title: 'Yearly',
          desc: 'one year',
          price: '96'
        }
      ],
      activeFeedback: 0,
      feedbacks: [
        {
          img: require('~/assets/beautiful.jpg'),
          text:
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam magnam similique? At magni ' +
            'temporibus, voluptate?'
        },
        {
          img: require('~/assets/connection.jpg'),
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam magnam similique? At magni ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'temporibus, voluptate?'
        },
        {
          img: require('~/assets/mission.jpg'),
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam magnam similique? At magni ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'nisi officiis voluptate! Beatae illum non velit? Aspernatur dolor hic modi ratione sit sunt ' +
            'temporibus, voluptate?'
        }
      ]
    }
  },
  mounted() {
    setInterval(() => {
      document.getElementById('feedback').style.opacity = '0'
      setTimeout(() => {
        if (this.activeFeedback === this.feedbacks.length - 1) {
          this.activeFeedback = 0
        } else {
          this.activeFeedback += 1
        }
        document.getElementById('feedback').style.opacity = '1'
      }, 700)
    }, 5000)
  },
  methods: {
    // showDetails: function(i) {
    //   document.getElementById(`tutor_${i}`).style.bottom = '0'
    // },
    // hideDetails: function(i) {
    //   document.getElementById(`tutor_${i}`).style.bottom = '-100%'
    // }
  }
}
</script>

<style scoped>
@media (max-width: 425px) {
  .parallax {
    padding-top: 30%;
  }
}
@media (max-width: 768px) {
  .parallax {
    padding-top: 23%;
  }
}
@media (min-width: 769px) {
  .parallax {
    padding-top: 15%;
  }
}
@media (min-width: 2000px) {
  .parallax {
    padding-top: 25%;
  }
}
.parallax:after {
  content: '';
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.me:hover {
  bottom: 0;
}
.scaleUp {
  transform: scale(1);
}
</style>
