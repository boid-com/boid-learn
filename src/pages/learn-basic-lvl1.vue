<template>
  <q-page class="flex flex-center">
    <div class="animated fadeInLeft"
         id="boids"
         style="pointer-events: none; overflow: hidden;">
      <div class="wrap justify-center items-top content-start" style="min-height: 800px; max-width: 800px; width: 100%; padding: 25px;">

        <q-card style="padding: 25px;">
          <q-tabs v-model="tab" dense class="text-black boid-font-lg bg-grey-4" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
            <q-tab name="welcome" label="WELCOME" ></q-tab>
            <q-tab name="rules" label="RULES" ></q-tab>
            <q-tab name="quiz" label="QUIZ" ></q-tab>
            </q-tabs >
        <q-separator ></q-separator>
  
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="welcome">
                <div class="boid-font-md">
                  <img src="../statics/boid-header.png" style="width: 100%;">
                   <br><b>Thank you for joining Boid!</b>
                   <br>This is your first step to learn more things about this project!
                   <br>To encourage you we prepared a quiz where you can get 1000 BOID tokens.
                   <br>The only thing that you have to do is do a little research and answer all questions properly.
                   <br>To start please check <a href="https://boid.com" target="_blank">boid.com</a> website and read what is Boid all about.
                   <br>After that I'm sure you'll be ready to go through the quiz with flash speed.
                </div>
              </q-tab-panel>
  
            <q-tab-panel name="rules">
             <div class="boid-font-md">
                  Don't worry - if you don't answer all the questions first time, you can try again.
                  <p><br>Please make sure to enter your EOS account name properly or we won't be able to make the transfer to you.</p>
                  <ul>
                  <li>Only users with at least 250 Boid Power can be rewarded for this quiz.</li>
                  <li>Only 100% accurate answers get you the reward.</li>
                  </ul>
            </div>  
            </q-tab-panel>
            <q-tab-panel class="boid-font-md" name="quiz">
               <iframe width="650px" height= "700px"
               src= "https://forms.office.com/Pages/ResponsePage.aspx?id=bghl7qMVVUG0PQM6HBHJMv4gVfB9Nl1ErdAbz9cp6qxUMlFVNVNLU0RJVEk2U0dUNFlFN1Q4SkoyQi4u&embed=true"
               frameborder= "0" marginwidth= "0" marginheight= "0"
               style= "border: none; max-width:100%; max-height:100vh"
               allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
           </q-tab-panel>
          
      </q-tab-panels>
    </q-card>
</div>
    </div>
    
  </q-page>
</template>

<script>
export default {
 data () {
    return {
      tab: 'welcome'
    }
  }
}
</script>