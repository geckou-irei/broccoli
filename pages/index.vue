<template>
  <main id="frontPage">
    <LoadingAnimetion
      :v-if="isShow"
      :class="[$style.loading_anime, isShow ? '' : $style.hide]"
    />
    <GlobalHeader />
    <GlobalMenu :sections="sections" />
    <div
      :class="[$style.wrapper, 'site_main_content', isShow ? '' : $style.show]"
    >
      <div :class="$style.container" data-scroll-container>
        <MainVisual data-scroll-section data-scroll-section-id="section0" />
        <SectionConcept :class="[$style.space, 'concept']" />
        <SectionMenu :class="[$style.space, $style.menu]" />
        <SectionGallery :class="[$style.space, $style.gallery]" />
      </div>
    </div>
  </main>
</template>

<script>
import { Power4, Circ } from "gsap";
export default {
  name: "FrontPage",
  data() {
    return {
      lmS: null,
      isShow: true,
      currentSection: "top",
      sections: [
        {
          id: "concept",
          name: "CONCEPT",
          nameJp: "コンセプト",
          component: "SectionConcept",
        },
        {
          id: "menu",
          name: "MENU&DRINK",
          nameJp: "メニュー&ドリンク",
          component: "SectionMenu",
        },
        {
          id: "gallery",
          name: "GALLERY",
          nameJp: "ギャラリー",
          component: "SectionGallery",
        },
        {
          id: "location",
          name: "LOCATION",
          nameJp: "ロケーション",
          component: "SectionLocation",
        },
      ],
    };
  },
  mounted() {
    this.locoMotive();
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false;
      }, 2000);
    });
    this.mainVisualAnimetion();
  },
  methods: {
    locoMotive() {
      const locoScroll = new this.locomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
      locoScroll.on("scroll", this.$ScrollTrigger.update);
      this.$ScrollTrigger.refresh();
      this.$ScrollTrigger.scrollerProxy(".site_main_content", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector(".site_main_content").style.transform
          ? "transform"
          : "fixed",
      });
      this.$gsap.registerPlugin(this.$ScrollTrigger);
      const conceptFades = document.querySelectorAll(".concept_fade");
      console.log(conceptFades);

      conceptFades.forEach((conceptFade, index) => {
        this.$gsap.to(conceptFade, {
          scrollTrigger: {
            trigger: conceptFade,
            start: "top bottom-=300",
            end: "top top",
            once: true,
            toggleClass: { targets: conceptFade, className: "visible" },
          },
        });
      });
    },
    mainVisualAnimetion() {
      const tl = this.$gsap.timeline();
      const mainImageBloc = document.getElementById("main_image_bloc");
      const mainImage = document.getElementById("main_image");
      const mainTitle01 = document.querySelectorAll(".main_title_01");
      const mainTitle02 = document.querySelectorAll(".main_title_02");
      const mainTitle03 = document.querySelectorAll(".main_title_03");
      const header = document.getElementById("header");
      tl.to(
        mainImageBloc,
        {
          y: 0,
          opacity: 1,
        },
        2
      )
        .to(
          mainImage,
          {
            scale: 1,
            opacity: 1,
          },
          3
        )
        .to(
          mainTitle01,
          {
            y: 0,
            opacity: 1,
            ease: Power4.out,
          },
          "-=.5"
        )
        .to(
          mainTitle02,
          {
            y: 0,
            opacity: 1,
            ease: Power4.out,
          },
          "-=.35"
        )
        .to(
          mainTitle03,
          {
            y: 0,
            opacity: 1,
            ease: Power4.out,
          },
          "-=.3"
        )
        .to(
          header,
          {
            y: 0,
            opacity: 1,
            ease: Circ.out,
          },
          "+=.2"
        );
    },
  },
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
  min-width: 1000px;
  opacity: 0;
  transition: all 1.8s;
  &.show {
    opacity: 1;
  }
}

.space {
  margin-top: 11rem;
  padding: 0 2rem 0 8rem;
}

.container {
  margin: 0 auto;
  max-width: 1480px;
  height: 100vh;
}
</style>
