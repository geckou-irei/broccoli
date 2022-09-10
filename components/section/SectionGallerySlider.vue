<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "SectionGallerySlider",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
      },
    };
  },
  // mounted() {

  // }
};
</script>

<style lang="scss" module>
@use "~/assets/scss/value" as v;
@use "~/assets/scss/font" as f;
@use "~/assets/scss/color" as c;
</style>
