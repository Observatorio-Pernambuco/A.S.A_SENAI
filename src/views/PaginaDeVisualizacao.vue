<template>
  <div class="caixaGeralVisualizacao">

    <div class="cabecalho">
        <CabecalhoVisualizacao />
    </div>

    <div class="caixaDeVisualizacao">
        <div class="caixaInformacoes">
            <div class="nomeEmpresa">
                <h1>FCA FIAT CHRYSLER AUTOMOVEIS BRASIL LTDA.</h1>
                <p> <strong>CNPJ:</strong> 16.701.716/0034-14</p>
            </div>
            <div class="informacoesEmpresa">
                <h1>Informações</h1> 
                <div class="caixaEspecificacoes">
                    <h1>Ultima Atualização:</h1>
                    <p>17/09/2024 21:00</p>

                    <h1>Razão Social:</h1>
                    <p>FCA FIAT CHRYSLER AUTOMOVEIS BRASIL LTDA.</p>

                    <h1>Nome Fantasia:</h1>
                    <p>-</p>

                    <h1>Situação Cadastral:</h1>
                    <p>ATIVA</p>
                    
                    <h1>Data da Situação:</h1>
                    <p>10/04/2012</p>

                    <h1>Motivo da Situação:</h1>
                    <p>SEM MOTIVO</p>

                    <h1>Data de Abertura:</h1>
                    <p>10/04/2012</p>

                    <h1>Matriz ou Filial:</h1>
                    <p>FILIAL</p>

                    <h1>Natureza Jurídica:</h1>
                    <p>2062 - SOCIEDADE EMPRESÁRIA LIMITADA</p>
                </div>
            </div>
        </div>

        <div class="caixaCursos">
            <div class="caixaOpcoes">
                <div class="opcao1">Cursos que o SENAI já atende a sua empresa</div>
                <div class="opcao2">Cursos que o SENAI pode atender a sua empresa</div>
            </div>
            <div class="caixaLista">
                a
            </div>
        </div>

    </div>

    <div class="rodaPe">
        <RodaPe />
    </div>
  </div>
</template>

<script>
import CabecalhoVisualizacao from '../components/componentsVisualizacao/CabecalhoVisualizacao.vue';
import RodaPe from '../components/RodaPe.vue';

export default {
    components:{
        CabecalhoVisualizacao,
        RodaPe,
    }
}
</script>

<style>
    .caixaGeralVisualizacao{
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: #062846;

        .cabecalho{
            flex-shrink: 0;
        }

        .caixaDeVisualizacao{
            display: flex;
            flex: 1;
            flex-direction: row;
            gap: 10px;
            max-width: 2000px;
            margin: auto;
            overflow-y: auto;

            .caixaInformacoes{
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 5px;
                box-sizing: border-box;
                height: 99%;
                align-items: center;
                max-height: 2000px;

                .nomeEmpresa{
                    background-color: #6cc3d55e;
                    border-radius: 30px;
                    width: 300px;
                    height: 30%;
                    align-content: center;

                    h1{
                        font-size: 20px;
                        text-align: center;
                    }
                    p{
                        text-align: center;
                    }
                }
                .informacoesEmpresa{
                    background-color: #6cc3d55e;
                    border-radius: 30px;
                    height: 75%;
                    width: 300px;
                    max-height: 67%;

                    h1{
                        font-size: 16px;
                        margin-left: 15px;
                    }

                    .caixaEspecificacoes{
                        margin: 0px 10px;
                        padding: 5px 10px;
                        font-size: 12px;
                        background-color: #6cc3d55e;
                        border-radius: 15px;
                        scrollbar-width: none;
                        overflow-y: auto;
                        max-height: 80%;

                        h1{
                            font-size: 12px;
                            margin: 0;
                        }
                    }
                }
            }
        }

        .caixaCursos{
            display: flex;
            flex-direction: column;
            /* background-color: aqua; */
            width: 75vw;
            margin: 5px 0px;
            .caixaOpcoes{
                display: flex;
                justify-content: space-evenly;
                width: 100%;

                .opcao1{
                    background-color: #9DB5B9;
                    width: 100%;
                    text-align: center;
                    font-weight: bold;
                    padding: 20px;
                    border-radius: 10px;
                }
                .opcao2{
                    background-color: #6cc3d55e;
                    width: 100%;
                    text-align: center;
                    font-weight: bold;
                    padding: 20px;
                    border-radius: 10px;
                }
            }
            .caixaLista{

            }
        }

        .rodaPe{
            flex-shrink: 0;
            img{
                display: none;

            }
        }
    }
</style>