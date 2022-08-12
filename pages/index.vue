<template>
  <main id="frontPage">
    <LoadingAnimetion 
      :v-if="isShow"
      :class="[$style.loading_anime, isShow ? '' : $style.hide]"
    />
    <div :class="[$style.wrapper, isShow ? '' : $style.show]">
      <GlobalHeader />
      <div :class="$style.container">
        
      </div>
    </div>
    <section></section>
  </main>
</template>

<script>
export default {
  name: "frontPage",
  data () {
    return {
      isShow : true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 2000)
    })
  }
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

.container {
  margin: 0 auto;
  height: 100vh;
}

</style>
