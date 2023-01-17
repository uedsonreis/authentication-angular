import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
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
        FormsModule,
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}
