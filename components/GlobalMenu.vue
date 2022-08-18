<template>
  <div :class="$style.container">
    <ul :class="$style.global_list">
      <li :class="$style.global_li">
        <a :class="[$style.global_link, $style.current]" href="">TOP</a>
      </li>
      <li :class="$style.global_li">
        <a :class="$style.global_link" href="">CONCEPT</a>
      </li>
      <li :class="$style.global_li">
        <a :class="$style.global_link" href="">MENU&amp;DRINK</a>
      </li>
      <li :class="$style.global_li">
        <a :class="$style.global_link" href="">GALLERY </a>
      </li>
      <li :class="$style.global_li">
        <a :class="$style.global_link" href="">LOCATION</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GlobalMenu",
  props: {
    sections: {
      required: true,
      type: Array,
    },
  },
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

.global_list {
  position: fixed;
  top: 30rem;
  left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem 0;
  letter-spacing: f.letterSpacing("narrow");
  z-index: v.zIndex("nav");
}

.global_link {
  position: relative;
  display: block;
  font-size: f.size("smaller");
  font-weight: f.weight("bold");
  color: c.$mainBlue;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.5s;
    background-color: c.$mainBlue;
  }

  &:hover::after {
    transform: scale(1, 1);
  }

  &.current {
    &::before {
      content: "";
      position: absolute;
      left: -1.2rem;
      margin: 0.5rem;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: c.$mainBlue;
    }
  }
}
</style>
