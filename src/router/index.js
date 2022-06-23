import { createRouter, createWebHistory } from 'vue-router'
import ListComponent from '../components/ListComponent'
import CreateComponent from '../components/CreateComponent.vue'
import EditComponent from '../components/EditComponent.vue'
import Card from '../components/Card.vue'
import oneauteur from '../components/oneauteur.vue'
import auteur from '../components/auteur.vue'
import datatableLivre from '../components/datatableLivre.vue'
import EditAuteur from '../components/EditAuteur.vue'
import caroussel from '../components/caroussel.vue'
import createAuteur from '../components/createAuteur.vue'
import oneLivres from '../components/oneLivres.vue'
const routes = [
{
path: '/',
name: 'Home',
component: ListComponent
},
{
path: '/add',
name: 'Ajout',
component: CreateComponent
},
{
path: '/edit/:id',
name: 'Modification',
component: EditComponent
},
{
    path: '/auteur',
    name: 'auteur',
    component: auteur
    },
{
    path: '/oneauteur/:AT',
    name: 'oneauteur',
    component: oneauteur
    },
    {
        path: '/oneLivres/:id',
        name: 'oneLivres',
        component: oneLivres
        },
    {
        path: '/datatableLivre',
        name: 'datatableLivre',
        component: datatableLivre
        },
{
    path: '/Card',
    name: 'Card',
    component:Card
    },
    {
        path: '/EditAuteur/:AT',
        name: 'EditAuteur',
        component: EditAuteur
        },
        {
            path: '/caroussel',
            name: 'caroussel',
            component: caroussel
            },
            {
                path: '/createAuteur',
                name: 'createAuteur',
                component: createAuteur
                }
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router