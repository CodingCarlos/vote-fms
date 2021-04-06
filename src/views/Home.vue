<template>
  <div class="home">
    <FreestylerCard
      name="Manolo Lama"
      pic="https://picsum.photos/200"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import FreestylerCard from '@/components/FreestylerCard.vue';

export default {
  name: 'Home',
  components: {
    FreestylerCard,
  },
};
</script>
