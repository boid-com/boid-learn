<template>
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
<!-- <q-expansion-item
        dense-toggle
        expand-separator
        icon="build"
        label="TOOLS"
        expand-icon-class="text-white"
        >
        <q-item clickable v-close-popup @click="onItemClick" to="./EOSaccount">
        <q-item-section avatar>
            <q-icon name="img:statics/icons/Eos.svg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Create EOS account</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick" to="./BOIDprice">
        <q-item-section avatar>
            <q-icon name="img:statics/icons/boid-bird.svg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">BOID calculator</q-item-label>
          </q-item-section>
        </q-item>

</q-expansion-item> -->
          </q-list>
        </q-scroll-area>
    </q-drawer>

</template>

<script>
export default {
  name: 'SideMenuLinks',
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

<style>
</style>