<template>
  <div>
    <b-container fluid :style=boxStyle class="text-center headerDividerArea">
      <p class="title">
        {{ title }}
        <slot name="title"/>
      </p>
      <b-row v-if="subheader">
        <b-col offset-lg="3" lg="6">
          <p>
            {{ subheader }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HeaderDivider",
  props: {
    color: {
      type: String,
      default: "#5d17b7",
    },
    title: {
      type: String,
      required: false,
    },
    subheader: {
      type: String,
      required: false,
    }
  },
  data() {
    return {}
  },
  computed: {
    boxStyle() {
      return {
        "background-color": this.color,
        "padding-bottom": "15vh",
      }
    }
  }
}
</script>

<style scoped>
.headerDividerArea * {
  font-weight: 200;
  line-height: 1.5;
  color: white;
  font-size: 20px;
}

.title {
  font-weight: 750;
  font-size: 40px;
}
</style>