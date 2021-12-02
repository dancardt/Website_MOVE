import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import Orcamento from '@/views/orcamento.vue';
import CadastroCliente from '@/views/cadastro-cliente.vue';
import Fretes from '@/views/fretes.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    }, 
    {
        path: '/orcamento',
        name: 'Orcamento',
        component: Orcamento,
        meta: {  }
    },
    {
        path: '/cadastro-cliente',
        name: 'CadastroCliente',
        component: CadastroCliente,
        meta: {  }
    },
    {
        path: '/fretes',
        name: 'Fretes',
        component: Fretes,
        meta: {  }
    },    
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
