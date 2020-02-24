<template>
  <q-layout view="lHh LpR fFf">
    <q-header reveal elevated class="flex flex-center column bg-primary text-white">
        <q-toolbar
        class="column justify-center items-center content-center boid-font-lg">
          boid
        </q-toolbar>
    </q-header>
     <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="250" 
        :breakpoint="767"    
        content-class="bg-primary text-white boid-font-md"
      >
                  <q-scroll-area class="fit">
          <q-btn
           style="overflow: auto;"
           color="primary"
           icon="img:statics/icons/boid-bird.svg"
           size="20px"
           clickable
           @click="$router.push('./')"
           v-ripple>
         </q-btn>
  
          <side-menu-links/>
          </q-scroll-area>
             </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <mobilefooter>
    <q-footer reveal elevated class="flex flex-center column bg-grey-8 boid-font-footer">
      <q-toolbar class="row justify-start items-center content-center">
        <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="grey-8" label="SOCIAL">
          <social-links/>
        </q-btn-dropdown>
        <q-btn-dropdown style="overflow: auto;" color="grey-8" label="LINKS">
          <main-links/>
        </q-btn-dropdown>
      </q-toolbar>
    </q-footer>
    </mobilefooter>
  </q-layout>
</template>
<script>
export default {
  name: 'Links',
  components: {
    'social-links': () => import('../components/SocialLinks'),
    'main-links': () => import('../components/MainLinks'),
    'side-menu-links': () => import('../components/SideMenuLinks'),
    'specials-links': () => import('../components/SpecialsLinks'),
       },
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>