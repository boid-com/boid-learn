<template>
  <q-layout view="hHh lpR lFr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
              dense
              flat
              round
              icon="menu"
              @click="left = !left"
              aria-label="Menu"
        />

        <q-toolbar-title>
           <img src="../statics/boid-logo-white.svg" style="width:7%; height:7%;">
        </q-toolbar-title>

        <q-px-md-toolbar-title
          on-left
          class="boid-font-lg">
            LEARN AND EARN
        </q-px-md-toolbar-title>

      <q-btn
         dense
         flat
         round
         icon="menu"
         @click="right = !right" />
      
      </q-toolbar>
    
    </q-header>

    <q-drawer
      v-model="left"
      show-if-above
      
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="260"
      :breakpoint="500"
      bordered
      class="boid-font-md"
      >
     
     <q-scroll-area class="fit">
     <q-list padding>
       
        <q-item active clickable v-ripple tag="a" target="_blank" href="https://boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/boid-logo.svg" />
          </q-item-section>
        <q-item-label>Main Site</q-item-label>
        <q-item-section>
            
          </q-item-section>
</q-item>

        <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/documents.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Documentation site</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item clickable tag="a" target="_blank" href="https://community.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/handshake.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Community site</q-item-label>
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

<q-item clickable tag="a" target="_blank" href="https://t.me/Boidcom_official">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/telegram.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Telegram</q-item-label>
          </q-item-section>
</q-item>

        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://discord.gg/Frm38a6"
        >
          <q-item-section avatar>
            <q-icon name="img:statics/icons/discord.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord</q-item-label>
          </q-item-section>
        </q-item>
        
        
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.com/boidcom"
        >
          <q-item-section avatar>
            <q-icon name="img:statics/icons/twitter.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://www.facebook.com/boidcom"
        >
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
            <q-item-label>Youtube channel</q-item-label>
          </q-item-section>
</q-item>

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
</q-item><q-item clickable tag="a" target="_blank" href="https://bloks.io/tokens/BOID-eos-boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Token highest holders</q-item-label>
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
</q-scroll-area>      

    
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered class="boid-font-md">
      
            <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
              <q-item-section avatar>
                <q-icon name="img:statics/icons/school.svg" />
              </q-item-section>
          
          <q-item-section>
            <q-item-label>Learn</q-item-label>
          </q-item-section>
        </q-item>
      <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/boid-bird.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Specials</q-item-label>
          </q-item-section>
        </q-item>
      
      <q-list><q-item-label header>“YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT.” – ZIG ZIGLAR</q-item-label></q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      miniState: true
    }
  }
}
</script>