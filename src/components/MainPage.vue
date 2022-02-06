<template>
  <div class="main-page-container">
      <div class="main-page-content">
        <img src="../assets/ETH_header.jpg" alt="eth Prague" width="1000" class="section"/>

        <div class="section description">
          <div class="buttons">
            <a href="https://cfp.paralelnipolis.cz/ethprague-2022/" target="_blank" class="buttons-link">
              <button>Apply to speak</button>
            </a>
            <a href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T" target="_blank" class="buttons-link">
              <button>Apply to hack</button>
            </a>
          </div>
          ETHPrague isn’t looking for the next get rich quickly scheme or a groundbreaking DeFi app, instead it aims at the future of society. We want to tackle challenges yet arise in the next decades and we believe Ethereum will play a major role in solving these. The future is in your hands. You decide if we end up living in an authoritarian dystopia or a bright solarpunk utopia.
        </div>
        <div class="section footer">

          <div>
            <div class="footer-block-title">
              connect
            </div>
            
            <div class="social-links">
              <a href="https://t.me/ethprague" class="soc-link" target="_blank">
                <div class="soc-link-icon-container">
                  <img src="../assets/telegram.svg" alt="telegram" class="soc-link-icon"/>
                </div >
              </a>

              <a href="https://twitter.com/EthPrague" class="soc-link" target="_blank">
                <div class="soc-link-icon-container">
                  <img src="../assets/tweet.svg" alt="twitter" class="soc-link-icon"/>
                </div >
              </a>
            </div>

          </div>

          <div>
            <div class="footer-block-title">
              organized by
            </div>
             <a href="https://www.paralelnipolis.cz/o-nas/en/" target="_blank">
              <img class="logo" width="235" src="../assets/paralelniPolis.svg" alt="HCF logo">
            </a>
          </div>

          <div>
            <div class="footer-block-title">
              get in touch
            </div>
            <div class="footer-emails">
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
  .main-page-container {
    min-height: 100vh;
    justify-content: center;
    display: flex;
    background-color: lightgray;
    font-size: 20px;
    line-height: 31px;
  }

  .main-page-content {
    width: 1000px;
    margin: 30px 50px 0 50px;
  }

  .section {
    display: block;
    border-radius: 12px;
    background-color: white;
    width: 100%;
  }

  .description {
    margin-top: 15px;
    padding: 35px 50px 50px;
    -webkit-box-shadow: -5px 7px 15px 0px rgba(0,0,0,0.15); 
    box-shadow: -5px 7px 15px 0px rgba(0,0,0,0.15);
  }

  .footer {
    margin-top: 5px;
    padding: 35px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    -webkit-box-shadow: -5px 7px 15px 0px rgba(0,0,0,0.15); 
    box-shadow: -5px 7px 15px 0px rgba(0,0,0,0.15);
  }

  .footer-block-title {
    font-size: 15px;
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
  }

  .footer-emails {
    font-size: 18px;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    gap: 35px;
  }

  .soc-link-icon-container {
    cursor: pointer;
    border-radius: 100%;
    border: solid 2px var(--col-primary-action);
    display: flex;
  }

  .soc-link-icon-container:hover {
    background-color: var(--col-primary-action);
  }

  .soc-link-icon:hover {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(107%) contrast(102%);
  }

  .buttons {
    margin-bottom: 35px;
    width: 100%;
    display: flex;
    gap: 25px;
    justify-content: space-between;
  }

  .buttons-link {
    width: 100%;
  }

  button {
    font-weight: 300;
    margin: 0;
    letter-spacing: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "Archivo SemiExpanded", Verdana, sans-serif;
    border-radius: 300px;
    padding: 39px;
    font-size: 20px;
    line-height: 31px;
    width: 100%;
    border: solid 2px var(--col-primary-action);
    background-color: white;
    color: var(--col-primary-action);
  }

  button:hover {
    background-color: var(--col-primary-action);
    border: solid 2px var(--col-primary-action);
    color: white;
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  a:hover {
    color: var(--col-primary-action);
  }

  @media (max-width: 680px) {
    .buttons {
      flex-wrap: wrap;
    }

    .description {
      padding: 25px 30px 30px;
    }

    .main-page-content {
      margin: 30px 25px 0 25px;
    }

    .footer {
      gap: 65px;
    }    

    h1 {
      font-size: 2em;
    }

    p {
      padding: 0px;
    }
  }

  @media (max-width: 410px) {
    .main-page-content {
      margin: 30px 10px 0 10px;
    }

    .description {
      padding: 25px 15px 25px 15px;
    }
  }
</style>
