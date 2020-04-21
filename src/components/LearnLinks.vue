<template>
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
            <q-item-label  class="boid-font-menu" caption>Level 1</q-item-label>
          </q-item-section>
       </q-item>
        
        <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl2">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel2" size="1em" color="white" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label class="boid-font-menu" caption>Level 2</q-item-label>
          </q-item-section>
       </q-item>
        
              <q-item clickable v-close-popup @click="onItemClick" to="./learn-basic-lvl3">
          <q-item-section avatar>
              <q-rating id="school-rating" icon="school" v-model="ratingModel3" size="1em" color="white" readonly max=3></q-rating>
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Basic</q-item-label>
            <q-item-label  class="boid-font-menu" caption>Level 3</q-item-label>
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
</template>

<script>
export default {
  name: 'LearnLinks',
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