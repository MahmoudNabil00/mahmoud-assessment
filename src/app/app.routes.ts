import { Routes } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

export const routes: Routes = [
    {
        path:'',component:MasterComponent,children:[
            {
                path:'dashboard',component:DashboardComponent,
            },
            {
                path:'add-user',component:AddUserComponent,
            },
            {
                path:'',pathMatch:'full',redirectTo:(state)=>{
                    return 'dashboard'
                }
            },
            { path: '**', redirectTo: 'dashboard' }   
        ]
    }
];
