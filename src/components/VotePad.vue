<template>
  <div class="text-center">
    <div class="integers">
      <span
        v-for="point in maxVote + 1"
        :key="point"
      >
        <v-btn
          class="ma-1"
          @click="vote(point - 1)"
        >
          {{ point - 1 }}
        </v-btn>
      </span>
    </div>

    <div class="halfs">
      <span
        v-for="point in maxVote + 1"
        :key="point"
      >
        <v-btn
          v-if="point <= maxVote"
          class="ma-1"
          @click="vote(point - 0.5)"
        >
          {{ point - 1 }}.5
        </v-btn>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotePad',
  data: () => ({
    maxVote: 4,
  }),
  methods: {
    vote(value) {
      this.$emit('vote', value);
    },
  },
};
</script>
