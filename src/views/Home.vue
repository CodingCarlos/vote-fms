<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col
          cols="6"
          v-for="freestyler in freestylers"
          :key="freestyler.id"
        >
          <FreestylerCard
            :name="freestyler.name"
            :pic="freestyler.pic"
            :selected="isSelected(freestyler)"
            @click="selectFreestyler(freestyler)"
          />
        </v-col>
      </v-row>
    </v-container>

      <!-- v-if="battleReady" -->
    <v-btn
      :disabled="!battleReady"
      large
      color="primary"
      class="floating-next"
      @click="setFreestylers"
    >
      ¡A votar!
    </v-btn>
  </div>
</template>

<style scoped>
  .floating-next {
    position: fixed;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 32px);
    z-index: 1;
  }
</style>

<script>
// @ is an alias to /src
import FreestylerCard from '@/components/FreestylerCard.vue';

export default {
  name: 'Home',

  components: {
    FreestylerCard,
  },

  data: () => ({
    selected: [],
  }),

  computed: {
    freestylers() {
      return this.$store.state.freestylers.list;
    },
    battleReady() {
      return this.selected.length === 2;
    },
  },

  methods: {
    isSelected(freestyler) {
      const found = !!this.selected.find((item) => item.id === freestyler.id);
      return found;
    },
    selectFreestyler(freestyler) {
      if (this.battleReady) {
        return false;
      }

      if (this.isSelected(freestyler)) {
        console.log('Ya está seleccionado');
      } else {
        console.log(`${freestyler.name} te elijo a ti`);
        this.selected.push(freestyler);
      }
      return true;
    },
    setFreestylers() {
      this.$store.dispatch('battle/setFreestylers', this.selected);
      this.$router.push('vote');
    },
  },

  beforeCreate() {
    this.$store.dispatch('freestylers/getFreestylers');
  },
};
</script>
