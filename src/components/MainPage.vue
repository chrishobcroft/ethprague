<template>
  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="center row">
      <div class="u-full-width column" style="margin-top: 25%">
        <h1> ETHPrague </h1>
        <sub id="tagline"> hackathon </sub>

<!--        <h5> 1<sup>st</sup>-2<sup>nd</sup> July 2020</h5>-->
        <h5> Someday in 2020 </h5>
        <h5> Prague, CZ  </h5>

<!--        <p>-->
<!--          Let's all gather back in Prague and focus on more conciseness problems rather than building more dapps.-->
<!--          Through a series of workshops we aim to identify and tackle major issues of adoption and discovering security-->
<!--          loopholes in existing dapps. We won't prefer a ready to ship products but rather new techniques and exploits-->
<!--          that were discovered throughout the event.-->
<!--        </p>-->
        <br>
        <p>
          ETHPrague isn't looking for the next get rich quickly scheme or a groundbreaking DeFi app, instead it aims to
          tackle the underlying issues of how decentralized applications can be securely used even by your mom (you are
          like 20.. c'mon.. she is not too old)!
        </p>

        <br>
        <p> <b> collaboration of: </b></p>
        <a href="https://decentralala.com/" target="_blank">
          <img class="logo" src="../assets/dod.png" alt="DoD logo">
        </a>

        <a href="https://www.paralelnipolis.cz/o-nas/en/" target="_blank">
          <img class="logo" src="../assets/head.png" alt="HCF logo">
        </a>

        <br>
        <p> follow us</p>
        <a href="https://twitter.com/EthPrague">
          <img class="social" src="../assets/tw.png" alt="Twitter">
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>

  .center {
    text-align: center;
  }

  .logo {
    filter: grayscale(100%);
    width: 150px;
    height: 150px;
    display: inline;
    margin: 20px 20px
  }

  .logo:hover {
    filter: grayscale(0%);
  }

  .social {
    width: 40px;
    display: inline-block;
    margin-bottom: 40px;
  }

  #tagline {
    top: -35px;
  }

  h1 {
    font-weight: bold;
    font-size: 54px;
  }
  h5 {
    font-weight: bold;
    line-height: 10px;
  }
</style>
