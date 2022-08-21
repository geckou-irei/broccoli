<template>
  <div :class="$style.mainvisual">
    <div :class="$style.inner">
      <div :class="$style.lead_bloc">
        <h2 :class="$style.heading">
          <span :class="$style.main_title"
            ><span :class="[$style.main_text, 'main_title_01']"
              >ちいさな</span
            ></span
          >
          <span :class="$style.main_title"
            ><span :class="[$style.main_text, 'main_title_02']"
              >しあわせ</span
            ></span
          >
          <span :class="$style.main_title"
            ><span :class="[$style.main_text, 'main_title_03']"
              >ここにある</span
            ></span
          >
        </h2>
      </div>
      <div id="main_image_bloc" :class="$style.image_bloc">
        <figure :class="$style.image_bloc_figure">
          <img
            id="main_image"
            :class="$style.image_bloc_mask"
            src="~/assets/img/mask_02.jpg"
            alt="カップルの写真"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
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
}

.main_title {
  display: block;
  overflow: hidden;
  span {
    display: block;
    opacity: 0;
    transform: translateY(110%);
    transition: opacity 1s, transform 1.2s;
  }
}

.image_bloc {
  width: 50%;
  overflow: hidden;
  z-index: 1;
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
    transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  &_figure {
    mask-image: url("../assets/img/mask_01.svg");
    mask-repeat: no-repeat;
    mask-position: 50% 0;
    mask-size: auto 100%;
    img {
      display: block;
      transform: scale(1.2);
      transform-origin: center;
      opacity: 0;
      object-fit: cover;
      transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}
</style>
