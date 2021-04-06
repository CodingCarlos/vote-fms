<template>
  <div class="freestyler-card">
    <img :src="pic" />
    <span>{{ name }}</span>
  </div>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.freestyler-card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 8px;
  border: 1px solid black;
}
</style>
