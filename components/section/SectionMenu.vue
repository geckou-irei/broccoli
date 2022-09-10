<template>
  <section :class="$style.section_menu">
    <div :class="$style.container">
      <h2 :class="[$style.lead_title, 'lead_title']">
        <span :class="$style.en"
          ><span :class="$style.en_change">MENU</span>&amp;DRINK</span
        >
        <span :class="$style.ja">メニュー&amp;ドリンク</span>
      </h2>
      <div :class="$style.content">
        <ul :class="$style.menu_list">
          <li :class="[$style.menu_item, 'menu_item']">
            <figure :class="$style.menu_item_image">
              <img src="@/assets/img/menu_01.jpg" alt="" />
            </figure>
            <div :class="$style.menu_item_description">
              <h3 :class="$style.menu_item_title">タルタルチキン丼</h3>
              <div :class="$style.menu_item_text">
                <p>テキストテキストテキスト</p>
                <p>テキストテキストテキスト</p>
                <p>テキストテキストテキスト</p>
              </div>
            </div>
          </li>
          <li :class="[$style.menu_item, 'menu_item']">
            <figure :class="$style.menu_item_image">
              <img src="@/assets/img/menu_02.jpg" alt="" />
            </figure>
            <div :class="$style.menu_item_description">
              <h3 :class="$style.menu_item_title">タルタルチキン丼</h3>
              <div :class="$style.menu_item_text">
                <p>テキストテキストテキスト</p>
                <p>テキストテキストテキスト</p>
                <p>テキストテキストテキスト</p>
              </div>
            </div>
          </li>
          <li :class="[$style.menu_item, 'menu_item']">
            <a :class="$style.menu_item_link" href="/">
              <figure :class="$style.menu_item_image">
                <img src="@/assets/img/menu_03.jpg" alt="" />
              </figure>
              <div :class="$style.menu_item_description">
                <h3 :class="$style.menu_item_title">タルタルチキン丼</h3>
                <div :class="$style.menu_item_text">
                  <p>テキストテキストテキスト</p>
                  <p>テキストテキストテキスト</p>
                  <p>テキストテキストテキスト</p>
                </div>
              </div>
            </a>
          </li>
          <li :class="[$style.menu_item, 'menu_item']">
            <a :class="$style.menu_item_link" href="/">
              <figure :class="$style.menu_item_image">
                <img src="@/assets/img/menu_04.jpg" alt="" />
              </figure>
              <div :class="$style.menu_item_description">
                <h3 :class="$style.menu_item_title">タルタルチキン丼</h3>
                <div :class="$style.menu_item_text">
                  <p>テキストテキストテキスト</p>
                  <p>テキストテキストテキスト</p>
                  <p>テキストテキストテキスト</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionMenu",
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
  align-items: flex-start;
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

.menu_list {
  display: flex;
  gap: 0 3rem;
}
.menu_item {
  max-width: 284px;
  &:nth-of-type(2n) {
    margin-top: 3rem;
    transform: rotate(0.5deg);
  }
  &_title {
    padding: v.$val 0;
    font-size: clamp(0.875rem, 0.75rem + 0.63vw, 1.219rem);
    line-height: 1;
    color: c.$mainBlue;
  }
  &_text {
    display: flex;
    flex-wrap: wrap;
    font-size: clamp(0.75rem, 0.708rem + 0.21vw, 0.875rem);
    p {
      text-align: justify;
    }
  }
}
</style>

<style lang="scss">
.menu_item {
  opacity: 0;
  &.visible0 {
    animation-fill-mode: forwards;
    animation-name: fadeUp;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.12, 0.59, 0.41, 0.95);
    animation-delay: 0.15;
  }
  &.visible1 {
    animation-fill-mode: forwards;
    animation-name: fadeUp;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.12, 0.59, 0.41, 0.95);
    animation-delay: 0.5;
  }
  &.visible2 {
    animation-fill-mode: forwards;
    animation-name: fadeUp;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.12, 0.59, 0.41, 0.95);
    animation-delay: 1;
  }
  &.visible3 {
    animation-fill-mode: forwards;
    animation-name: fadeUp;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.12, 0.59, 0.41, 0.95);
    animation-delay: 1.5;
  }
  &.visible3 {
    animation-fill-mode: forwards;
    animation-name: fadeUp;
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.12, 0.59, 0.41, 0.95);
    animation-delay: 2;
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
