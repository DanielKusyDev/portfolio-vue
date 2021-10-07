<template>
    <b-container fluid class="tile-container">
      <b-card
          v-for="item in items" :key="item.name"
          class="tile"
          :img-src="item.img"
          :img-alt="item.alt ? item.alt : 'Card Image'"
          text-variant="white"
          bg-variant="transparent"
          overlay
      >
        <div class="card-content">
          <div class="tileTextRow">
            <b-container class="text-center">
              <p>{{ item.text }}</p>
              <b-btn variant="primary" :to="item.path">View</b-btn>
            </b-container>
          </div>
        </div>
      </b-card>


    </b-container>
</template>

<script>

export default {
  name: "Gallery",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
img {
  object-fit: cover;
  max-height: 20vh;
  min-height: 20vh;
}

.tileTextRow {
  position: absolute;
  bottom: 0;
  width: 100%;
}

body {
  background: #eee;
}
p {
  font-family: "Poppins",sans-serif;
}
.tile-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row;
  width: 80%;
}

.tile {
  flex: 1 0 25vw;
  align-self: stretch;
  max-height: 20vh;
  margin: 1vh 5px;
}

@media screen and(max-width: 500px) {
  .tile {
    flex-basis: 100% !important;
    max-width: 100%;
  }
}

.card-img-overlay {
  padding: 0;
}

.card-content {
  height: 100%;
  width: 100%;
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  opacity: 0;
}

.card-content:hover {
  background-color: rgba(153, 152, 152, 0.86);
  opacity: 1;
}
.tileTextRow p {
  margin: 0;
}

</style>