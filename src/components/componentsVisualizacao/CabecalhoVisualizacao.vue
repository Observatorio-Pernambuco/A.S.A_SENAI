<template>
  <div class="caixaGeralCabecalhoVisualizacao">
    <div class="caixaLogos">
        <div class="logoSenai">
            <img src="../icons/MarcasSistemaFIEPE-SENAI_branca-semAssinatura.png" alt="logo do Senai">
        </div>
        <p>l</p>
        <div class="logoObservatorio">
            <img src="../icons/LogoObservatorioBranca.png" alt="logo do Observatorio">
        </div>
    </div>
    <div class="cabecalho">
        <BarraPesquisa />
    </div>
  </div>
</template>

<script>
import BarraPesquisa from '../componentsPesquisa/BarraPesquisa.vue';
export default {
    name: 'cabecalhoVisualizacao',
    components:{
        BarraPesquisa,
    }
}
</script>

<style>
    .caixaGeralCabecalhoVisualizacao{
        display: flex;
        align-items: center;
        padding: 5px 10px 5px 10px;
        background: #164193;

        .caixaLogos{
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px;
            margin-right: 50px;

            .logoSenai{
                img{
                    width: 100px;
                }
            }
            p{
                color: white;
            }
            .logoObservatorio{
                img{
                    width: 200px;
                }
            }
        }
        .cabecalho{
            background-color: white;
            border-radius: 50px;
        }
    }
</style>