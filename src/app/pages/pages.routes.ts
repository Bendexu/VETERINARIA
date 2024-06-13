import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { InternamientosComponent } from "./internamientos/internamientos.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { MascotasComponent } from "./mascotas/mascotas.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { ReportesComponent } from "./reportes/reportes.component";
import { HistorialComponent } from "./historial/historial.component";
import { TarifarioComponent } from "./tarifario/tarifario.component";
import { MascotaDetallesComponent } from "./mascota-detalles/mascota-detalles.component";
import { ClienteDetallesComponent } from "./cliente-detalles/cliente-detalles.component";


export const pagesRoutes:Routes = [
    {
        path: 'pages',
        component:PagesComponent,
        children:[
            {
                path:'internamientos',
                component:InternamientosComponent
            },
            {
                path:'clientes',
                component:ClientesComponent
            },
            {
                path:'mascotas',
                component:MascotasComponent
            },
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'agenda',
                component:AgendaComponent
            },
            {
                path:'reportes',
                component:ReportesComponent
            },
            {
                path:'Historial',
                component:HistorialComponent
            },
            {
                path:'Tarifario',
                component:TarifarioComponent
            },
            {
                path:'mascotadetalle',
                component:MascotaDetallesComponent
            },
            {
                path:'clientedetalles',
                component:ClienteDetallesComponent
            },
        ]
    },
]
