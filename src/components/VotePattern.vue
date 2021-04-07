<template>
  <div
    class="vote-pattern py-1 px-5"
    :class="{ 'active-pattern': active }"
    @click="$emit('click')"
  >
    <slot />
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
