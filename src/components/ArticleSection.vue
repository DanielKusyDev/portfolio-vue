<template>
  <div>
    <h4>{{ data.header }}</h4>
    <vue-markdown>{{data.text_body}}</vue-markdown>
    <b-card-img :src="data.image" v-if="data.image !== null" class="thumb-post"></b-card-img>
  </div>
</template>

<script>

export default {
  name: "ArticleSection",
  props: ["data"],

}
</script>

<style>
.thumb-post {
  object-fit: cover; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  max-height: 50vh;
  margin: 1rem 0 1rem 0;
}
</style>