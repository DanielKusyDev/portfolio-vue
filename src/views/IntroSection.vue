<template>
  <div>
    <HeaderDivider
        :title="title"
        :subheader="overview.info['summary']"
        :color="`#${overview.info.theme_color}`"
    />

    <b-container class="niche">
      <b-card>
        <b-row class="text-center">
          <b-col lg="6">
            <SectionCardColumn
                icon="laptop-code"
                :sections="firstColumnSections"
                :icon-color="color"
            />
          </b-col>
          <b-col lg="6">
            <SectionCardColumn
                icon="briefcase"
                :sections="secondColumnSections"
                :icon-color="color"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-container>

  </div>
</template>

<script>
import HeaderDivider from "@/components/HeaderDivider";
import SectionCardColumn from "@/components/SectionCardColumn";
import {mapGetters} from "vuex";

function getOneColumnSection(overview, column) {
  const leftColObjects = overview.bullets.results.filter(bulletGroup => {
    return bulletGroup.column === column;
  });

  let bullets = leftColObjects.sort((a, b) => {
    return a.order > b.order;
  });
  return bullets.map(bulletGroup => {
    return {
      verticalList: bulletGroup.order === 1,
      title: bulletGroup.name,
      content: bulletGroup.bullets.map(bullet => {return bullet.name})
    }
  });
}

export default {
  name: "IntroSection",
  components: {HeaderDivider, SectionCardColumn},
  computed: {
    ...mapGetters(["overview"]),
    title() {
      return `Hello, I'm ${this.overview.info.first_name}`;
    },
    firstColumnSections() {
      return getOneColumnSection(this.overview, 0);
    },
    secondColumnSections() {
      return getOneColumnSection(this.overview, 1);
    },
    color() {
      return `#${this.overview.info.theme_color}`;
    },
  }
}
</script>
