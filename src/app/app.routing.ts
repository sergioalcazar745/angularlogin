import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./components/menu/menu.component";
import { LogoutComponent } from "./components/logout/logout.component";

const appRoutes: Routes = [
    {
        path: "", 
        component: MenuComponent,
        children: [
            {
                path: "", component: HomeComponent
            },

            {
                path: "empleados", component: EmpleadosComponent
            },
        ]        
    },   

    {
        path: "login/auth", component: LoginComponent
    },

    {
        path: "logout", component: LogoutComponent
    },
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)