import { Component } from '@angular/core'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    protected username: string = ''
    protected password: string = ''

    constructor(
        private readonly service: AuthService
    ) {}

    protected signIn() {
        this.service.login(this.username, this.password).subscribe(data => {
            if (data.token) {
                alert('Succeffuly')
            } else {
                alert('Login/password invalid!')
            }
        })
    }

}
