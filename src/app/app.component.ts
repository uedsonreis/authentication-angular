import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { UserStorageService } from './services/user.storage.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'authentication-angular'

    constructor(
        private readonly storage: UserStorageService,
        private readonly router: Router,
    ) {}
    
    protected logOff() {
        this.storage.removeLoggedUser()
        this.router.navigate(['login'])
    }

}
