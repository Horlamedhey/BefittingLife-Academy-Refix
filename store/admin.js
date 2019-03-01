export const state = () => ({
  drawer: null,
  active: 'Dashboard',
  color: 'primary',
  mode: 'light',
  image:
    'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg'
})

export const mutations = {
  setColor(state, color) {
    state.color = color
  },
  setImage(state, image) {
    state.image = image
  },
  setMode(state, val) {
    state.mode = val
  },
  // toggleDrawer(state) {
  //   state.drawer = !state.drawer
  // },
  setDrawer(state, val) {
    state.drawer = val
  }
}
