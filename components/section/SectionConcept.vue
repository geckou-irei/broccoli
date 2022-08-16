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
        <SectionConceptLead />
      </div>
    </div>
  </section>
</template>

<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: "SectionConcept",
  props: {
    heading: {
      required: true,
      type: String,
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
</style>
