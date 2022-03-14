<template> 
  <div class="footer">

    <div>
      <div class="footer__block-title">
        connect
      </div>
      
      <div class="footer__social-links">
        <a href="https://t.me/ethprague" class="soc-link" target="_blank">
          <div class="footer__soc-link-icon-container">
            <img src="../assets/telegram.svg" alt="telegram" class="footer__soc-link-icon"/>
          </div >
        </a>

        <a href="https://twitter.com/EthPrague" class="soc-link" target="_blank">
          <div class="footer__soc-link-icon-container">
            <img src="../assets/twitter.svg" alt="twitter" class="footer__soc-link-icon"/>
          </div >
        </a>
      </div>

    </div>

    <div>
      <div class="footer__block-title">
        organized by
      </div>
      <a href="https://www.paralelnipolis.cz/o-nas/en/" target="_blank">
      <div>
        <img class="footer__image-institute-of-crypto" width="235" src="../assets/InstitutCrypto.svg" alt="IoC logo">
      </div>
      <div>
        <img class="footer__image-paralelni-polis" width="235" src="../assets/paralelni-polis.svg" alt="Paralelni Polis logo">
      </div>
      </a>
    </div>

    <div>
      <div class="footer__block-title">
        get in touch
      </div>
      <div class="footer__emails">
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

<script setup lang="ts">

</script>

<style scoped>
  .footer {
    width: 100%;
    padding: 50px 0 100px;
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    background-color: var(--col-primary-action);
  }

  .footer__block-title {
    font-size: 15px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }

  .footer__emails {
    font-size: 18px;
    color: white;
  }

  .footer__social-links {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: white;
  }

  .footer__soc-link-icon-container {
    cursor: pointer;
    border-radius: 100%;
    border: solid 2px var(--col-primary-action);
    display: flex;
  }

  .footer__soc-link-icon-container:hover {
    background-color: var(--col-primary-action);
  }

  .footer__soc-link-icon {
    width: 55px
  }
  .footer__soc-link-icon:hover {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(107%) contrast(102%);
  }

  .footer__image-institute-of-crypto {
    margin-top: 15px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(107%) contrast(102%);
  }

  .footer__image-paralelni-polis {
    margin-top: 25px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(107%) contrast(102%);
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: var(--col-primary-accent);
    text-decoration: underline;
  }

  @media (max-width: 680px) {

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

</style>