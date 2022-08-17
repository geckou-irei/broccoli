<template>
  <section :class="$style.section_concept">
    <div :class="$style.container">
      <h2 :class="$style.lead_title">
        <span :class="$style.en"
          ><span :class="$style.en_change">CON</span>CEPT</span
        >
        <span :class="$style.ja">コンセプト</span>
      </h2>
      <div :class="$style.content">
        <SectionConceptLead
          :visible="visible"
          v-inview:enter="
            () => {
              visible = true;
            }
          "
        />
        <div :class="$style.section_concept_image">
          <div :class="$style.section_concept_image_container">
            <figure>
              <img src="~/assets/img/concept_01.png" alt="" />
            </figure>
            <div :class="$style.section_concept_image_text">
              <p v-for="item in 4" :key="item">
                ダミーテキストダミーテキストダミーテキスト<br />
                ダミーテキストダミーテキストダミーテキスト
              </p>
            </div>
            <figure>
              <img src="~/assets/img/concept_02.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "SectionConcept",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" module>
@use "~/assets/scss/value" as v;
@use "~/assets/scss/font" as f;
@use "~/assets/scss/color" as c;

.lead_title {
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

.section_concept_image {
  margin-top: 8rem;
  &_container {
    display: flex;
  }
  figure {
    width: 20rem;
    height: auto;
    &:nth-of-type(2) {
      margin-top: 16rem;
    }
  }
  &_text {
    padding: 0 2rem;
    margin-top: 8rem;
    font-size: clamp(0.75rem, 0.708rem + 0.21vw, 0.875rem);
    white-space: nowrap;
    p {
      &:not(:first-of-type) {
        margin-top: 2rem;
      }
    }
  }
}
</style>
