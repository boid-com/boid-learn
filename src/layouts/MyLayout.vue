<template>
  <q-layout view="hHh lpR lFr">

    <q-header reveal elevated class="flex flex-center column bg-primary text-white">
      <q-toolbar class="row justify-start items-center content-center boid-font-md">
                <q-btn style="overflow: auto;" color="primary" clickable @click="$router.push('./')" icon="img:statics/icons/boid-bird.svg"></q-btn>
                
    <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="primary" label="Learn">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl1">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel1" size="1em" color="primary" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 1 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
        
        <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl2">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel2" size="1em" color="primary" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 2 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
        
              <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel3" size="1em" color="primary" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 3 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>
<q-separator spaced />
              <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel1" size="1em" color="green" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Advanced</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 1 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>

 <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel2" size="1em" color="green" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Advanced</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 2 (Soon!)</q-item-label>
          </q-item-section>
       </q-item>

  <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel3" size="1em" color="green" readonly max=3></q-rating>
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
      </q-list>
    </q-btn-dropdown>

    <q-btn-dropdown style="overflow: auto;" color="primary" label="Specials">
      <q-list>
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

      </q-list>
    </q-btn-dropdown>

      </q-toolbar>

   </q-header>

    
    <q-page-container>
      <router-view />
    </q-page-container>


<q-footer reveal elevated class="flex flex-center column bg-grey-8">
  <q-toolbar class="row justify-start items-center content-center boid-font-footer">
      
  <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="grey-8" label="SOCIAL">
      <q-list>        
        <q-item clickable tag="a" target="_blank" href="https://community.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/handshake.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Community</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://t.me/Boidcom_official">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/telegram.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Telegram</q-item-label>
          </q-item-section>
          </q-item>
       <q-item clickable tag="a" target="_blank" href="https://discord.gg/Frm38a6">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/discord.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Discord</q-item-label>
          </q-item-section>
        </q-item>
       <q-item clickable tag="a" target="_blank" href="https://twitter.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/twitter.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Twitter</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.facebook.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/facebook.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Facebook</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.youtube.com/channel/UCL4I3DksM41qPKih2PbiQ7g/featured">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/youtube.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Youtube</q-item-label>
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
            <q-item-label class="boid-font-menu">APP Web</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/documents.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Documentation</q-item-label>
          </q-item-section>
        </q-item>
      <q-item clickable tag="a" target="_blank" href="https://stats.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/stats.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Statistics</q-item-label>
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
            <q-item-label class="boid-font-menu">Github</q-item-label>
          </q-item-section>
        </q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/bloks-io-logo-vector.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Token contract</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://everipedia.org/wiki/lang_en/boid-1">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/everipedia.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Everipedia</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/wcg-logo.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">WCG stats</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://bloks.io/tokens/BOID-eos-boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Highest holders</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidworkfund">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token-more.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Work fund status</q-item-label>
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
      ratingModel1: 1,
      ratingModel2: 2,
      ratingModel3: 3
    }
  }
}
</script>