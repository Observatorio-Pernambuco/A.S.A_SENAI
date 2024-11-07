<template>
    <div class="caixaRodaPe">
        <div class="caixaLogo">
            <img src="../components/icons/MarcasSistemaFIEPE-SENAI.png" alt="logo do senai">
        </div>
        <div class="caixaDoParagrafo">
            <p>Observatório da Indústria do Senai-PE © 2024</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "rodaPe",

}
</script>

<style>
    .caixaRodaPe{
        .caixaLogo{
            text-align: center;
            img{
                width: 100px;
            }
        }
    
        .caixaDoParagrafo{
            background-color: #E7490F;
            text-align: center;
            padding: 1px;
            p{
                font-size: 12px;
                color: white;
            }
        }
    }

    @media screen and (min-width: 1080px) {
        .caixaDoParagrafo{
            padding: 5px;
        }
        .caixaDoParagrafo{
            p{
                font-size: 14px;
            }
        }
    }
</style>