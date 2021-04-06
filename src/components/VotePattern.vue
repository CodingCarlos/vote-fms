<template>
  <div
    class="vote-pattern"
    :class="{ 'active-pattern': active }"
  >
    0
  </div>
</template>

<style scoped>
.active-pattern {
  background-color: #faa545;
}
</style>

<script>
export default {
  name: 'VotePattern',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
