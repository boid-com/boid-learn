<template>
  <q-layout view="lHh LpR fFf">

    <q-header reveal elevated class="flex flex-center column bg-primary text-white">
      <q-toolbar class="row justify-center items-center content-center boid-font-lg">
      boid hub
        </q-toolbar>
      

   </q-header>

 <q-drawer
        v-model="left"
        show-if-above
        side="left"
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="250"     
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
            
<q-expansion-item
        dense-toggle
        expand-separator
        icon="school"
        label="LEARN"
        expand-icon-class="text-white"
      >
 <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl1">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel1" size="1em" color="white" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 1 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
        
        <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl2">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel2" size="1em" color="white" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 2 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
        
              <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel3" size="1em" color="white" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 3 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
<q-separator spaced />
              <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel1" size="1em" color="orange" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Advanced</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 1 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>

 <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel2" size="1em" color="orange" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Advanced</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 2 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>

  <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel3" size="1em" color="orange" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Advanced</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 3 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
<q-separator spaced />
 <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel1" size="1em" color="red" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Professional</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 1 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
      
         </q-expansion-item>

<q-expansion-item
        dense-toggle
        expand-separator
        icon="public"
        label="SPECIALS"
        expand-icon-class="text-white"
      >
<q-item clickable v-close-popup @click="onItemClick" to="./sp-earthday2020">
          <q-item-section avatar>
            <q-icon name="img:statics/earth-planet-icon.png"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">EarthDay2020</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
            <q-icon name="img:statics/coming-soon.png"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Other (Coming Soon!)</q-item-label>
          </q-item-section>
        </q-item>

</q-expansion-item>


          </q-list>
        </q-scroll-area>
    </q-drawer>

    
    <q-page-container>
      <router-view />
    </q-page-container>


<q-footer reveal elevated class="flex flex-center column bg-grey-8 boid-font-footer">
  <q-toolbar class="row justify-start items-center content-center">
      
  <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="grey-8" label="SOCIAL">
      <q-list>        
        <q-item clickable tag="a" target="_blank" href="https://community.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/handshake.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Community</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://t.me/Boidcom_official">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/telegram.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Telegram</q-item-label>
          </q-item-section>
          </q-item>
       <q-item clickable tag="a" target="_blank" href="https://discord.gg/Frm38a6">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/discord.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord</q-item-label>
          </q-item-section>
        </q-item>
       <q-item clickable tag="a" target="_blank" href="https://twitter.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/twitter.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.facebook.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/facebook.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.youtube.com/channel/UCL4I3DksM41qPKih2PbiQ7g/featured">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/youtube.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Youtube</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  </q-btn-dropdown>

  <q-btn-dropdown style="overflow: auto;" color="grey-8" label="LINKS">
      <q-list>        
         <q-item clickable tag="a" target="_blank" href="https://app.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/boid-bird.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>APP Web</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/documents.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Documentation</q-item-label>
          </q-item-section>
        </q-item>
      <q-item clickable tag="a" target="_blank" href="https://stats.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/stats.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Statistics</q-item-label>
          </q-item-section>
      </q-item>

<q-separator spaced />
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/boid-com"
        >
          <q-item-section avatar>
            <q-icon name="img:statics/icons/github.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
          </q-item-section>
        </q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/bloks-io-logo-vector.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Token contract</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://everipedia.org/wiki/lang_en/boid-1">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/everipedia.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Everipedia</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/wcg-logo.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>WCG stats</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://bloks.io/tokens/BOID-eos-boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Highest holders</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidworkfund">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token-more.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Work fund status</q-item-label>
          </q-item-section>
</q-item>

      </q-list>
    </q-btn-dropdown>
</q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      miniState: true,
      ratingModel1: 1,
      ratingModel2: 2,
      ratingModel3: 3
    }
  }
}
</script>