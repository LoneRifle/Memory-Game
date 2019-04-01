<template>
<div class="card" :class="tile.flipped ? 'flipped' : ''" @click="game.flipTile(tile)">
  <img class="front" src="img/back.png">
  <img class="back" :src="`img/${tile.title}.png`">
</div>
</template>
<script>
export default {
  props: ['game', 'tile'],
}
</script>