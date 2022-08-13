<template>
  <div
    :class="$style.container"
  >
    <ul
      :class="$style.global_list"
    >
      <li :class="$style.global_li">
        <a :class="$style.global_link" href="">TOP</a>
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
  left: calc(v.$val * 4);
  display: flex;
  flex-direction: column;
  gap: .2rem 0;
  letter-spacing: f.letterSpacing('narrow');
  z-index: v.zIndex('nav');
}


.global_link {
  display: block;
  font-size: f.size('smaller');
  font-weight: f.weight('bold');
  color: c.$mainBlue;
}
</style>
