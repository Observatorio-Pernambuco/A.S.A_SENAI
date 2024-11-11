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
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
                <div class="listaTitulo">
                    <h1>Auxiliar de Linha de Produção</h1>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
                <hr>
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
            height: 100%;
            margin: auto;
            overflow-y: auto;
            overflow: hidden;

            .caixaInformacoes{
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 5px;
                box-sizing: border-box;
                align-items: center;

                .nomeEmpresa{
                    background-color: #6cc3d55e;
                    border-radius: 30px;
                    width: 300px;
                    height: 25vh;
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
                    width: 300px;
                    height: 100vh;
                    scrollbar-width: none;
                    overflow-y: auto;

                    h1{
                        font-size: 16px;
                        margin-left: 15px;
                    }

                    .caixaEspecificacoes{
                        display: flex;
                        flex-direction: column;
                        margin: 10px 10px;
                        padding: 5px 10px;
                        font-size: 12px;
                        background-color: #6cc3d55e;
                        border-radius: 15px;

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
                gap: 10px;
                width: 100%;

                .opcao1{
                    background-color: #9DB5B9;
                    width: 100%;
                    text-align: center;
                    font-weight: bold;
                    padding: 20px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                .opcao2{
                    background-color: #6cc3d55e;
                    width: 100%;
                    text-align: center;
                    font-weight: bold;
                    padding: 20px;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
            .caixaLista{
                background-color: #6cc3d55e;
                margin-top: 10px;
                border-radius: 10px;
                height: 100vh;
                scrollbar-width: none;
                overflow-y: auto;
                
                hr{
                    border-color: #fff;
                }

                .listaTitulo{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 20px  ;

                    h1{
                        font-size: 16px;
                    }

                    span{
                        cursor: pointer;
                    }
                }

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