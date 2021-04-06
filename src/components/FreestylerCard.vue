<template>
  <v-card
    class="freestyler-card"
    :disabled="selected"
    @click="$emit('click')"
  >
     <v-img
      height="150"
      :src="pic"
    ></v-img>

    <v-card-title>{{ name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'FreestylerCard',
  props: {
    pic: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.freestyler-card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 8px;
  border: 1px solid black;
}*/
</style>
