import { createRouter, createWebHistory } from 'vue-router'

import Biblioteca from '../views/Biblioteca.vue'

import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Book from '@/views/Book.vue'
import Finish from '@/views/Finish.vue'
import Sucess from '@/views/Sucess.vue'
import Carrinho from '@/views/Carrinho.vue'


/**
 * Responsável por criar as rotas do site, cada rota tem um arquivo na pasta view que
 * corresponde ao conteudo mostrado na rota.
 */

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        /**
         * Rota para a pagina principal da loja
         */
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path:'/login',
            name: 'login',
            component: Login
        },
        {
            path:'/biblioteca',
            name: 'biblioteca',
            component: Biblioteca},
        {
            path:'/book',
            name: 'book',
            component: Book
        },
        {
            path:'/finalizar',
            name: 'finalizar',
            component: Finish
        },
        {
            path:'/sucess',
            name: 'sucess',
            component: Sucess
        },{
            path:'/carrinho',
            name: 'carrinho',
            component: Carrinho
        }

    ]
})

export default router