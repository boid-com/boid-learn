<template>
  <q-page class="flex flex-center">

      <div class="wrap justify-center items-top content-start" style="min-height: 800px; max-width: 800px; width: 60%; padding: 25px;">

        <q-card style="padding: 25px;">
          <q-tabs v-model="tab" dense class="text-black boid-font-lg bg-grey-4" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
            <q-tab name="earthday" label="EARTH DAY" ></q-tab>
            <q-tab name="rules" label="RULES" ></q-tab>
            <q-tab name="giveaway" label="GIVEAWAY" ></q-tab>
            <q-tab name="quiz" label="QUIZ" ></q-tab>
            </q-tabs >
        <q-separator ></q-separator>
  
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="earthday">
                <div class="boid-font-md">
                  <img src="../statics/earthday.jpg" style="width: 100%;">
                   <br><b>Earth Day</b> is an annual event celebrated around the world on April 22 to demonstrate support for environmental protection.
                   <br>First celebrated in 1970, it now includes events coordinated globally by the Earth Day Network in more than 193 countries.
                   <br>This year we would like to demonstrate our support for environmental protection.
                   <br>APRIL 22, 2020 MARKS 50 YEARS OF EARTH DAY.
                </div>
              </q-tab-panel>
  
            <q-tab-panel name="rules">
             <div class="boid-font-md">
               <b>Boid Earth Day 2020 April 22nd</b>
               <br>To be able to be a part of Boid Yearly Special, users need to:
                <div class="q-pa">
                  <q-item clickable v-ripple>
                    <q-item-section>1. Have 100k tokens staked by themselves or delegated to them</q-item-section>
                  </q-item>
                 
                 <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>2. Be an active user with at least 1000 Boid power on 27th of April</q-item-label>
                  </q-item-section>
                 </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label >3. Have an EOS account connected to their Boid account.</q-item-label>
                  </q-item-section>
                </q-item>
   
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label >4. Fill the quiz and answer at least 15 out of 20 questions properly (questions about environmental issues, research, etc.)</q-item-label>
                  </q-item-section>
                </q-item>
            
               <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label >5. Make a comment about Boid on twitter and Discussions.app with <b>#boid</b> within 22-27 April 2020.</q-item-label>
                </q-item-section>
               </q-item>
                
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label >6. Make a comment about Earth Day on twitter and Discussions.app with <b>#earthday2020</b> within 22-27 April 2020.</q-item-label>
                  </q-item-section>
                </q-item>
          </div>
          
           <br>Random Boid users will be chosen from participants. The lottery will be done on 27th of April 2020 18:00 GMT.
           <br>Then after verification all the funds will be transferred to the winners.
      </div>
      </q-tab-panel>
  
            <q-tab-panel class="boid-font-md" name="giveaway">
              Giveaway by randomly generated choice:
              <div class="q-pa" >
                <q-item clickable v-ripple>
                  <q-item-section>1st price 1 000 000 BOID tokens</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>2nd price 500 000 BOID tokens</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>3rd price 300 000 BOID tokens</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>4th price 100 000 BOID tokens</q-item-section>
                </q-item>
                  <p>Organizers will not be able to be a part of the Boid Yearly Special.</p>
              </div>
           </q-tab-panel>

           <q-tab-panel name="quiz">
                <div class="boid-font-md">
                  Fill the form in this window or just follow the link <a href="https://forms.gle/3N8GHYhJsGqyDyxc9" target="_blank">HERE</a><p></p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScl1V3ST5YPaVc6OXE-eirrHTsezYRkL6ov8gjArPQYJyLNBg/viewform?embedded=true"
                    width="650px"
                    height="700px"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    style= "border: none; max-width:100%; max-height:100vh"
                    allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen>Loading…
                    </iframe>           
                </div>
            </q-tab-panel>
          
      </q-tab-panels>
    </q-card>
</div>
    
    
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'earthday'
    }
  }
}
</script>