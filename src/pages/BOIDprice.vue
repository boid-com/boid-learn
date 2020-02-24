<template>
  <q-page class="flex flex-center">

      <div class="wrap justify-center items-top content-start" style="min-height: 900px; max-width: 800px; width: 100%; padding: 25px;">

        <q-card style="padding: 25px;">
           <script
             type="application/x-javascript"
              defer
               src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js">
            </script>
             <coingecko-coin-ticker-widget
              coin-id="boid"
               currency="usd"
                locale="en">
                </coingecko-coin-ticker-widget>
            <script
             type="application/x-javascript"
              defer
               src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js">
               </script>
              <coingecko-coin-converter-widget
                coin-id="boid"
                 currency="usd"
                  background-color="#ffffff"
                   font-color="#4c4c4c"
                    locale="en">
                    </coingecko-coin-converter-widget>
</q-card>
</div>
    
  </q-page>
</template>

<script>
      export default {
        data() {}
              }
</script>