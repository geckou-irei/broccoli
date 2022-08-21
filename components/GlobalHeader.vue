<template>
  <header id="header" :class="$style.header">
    <div :class="$style.inner">
      <div :class="$style.list">
        <h1 :class="$style.logo"><a href="">Broccoli</a></h1>
        <div>
          <a href=""
            ><img
              :class="$style.icon"
              src="../assets/img/instagram.png"
              alt="instagram"
          /></a>
        </div>
      </div>
      <ul :class="$style.list">
        <li><a href="">お問い合わせ</a></li>
        <li><a href="">店舗情報</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader",
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

.header {
  margin: 0 auto;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: f.size("small");
  font-weight: f.weight("bold");
  transform: translateY(-110%);
  transition: opacity 0.6s, transform 0.8s;
  &::after {
    content: "";
    position: absolute;
    margin-top: 5em;
    display: block;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      c.$mainGreen,
      c.$mainGreen 6px,
      transparent 6px,
      transparent 8px
    );
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: 12px 2px;
  }
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo {
  width: 5rem;
  font-size: 1rem;
  border: solid 1px c.$mainGreen;
  text-align: center;
  a {
    display: block;
  }
}

.icon {
  margin-top: 0.1em;
  width: 1.5rem;
  height: 1.5rem;
}

.inner {
  padding: 0 2rem;
  display: flex;
  max-width: 1480px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: c.$mainGreen;
  .list {
    display: flex;
    gap: 0 2rem;
    li {
      a {
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
