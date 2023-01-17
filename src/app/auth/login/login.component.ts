import { catchError, of } from 'rxjs'
import { Router } from '@angular/router'
import { Component } from '@angular/core'

import { AuthService } from '../auth.service'
import { UserStorageService } from 'src/app/services/user.storage.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    protected username: string = ''
    protected password: string = ''

    constructor(
        private readonly router: Router,
        private readonly service: AuthService,
        private readonly storage: UserStorageService,
    ) {}

    protected signIn() {
        this.service.login(this.username, this.password)
            .pipe(catchError(error => {
                return of({ token: null })
            })).subscribe(data => {
                if (data.token) {
                    this.storage.setLoggedUser(data)
                    this.clearFields()
                    this.router.navigate(['users'])
                } else {
                    alert('Login inválido!')
                }
            })
    }

    private clearFields() {
        this.username = ''
        this.password = ''
    }

}
