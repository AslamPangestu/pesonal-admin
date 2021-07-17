<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <side-bar
      :background-color="sidebarBackground"
      :short-title="$t('sidebar.shortTitle')"
      :title="$t('sidebar.title')"
      :sidebar-links="menus"
    />
    <!--Share plugin (for demo purposes). You can remove it if don't plan on using it-->
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>
    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar />
      <router-view name="header" />

      <div :class="{ content: !isFullScreenRoute }" @click="toggleSidebar">
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <nuxt />
        </zoom-center-transition>
      </div>
      <content-footer v-if="!isFullScreenRoute" />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import SidebarShare from '@/components/Layout/SidebarSharePlugin'

import DashboardNavbar from '@/components/Layout/DashboardNavbar'
import ContentFooter from '@/components/Layout/ContentFooter'
// import DashboardContent from '@/components/Layout/Content.vue'
// import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions'
import { ZoomCenterTransition } from 'vue2-transitions'
function hasElement(className) {
  return document.getElementsByClassName(className).length > 0
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`)
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className)
    }, 100)
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    ZoomCenterTransition,
    SidebarShare,
  },
  data() {
    return {
      sidebarBackground: 'vue', // vue|blue|orange|green|red|primary
    }
  },
  computed: {
    isFullScreenRoute() {
      return this.$route.path === '/maps/full-screen'
    },
  },
  created() {
    this.menus = [
      {
        name: this.$t('sidebar.dashboard'),
        path: '/',
        icon: 'fas fa-chart-pie',
        children: [],
      },
      {
        name: this.$t('sidebar.userProfile'),
        path: '/user-profile',
        icon: 'fas fa-user',
        children: [],
      },
      {
        name: this.$t('sidebar.experience'),
        path: '/experiences',
        icon: 'fas fa-project-diagram',
        children: [],
      },
      {
        name: this.$t('sidebar.portfolio'),
        path: '/portfolios',
        icon: 'fas fa-book',
        children: [],
      },
      {
        name: this.$t('sidebar.skill'),
        path: '/skills',
        icon: 'fas fa-tools',
        children: [],
      },
    ]
  },
  mounted() {
    this.initScrollbar()
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    initScrollbar() {
      const docClasses = document.body.classList
      const isWindows = navigator.platform.startsWith('Win')
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar('sidebar')
        initScrollbar('main-panel')
        initScrollbar('sidebar-wrapper')

        docClasses.add('perfect-scrollbar-on')
      } else {
        docClasses.add('perfect-scrollbar-off')
      }
    },
  },
}
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
