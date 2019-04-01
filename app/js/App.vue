<template>
<div>
  <div>Pairs left to match: {{game.unmatchedPairs}}</div>
  <div>Matching: {{(game.firstPick || {}).title}}</div>
  <table>
    <tr v-bind:key="i" v-for="(row, i) in game.grid">
      <td v-bind:key="`${i}-${t}`" v-for="(tile, t) in row" class="container">
        <memory-card :tile="tile" :game="game"></memory-card>
      </td>
    </tr>
  </table>

  <div class="message">{{game.message}}</div>
</div>
</template>
<script>
import Game from './game'
import MemoryCard from './components/MemoryCard.vue'

function makeGame() {
  const tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin']

  return new Game(tileNames)
}

export default {
  components: { MemoryCard },
  data () {
    return {
      game: makeGame(),
    }
  },
}
</script>