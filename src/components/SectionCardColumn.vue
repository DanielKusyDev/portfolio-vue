<template>
  <b-container>
    <p>
      <font-awesome-icon :icon="icon" size="3x" :style="cardSubheaderStyle"/>
    </p>
    <b-card-sub-title class="cardTitle">
      <slot name="cardTitle"/>
    </b-card-sub-title>


    <div v-for="section in sections" :key="section.title">
      <p :style="cardSubheaderStyle">{{ section.title }}</p>
      <div v-if="section.verticalList">
        <p v-for="item in section.content" :key="item" class="itemsList">{{item}}</p>
      </div>
      <div v-else>
          <span v-for="(item, index) in section.content" :key="item">
            <span class="itemsList">
              <span v-if="index !== 0">, </span><span>{{ item }}</span>
            </span>
          </span>
      </div>
    </div>
  </b-container>

</template>

<script>
export default {
  name: "SectionCardColumn",
  props: {
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: "#5d17b7",
    },
    sections: {
      type: Array,
      required: true,
    },
  },
  computed: {
    cardSubheaderStyle() {
      return {
        "color": this.iconColor,
        "margin-top": "45px !important",
        "font-weight": "bold",
      }
    }
  }
}
</script>

<style scoped>
.cardTitle {
  font-size: 17px;
}

p {
  line-height: 1 !important;
  font-family: "Poppins", sans-serif;
  margin: 20px 0 20px;
}

.itemsList {
  font-size: 14px;
}
</style>