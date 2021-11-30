<template>
  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container content">
    <div class="center row">
      <div class=" u-full-width column">
        <h1> ETHPrague </h1>
        <sub id="tagline"> hackathon </sub>

<!--        <h5> 1<sup>st</sup>-2<sup>nd</sup> July 2020</h5>-->
        <h5> 10<sup>th</sup> - 12<sup>th</sup> of June, 2022 </h5>
        <h5> Prague, CZ  </h5>
        <p>
          ETHPrague isn't looking for the next get rich quickly scheme or a groundbreaking DeFi app, instead it aims
          at the future of society. We want to tackle challenges yet arise in the next decades and we
          believe Ethereum will play a major role in solving these. The future is in your hands. You decide if we end up
          living in an authoritarian dystopia or a bright solarpunk utopia.
        </p>
      </div>
    </div>

    <div class="center row">
      <div class="u-full-width column">
        <br>
        <h5> Organized by: </h5>
        <a href="https://www.paralelnipolis.cz/o-nas/en/" target="_blank">
          <img class="logo" src="../assets/Institute_of_Cryptoanarchy_logo.png" alt="HCF logo">
        </a>

        <h5> Follow us</h5>
        <a href="https://twitter.com/EthPrague">
          <img class="social" src="../assets/tw.png" alt="Twitter">
        </a>
        <br>

        <h5> Get in touch</h5>
        <a href="mailto:contact@ethprague.com">
          contact@ethprague.com
        </a>
        <br>
        <a href="mailto:sponsor@ethprague.com">
          sponsor@ethprague.com
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

  .content {
    background-color: rgba(29, 92, 71, 0.93);
    padding: 40px;
    box-shadow: 3px 3px rgba(29, 92, 71, 0.73), 3px 3px 3px rgba(29, 92, 50, 0.83);
    /*border-radius: 45px;*/
  }

  p {
    text-align: justify;
    font-weight: lighter;
    padding: 0 40px;
  }

  .logo {
    filter: grayscale(100%);
    max-width: 350px;
    display: inline;
    margin: 0px 20px 60px 20px;
    filter: invert(30);
  }

  .logo:hover {
    filter: grayscale(0%);
  }

  .social {
    width: 40px;
    display: inline-block;
    margin-bottom: 40px;
    /*filter: grayscale(100%);*/
    filter: invert(1);
  }

  .social:hover {
    filter: invert(0);
  }

  #tagline {
    top: -35px;
  }

  h1 {
    font-weight: bold;
    font-size: 72px;
    margin-top: 40px;
  }

  h5 {
    font-weight: bold;
    line-height: 10px;
    margin-bottom: 40px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #000000;
  }

  @media (max-width: 680px) {
    .logo {
      width: 80%;
    }

    h1 {
      font-size: 2em;
    }

    p {
      padding: 0px;
    }
  }
</style>
