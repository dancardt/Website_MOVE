<template>
  <div>
     <section class="hero" :style="{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', height: '700px', backgroundImage: 'url(' + require('@/assets/smiling-dude.png') + ')' }">
      <div class="hero-body has-text-centered">
        <p>
          <span class="has-text-info is-size-1 m-0 p-0" style="text-shadow: -2px 2px 4px #666666">MOVA</span> 
          <br>
          <span class="has-text-primary is-size-1 m-0 p-0" style="text-shadow: -2px 2px 4px #666666;">O QUE PRECISAR</span>
        </p>
        <p class="has-text-white is-size-3	">
          ON DEMAND DELIVERY
        </p>
      </div>
      <div class="columns is-centered">-
        <div class="column is-narrow">
      
          <div class="box has-background-primary has-text-white has-text-centered is-size-3 m-0 p-0 is-narrow p-5 pt-6 pb-6">
            <div class="columns is-centered is-vcentered">
              <div class="column is-narrow">Faça seu cadastro e peça um orçamento!</div>
            </div>
            <div class="buttons is-centered is-vcentered">
               <a class="button is-info" @click="entrarCadastrar()">
                 <strong>Fazer orçamento</strong>
               </a>
             </div>

          </div>
        </div>
      </div>
      <section class="hero" style="height: 100px; background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255, 146, 79, 1));">
      </section>
      <section class="hero has-background-info" style="height: 100px;">
      </section>      
    </section>

    

  </div>
</template>]


<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },  
    methods: {
      posLogin(response) {
        var self = this;
        console.log('resposta do login');
        console.log('logado', response);
        var data = response.data;
        if(data && data.id) {
          self.$store.dispatch('setCurrentUser', data);
          self.axios.get('currentusuario/').then((responseUsuario) => {
            console.log('usuario logado');
            console.log(responseUsuario.data);
            //Coloque aqui a rota para quem já está cadastrado
            self.$router.push({ name: 'Home', force:true, reload:true });
          }).catch(function (error) {
            console.log('nao existe usuario cadastrado', error)
            //Coloque aqui a sua rota de cadastro
            self.$router.push({ name: 'CadastroCliente', force:true, reload:true });
          })
        }
      },
      entrarCadastrar() {
        var provider = new GoogleAuthProvider();
        var self = this;
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            var pass = result.user.uid;
            var email = result.user.email;
            console.log(email, pass);
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', pass);
            
            self.axios.post('login/', formData).then((response) => {
              self.posLogin(response);
            }).catch(function (error) {
              console.log('error', error);
              if (error.response && error.response.data) {
                var user = {
                  username: email,
                  password: pass
                };
                self.axios.post('user-registration/', user).then((responseUr) => {
                  console.log(responseUr);
                  self.axios.post('login/', formData).then((responseLogin) => {
                    self.posLogin(responseLogin);
                  });
                });
              }
              
            });
        }).catch((error) => {
            console.log(error);
        });
      },
      sair() {      
        var self = this;
        this.axios.get('logout/').then((responseLogout) => {
          console.log('logout', responseLogout);
          self.$store.dispatch('setCurrentUser', null);
          self.$router.push({ name: 'Home', force:true, reload:true });
        });
      }
    }
}
</script>
