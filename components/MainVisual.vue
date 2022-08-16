<template>
  <div :class="$style.mainvisual">
    <div :class="$style.inner">
      <div :class="$style.lead_bloc">
        <h2 :class="$style.heading">
          <span>ちいさな</span>
          <span>しあわせ</span>
          <span>ここにある</span>
        </h2>
      </div>
      <div :class="$style.image_bloc">
        <figure :class="$style.image_bloc_figure">
          <img
            :class="$style.image_bloc_mask"
            src="../assets/img/mask_02.jpg"
            alt="カップルの写真"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: "MainVisual",
  // data () {

  // },
  // mounted() {

  // }
};
</script>

<style lang="scss" module>
@use "~/assets/scss/value" as v;
@use "~/assets/scss/font" as f;
@use "~/assets/scss/color" as c;

.mainvisual {
  margin-top: 8rem;
}

.inner {
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 v.$val * 4;
}

.heading {
  font-size: clamp(1.5rem, 0.879rem + 3.1vw, 3.38rem);
  font-weight: f.weight("bold");
  letter-spacing: f.letterSpacing("long");
  span {
    display: block;
  }
}

.image_bloc {
  width: 50%;
  &_figure {
    mask-image: url("../assets/img/mask_01.svg");
    mask-repeat: no-repeat;
    mask-position: 50% 0;
    mask-size: auto 100%;
  }
}
</style>
