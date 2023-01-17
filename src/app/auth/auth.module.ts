import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { AuthService } from './auth.service'
import { LoginComponent } from './login/login.component'

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}
