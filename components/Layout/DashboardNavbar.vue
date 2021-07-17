<template>
  <base-nav
    v-model="showMenu"
    class="navbar-absolute top-navbar"
    type="white"
    :transparent="true"
  >
    <div slot="brand" class="navbar-wrapper">
      <div
        class="navbar-toggle d-inline"
        :class="{ toggled: $sidebar.showSidebar }"
      >
        <button type="button" class="navbar-toggler" @click="toggleSidebar">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <a class="navbar-brand ml-xl-3 ml-5" href="#pablo">{{ routeName }}</a>
    </div>

    <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
      <base-dropdown
        tag="li"
        :menu-on-right="!$rtl.isRTL"
        title-tag="a"
        class="nav-item"
        title-classes="nav-link"
        menu-classes="dropdown-navbar"
      >
        <template slot="title">
          <div class="photo"><img src="img/mike.jpg" /></div>
          <b class="caret d-none d-lg-block d-xl-block"></b>
          <p class="d-lg-none">Log out</p>
        </template>
        <li class="nav-link">
          <a href="settings" class="nav-item dropdown-item">Settings</a>
        </li>
        <div class="dropdown-divider"></div>
        <li class="nav-link">
          <a href="#" class="nav-item dropdown-item">Log out</a>
        </li>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
// import { CollapseTransition } from 'vue2-transitions'
import BaseNav from '@/components/Navbar/BaseNav'

import { ReplaceAll, CapitalizeFirstLetter } from '@/util/formatter'

export default {
  components: {
    // CollapseTransition,
    BaseNav,
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
    }
  },
  computed: {
    routeName() {
      const { path } = this.$route
      const parts = path.split('/')
      if (parts === ',') {
        return 'Dashboard'
      }
      return parts
        .map((p) => ReplaceAll(CapitalizeFirstLetter(p), '-', ' '))
        .join(' ')
    },
    isRTL() {
      return this.$rtl.isRTL
    },
  },
  methods: {
    closeDropDown() {
      this.activeNotifications = false
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style scoped>
.top-navbar {
  top: 0px;
}
</style>
