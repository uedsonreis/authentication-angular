import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component'
import { UserComponent } from './user/user.component'
import { UserResolver } from './user/user.resolver'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'login', component: LoginComponent },
    {
        path: 'users', component: UserComponent,
        resolve: {
            users: UserResolver
        }
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}