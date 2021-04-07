<template>
  <div class="d-flex align-center text-center flex-column">
    <div class="d-flex align-center text-center flex-column">
      <v-img
        height="100"
        width="100"
        :src="pic"
      ></v-img>
      <h3>{{ name }}</h3>
    </div>

    <div class="d-flex flex-column align-center">
      <VotePattern
        v-for="pattern in patterns"
        :key="pattern"
        :active="isPatternActive(pattern)"
        @click="selectPattern(pattern)"
      >
        {{ $store.getters['battle/getVotes'](mode, index, pattern - 1) }}
      </VotePattern>
    </div>

    <div class="d-flex align-center justify-center">
      <div class="px-2">
        <p>Flow</p>
        <VotePattern />
      </div>

      <div class="px-2">
        <p>Skills</p>
        <VotePattern />
      </div>

      <div class="px-2">
        <p>Escena</p>
        <VotePattern />
      </div>
    </div>
  </div>
</template>

<script>
import VotePattern from '@/components/VotePattern.vue';

export default {
  name: 'VoteFreestyler',
  components: {
    VotePattern,
  },
  props: {
    pic: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    mode() {
      return this.$store.state.battle.status.mode;
    },
    patterns() {
      return this.$store.state.battle.format.modes[this.mode].patterns;
    },
  },
  methods: {
    isPatternActive(pattern) {
      const freestylerActive = this.$store.state.battle.status.freestyler;
      if (this.index !== freestylerActive) {
        return false;
      }

      const activePattern = this.$store.state.battle.status.pattern + 1;
      return pattern === activePattern;
    },
    selectPattern(pattern) {
      this.$store.dispatch('battle/setStatus', {
        pattern: pattern - 1,
        freestyler: this.index,
      });
    },
  },
};
</script>
