<template>
  <div class="vote fill-height d-flex flex-column">
    <v-container class="flex-grow">
      <v-row>
        <v-col
          v-for="(freestyler, index) in freestylers"
          :key="freestyler.id"
        >
          <VoteFreestyler
            :pic="freestyler.pic"
            :name="freestyler.name"
            :index="index"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="vote-pad">
      <VotePad
        @vote="nextPattern()"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import VoteFreestyler from '@/components/VoteFreestyler.vue';
import VotePad from '@/components/VotePad.vue';

export default {
  name: 'Vote',

  components: {
    VoteFreestyler,
    VotePad,
  },

  computed: {
    freestylers() {
      return this.$store.state.battle.freestylers;
    },
  },

  methods: {
    nextPattern() {
      const currentMode = this.$store.state.battle.status.mode;
      const currentPattern = this.$store.state.battle.status.pattern;
      const totalPatterns = this.$store.state.battle.format.modes[currentMode].patterns - 1;

      console.log('currentPattern');
      console.log(currentPattern);
      console.log('totalPatterns');
      console.log(totalPatterns);

      // Si estamos entre patrones, siguiente patrón
      if (currentPattern < totalPatterns) {
        this.$store.dispatch('battle/nextPattern');
      } else if (currentPattern === totalPatterns) {
        // Si es el último patrón, a los modos especiales
        console.log('Vota modo especial. Mañana ya si eso...');
        this.$store.dispatch('battle/setPattern', -1);
      }

      // Si es el último modo especial de un freestyler que no sea el último, siguiente freestyler

      // Si es el último modo especial del último freestyler, siquiente modo.
    },
  },
};
</script>
