import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  showMobileMenu: false,
  showAdoptDropdown: false,
  logo: null
})

export const mutations = {
  toggle(state) {
    state.showMobileMenu = !state.showMobileMenu;
  },
  show (state) {
    state.showAdoptDropdown = true;
  },
  hide (state) {
    state.showAdoptDropdown = false;
  },
  SET_LOGO(state, logo){
    state.logo = logo
  }
}

export const getters = {
  getLogo: (state) => state.logo
}

export const actions = {
  async nuxtServerInit({ commit }) {
  const queryLogo = groq`*[_type == 'landingBannerAndLogo']{imageFile}`
  const logo = await this.$sanity.fetch(queryLogo)
  commit('SET_LOGO', logo[0].imageFile)
  }
}