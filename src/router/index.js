import Vue from "vue"
import Router from "vue-router"
import Home from "../pages/Home"
import Kamban from "@/pages/kamban/Kamban"

Vue.use(Router) 

const routes = [
    {
        name: "nome",
        path: "/",
        component: Home
    },
    {
        name: "kamban",
        path: "/kamban",
        component: Kamban
    }
]

const router = new Router({routes})

export default router