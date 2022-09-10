<template>
  <section :class="$style.location">
    <div :class="$style.container">
      <div :class="$style.location_bg">
        <div :class="$style.location_filter"></div>
        <div :class="$style.location_desc">
          <h2 :class="$style.location_title">LOCATION</h2>
          <div :class="$style.btn">
            <div :class="$style.btn_wrap">
              <a href="/" target="_blank" :class="$style.btn_link">
                Google Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: "SectionLocation",
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

.location {
  &_bg {
    position: relative;
    width: 100%;
    min-height: 600px;
    background-image: url(~/assets/img/original.jpg);
    background-size: cover;
  }
  &_filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: c.$pureBlack, $alpha: 0.5);
  }
  &_desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: c.$pureWhite;
    z-index: zIndex(contents);
  }
  &_title {
    position: relative;
    font-size: v.$val * 11;
    font-family: f.family("heading");
    &::before {
      content: "";
      margin: 0 auto;
      display: block;
      width: 64px;
      height: 70px;
      background-image: url(~/assets/img/svg/pin.svg);
      background-size: cover;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    text-align: center;
    &_wrap {
      width: 200px;
      border: solid 1px c.$pureWhite;
      border-radius: 15px;
      transition: border 0.5s;
      &:hover {
        border: none;
      }
    }
    &_link {
      padding: 4px 0;
      display: block;
      font-size: f.size(small);
      font-family: f.family("heading");
      font-weight: f.weight("bold");
      transition: background-color, 0.5s, color, 0.5s;
      border-radius: 14px;
      &:hover {
        color: c.$black;
        background-color: rgba($color: c.$pureWhite, $alpha: 0.8);
      }
    }
  }
}
</style>
