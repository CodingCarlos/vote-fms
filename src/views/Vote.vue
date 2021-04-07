<template>
  <div class="vote fill-height d-flex flex-column">
    <v-container class="flex-grow">
      <!-- {{ $store.state.battle.votes }} -->
      {{ $store.state.battle.status }}
      <v-row>
        <v-col
          v-for="(freestyler, index) in freestylers"
          :key="freestyler.id"
          cols="6"
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
        @vote="vote"
      />
    </div>

    <div
      class="next-mode"
      v-if="voteCompleted"
    >
      <v-btn block large color="primary" @click="nextMode()">
        Next mode ->
      </v-btn>
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

  data: () => ({
    voteCompleted: false,
  }),

  computed: {
    freestylers() {
      return this.$store.state.battle.freestylers;
    },
  },

  methods: {
    vote(value) {
      this.$store.dispatch('battle/vote', value);
      this.nextPattern();
    },
    nextPattern() {
      const currentMode = this.$store.state.battle.status.mode;
      const currentFreestyler = this.$store.state.battle.status.freestyler;
      const currentPattern = this.$store.state.battle.status.pattern;
      const totalFreestylers = this.freestylers.length - 1;
      const totalPatterns = this.$store.state.battle.format.modes[currentMode].patterns - 1;

      // Si estamos entre patrones, siguiente patrón
      if (currentPattern < totalPatterns) {
        this.$store.dispatch('battle/nextPattern');
      // } else if (currentPattern === totalPatterns) {
        // Si es el último patrón, a los modos especiales
        // console.log('Vota modo especial. Mañana ya si eso...');
      } else if (currentPattern === totalPatterns && currentFreestyler > totalFreestylers) {
        // CUIDADO!! Esto no va aquí. Es un workarround para ir más rápido.
        // --> En realidad toca votar los modos especiales.
        this.$store.dispatch('battle/nextFreestyler');
        this.$store.dispatch('battle/nextPattern');
        // } else if () {
        // Si es el último modo especial de un freestyler que no sea el último, siguiente freestyler
      } else if (currentPattern === totalPatterns && currentFreestyler === totalFreestylers) {
        // Si es el último modo especial del último freestyler, siquiente modo.
        this.$store.dispatch('battle/setPattern', -1);
        this.voteCompleted = true;
      }
    },
    nextMode() {
      // Reiniciamos el modo actual...
      this.voteCompleted = false;

      // ...Pasamos al siguiente modo...
      this.$store.dispatch('battle/nextMode');

      // ...Y lo inicializamos
      this.$store.dispatch('battle/setPattern', 0);
      this.$store.dispatch('battle/setFreestyler', 0);
    },
  },
  created() {
    this.$store.dispatch('battle/bindVotes');
  },
};
</script>
