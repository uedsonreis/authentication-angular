import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { UserComponent } from './user.component'

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MatIconModule,
    ]
})
export class UserModule {}

