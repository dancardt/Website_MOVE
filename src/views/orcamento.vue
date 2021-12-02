<template>
    <section class="section">
        <h1 class="title">Solicitação de Orçamento</h1>
        
      <section class="modal-card-body">
                 
                
                <b-field label="Endereço Origem">
                    <b-input
                        type="text"
                        v-model="frete.enderecoOrigem"
                        placeholder="Digite aqui o endereço de origem do frete"
                        required>
                    </b-input>
                </b-field> 

                <b-field label="Endereço Destino">
                    <b-input
                        type="text"
                        v-model="frete.enderecoDestino"
                        placeholder="Digite aqui o endereço de destino do frete"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Descrição da Carga">
                    <b-input
                        type="text"
                        v-model="frete.descricaoCarga"
                        placeholder="Descreva com detalhes a sua carga a ser transportada"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Data Prevista">
                    <date-pick v-model="frete.data"
                         :format="'DD/MM/YYYY'"
                         :displayFormat="'DD/MM/YYYY'"
                         >

             </date-pick>
                </b-field>

                <b-button
                    label="Faça o seu Orçamento"
                    type="is-primary"
                    @click="cadastrar()" />
                                               
          
            </section>


    </section>
</template>

<script>
import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';
  
export default {
  components: {DatePick},

    data(){
        return {
            frete: {
              
            },
            
        }
    },  
    
    methods: {
      cadastrar() {
          var self = this;
               
           
          //Chama a api para criar o usuário
          this.axios.post('frete-create/', this.frete).then((response) => {
            console.log(response);
            //Fecha o modal
            
            //Mostra a mensagem de sucesso
            self.$buefy.dialog.alert('Solicitação de frete realizada com sucesso!')
            self.$router.push({ name: 'Fretes', force:true, reload:true });
          })      
            
      }
    }  
}
</script>