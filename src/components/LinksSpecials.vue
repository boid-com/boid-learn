<template>

<q-list padding>
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

</template>

<script>
export default {
  name: 'SpecialsLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>