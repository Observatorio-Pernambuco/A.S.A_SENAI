import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/PaginaDePesquisa.vue'
import Visualizacao from '../views/PaginaDeVisualizacao.vue'

const routes = [

  { path: '/', 
  name: 'Home',
  component: Home },

  { path: '/empresa',
  name: 'Visualizacao',
  component: Visualizacao,
//   meta: {requiresAuth: true} 
  },

//   { path: '/:catchAll(.*)',
//   redirect:  to => {
//     const isAuthenticated = !!localStorage.getItem('token');
//     return isAuthenticated ? '/home' : '/login'; 
//     }
//   }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('token');  Verifique se o token de autenticação existe

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//      Se a rota requer autenticação
//     if (isAuthenticated) {
//       next();  Permite a navegação
//     } else {
//       next('/login');  Redireciona para a página de login
//     }
//   } else {
//     next();  Permite a navegação para rotas públicas
//   }
// });


export default router;