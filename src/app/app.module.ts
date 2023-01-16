import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        AuthModule,
        UserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}