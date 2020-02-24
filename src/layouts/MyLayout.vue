<template>
  <q-layout view="lHh LpR fFf">
    <q-header reveal elevated class="flex flex-center column bg-primary text-white">
        <q-toolbar class="gt-xs column justify-center items-center content-center boid-font-xlg">
          boid          
        </q-toolbar>
        <q-toolbar class="xs row justify-right content-right">
          <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="primary" icon="img:statics/icons/boid-bird.svg" label="MENU">
          <learn-links class="bg-primary text-white" color="primary"/>
          <specials-links class="bg-primary text-white" color="primary"/>
                </q-btn-dropdown>
          </q-toolbar>
    </q-header>
     <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="250" 
        :breakpoint="599"    
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
          <q-list padding>
            
          <learn-links/>
          <specials-links/>
          </q-list>
          </q-scroll-area>
             </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
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
  </q-layout>
</template>
<script>
export default {
  name: 'Links',
  components: {
    'social-links': () => import('../components/SocialLinks'),
    'main-links': () => import('../components/MainLinks'),
    'specials-links': () => import('../components/LinksSpecials'),
    'learn-links': () => import('../components/LearnLinks'),
       },
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>