<template>
  <main id="frontPage">
    <LoadingAnimetion
      :v-if="isShow"
      :class="[$style.loading_anime, isShow ? '' : $style.hide]"
    />
    <div :class="[$style.wrapper, isShow ? '' : $style.show]">
      <GlobalHeader />
      <div :class="$style.container">
        <MainVisual />
        <GlobalMenu />
        <SectionConcept :class="$style.space" />
        <SectionMenu :class="$style.space" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "frontPage",
  data() {
    return {
      isShow: true,
      currentSection: "top",
      sections: [
        {
          id: "concept",
          name: "CONCEPT",
          nameJp: "コンセプト",
          component: "SectionConcept",
        },
        {
          id: "menu",
          name: "MENU&DRINK",
          nameJp: "メニュー&ドリンク",
          component: "SectionMenu",
        },
        {
          id: "gallery",
          name: "GALLERY",
          nameJp: "ギャラリー",
          component: "SectionGallery",
        },
        {
          id: "location",
          name: "LOCATION",
          nameJp: "ロケーション",
          component: "SectionLocation",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false;
      }, 2000);
    });
  },
};
</script>

<style lang="scss" module>
@use "~/assets/scss/value" as v;
@use "~/assets/scss/font" as f;
@use "~/assets/scss/color" as c;

.loading_anime {
  transition: all 1s;
  opacity: 1;
  &.hide {
    opacity: 0;
    visibility: hidden;
  }
}

.wrapper {
  position: relative;
  opacity: 0;
  transition: all 1.8s;
  &.show {
    opacity: 1;
  }
}

.space {
  margin-top: 11rem;
  padding: 0 2rem 0 10rem;
}

.container {
  margin: 0 auto;
  max-width: 1480px;
  height: 100vh;
}
</style>
