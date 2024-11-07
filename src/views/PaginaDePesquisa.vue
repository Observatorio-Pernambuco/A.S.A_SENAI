<template>
  <div class="caixaGeralPesquisa">
    <Cabecalho />

    <div class="caixaDePesquisa">
        <div class="titulo">
            <h1>Ambiente de Serviços<br> da Aprendizagem</h1>
        </div>
        <div class="BarraPesquisa">
            <BarraPesquisa />
        </div>
    </div>
        <RodaPe />
  </div>
</template>

<script>
import Cabecalho from "../components/componentsPesquisa/Cabecalho.vue"
import RodaPe from "../components/RodaPe.vue"
import BarraPesquisa from "../components/componentsPesquisa/BarraPesquisa.vue"
export default {
    name: "Home",
    components:{
        Cabecalho,
        RodaPe,
        BarraPesquisa,
    }
}
</script>

<style>
    .caixaGeralPesquisa{
        display: flex;
        flex-direction: column;
        height: 100vh;
        user-select: none;
    }

    .caixaDePesquisa{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        height: 100%;
        .titulo{
            text-align: center;
            font-size: 12px;
            color: #062846;
        }

        .BarraPesquisa{
            margin-bottom: 5%;
        }
    }

    @media screen and (min-width: 1080px) {
        .caixaDePesquisa{
            .titulo{
                font-size: 25px;
                line-height: 1;
            }
        }
    }
</style>