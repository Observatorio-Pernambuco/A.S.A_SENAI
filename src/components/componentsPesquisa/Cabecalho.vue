<template>
    <div class="caixaImagem">
        <img src="../icons/Marca_Observatório-da-Indústria_Prancheta.png" alt="logo do Observatorio ">
    </div>
</template>

<script>
export default {
    name: "cabecalho",
}
</script>

<style>
    .caixaImagem{
        padding: 10px;
        text-align: center;
        img{
            width: 250px;
        }
    }
    @media screen and (min-width: 1080px) {
        .caixaImagem{
            padding: 10px;
            text-align: start;
            img{
                width: 350px;
            }
        }
    }
</style>