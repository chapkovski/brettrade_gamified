<template>
  <v-dialog v-model="dialog" persistent max-width="490">
    <v-card>
      <v-card-title class="text-h5" color="danger"
        >End of the round</v-card-title
      >

      <v-card-text>
         <v-sheet outlined class="d-flex align-center ml-1 pa-2 rounded-xl justify-center">
        <div class="d-flex align-center  font-weight-bold  justify-center">
         <div> Your payoff:
          </div>
          <div class="ml-1 pa-2  text-no-wrap rounded-pill" :class='$gamified?`blue   white--text`:`rounded-xl border`'>
            ${{currentPrice}}
          </div>
        </div>
      </v-sheet>
        Click 'Next' to continue to the next round
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
         
          
            <v-btn color=" darken-1" @click="submit" :class='$gamified?`red`:``'> Next</v-btn>
           
        
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog","currentPrice"],
  components: {},
  data: () => ({}),

  methods: {
    submit() {
      this.$emit("finishGame");
    },
  },
};
</script>
