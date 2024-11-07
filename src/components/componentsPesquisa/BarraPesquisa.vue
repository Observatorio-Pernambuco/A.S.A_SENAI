<template>
  <div class="caixaPesquisa">
    <div class="inputCNPJ">
      <input type="text" maxlength="18" placeholder="Digite seu CNPJ">
    </div>
    <div class="inputBotao">
      <span class="material-icons iconePesquisa">search</span>
      <input type="button" value="">
    </div>
  </div>
</template>

<script>
export default {
    name: "barraPesquisa",
}
</script>

<style>
  .caixaPesquisa{
    display: flex;
    align-items: center;
    gap: 5px;
    border: solid 1px #164193;
    border-radius: 50px;
    width: 300px;
    margin: auto;

    .inputCNPJ{
      width: 280px;
      input{
        color: #062846;
        width: 100%;
        padding: 15px;
        border-radius: 50px;
        border: none;
        background: transparent;
      }
      input:focus{
        outline: 0;
      }
      input::placeholder{
        color: #062846;
      }
    }

    .inputBotao{
      background-color: #E7490F;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 50px;
      cursor: pointer;

      .iconePesquisa{
        color: white;
        font-size: 20px;
        margin: 5px;
        user-select: none;
      }

      input{
        border: none;
        background-color: transparent;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .caixaPesquisa{
      width: 600px;

      .inputCNPJ{
        width: 570px;
        input{
          padding: 20px;
        }
      }
    }
    .inputBotao{
      .iconePesquisa{
        margin: 2px;
      }
    }
  }
</style>