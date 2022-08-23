<template>
  <section :class="$style.section_gallery">
    <div :class="$style.container">
      <h2 :class="[$style.lead_title, 'lead_title']">
        <span :class="$style.en"
          ><span :class="$style.en_change">GAL</span>LERY</span
        >
        <span :class="$style.ja">ギャラリー</span>
      </h2>
      <div :class="$style.content">
        <div :class="$style.gallery_image_container">
          <figure :class="$style.gallery_image">
            <img src="@/assets/img/cafe.jpg" alt="" />
          </figure>
          <div :class="$style.gallery_thumbnail">
            <div :class="$style.gallery_thumbnail_list">
              <div :class="$style.gallery_thumbnail_item">
                <figure :class="$style.gallery_thumbnail_image">
                  <img src="" alt="" />
                </figure>
                <h3 :class="$style.gallery_thumbnail_title"></h3>
                <time class="thumb-date" datetime=""></time>
              </div>
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
  name: "SectionConcept",
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

.lead_title {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .en,
  .ja {
    display: block;
    color: c.$mainBlue;
  }
  .en {
    font-size: v.$val * 11;
    font-family: f.family("heading");
    &_change {
      display: inline;
      color: transparent;
      -webkit-text-stroke: 1px c.$mainBlue;
    }
  }
  .ja {
    margin-top: -2rem;
    font-size: v.$val * 2.45;
  }
}

.content {
  margin-top: 8rem;
}

.gallery_image {
  max-width: 800px;
}
</style>
