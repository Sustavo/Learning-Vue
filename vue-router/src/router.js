import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./views/Home.vue");
const Cursos = () => import("./views/Cursos.vue");
const Curso = () => import("./views/Curso.vue");
const CursoAulas = () => import("./views/CursoAulas.vue");
const CursoDescricao = () => import("./views/CursoDescricao.vue");
const Acoes = () => import("./views/Acoes.vue");
const AcoesDados = () => import("./views/AcoesDados.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        main: Home,
        sidebar: Acoes
      } 
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/acoes",
      components: {
        main: Acoes,
        sidebar: Home
      },
      children: [
        {
          path: ":simbolo",
          component: AcoesDados,
          props: true
        }
      ]
    },
    {
      path: "/cursos",
      component: Cursos,
      props: true,
      beforeEnter: (to, from, next) => {
        next()
      },
      children: [
        {
          name: "curso",
          path: ":curso",
          component: Curso,
          props: true,      
          children: [
            {
              name: "aulas",
              path: "aulas",
              component: CursoAulas
            },
            {
              name: "descricao",
              path: "descricao",
              component: CursoDescricao
            }
          ]
        },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})