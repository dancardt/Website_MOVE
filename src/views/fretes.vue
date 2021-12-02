<template>
    <section class="section">
        <h1 class="title"> Meus Fretes</h1>

<template>
    <section>

        <b-collapse
            class="card"
            animation="slide"
            v-for="(frete, index) of fretes"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button"
                >
                    <p class="card-header-title">
                        N° {{ frete.id }} - {{ frete.enderecoOrigem }} - {{ frete.situacao }}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>
            <div class="card-content">
                <div class="content">
                    <b>Origem</b>: {{ frete.enderecoOrigem }}<br>
                    <b>Destino</b>: {{ frete.enderecoDestino }}<br>
                    <b>Data</b>: {{ frete.data }}<br>
                   <b>Carga</b>: {{ frete.descricaoCarga }}<br>
                   <div v-if="frete.freteiro">
                    <b>Freteiro</b>: {{ frete.freteiro.nome }} - {{ frete.freteiro.telefone }}<br>
                   </div>

                </div>
            </div>
        </b-collapse>

    </section>
</template>

      

    </section>
</template>


<script>
    export default {
        data() {
            return {
                isOpen: 0,
                fretes: []
            }
        },
        
        created() {
          var self = this;
          this.axios.get('fretes/').then((response) => {
            self.fretes = response.data;
          })
        }
        
        
        
    }
</script>