import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { User } from './user.dto'
import { UserService } from './user.service'

function cleanUser() {
    return {
        id: 0, name: '', username: '', passwword: ''
    } as User
}

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    protected userList: User[] = []
    protected editUser: User = cleanUser()
    protected showNewUserPanel: boolean = false

    constructor(
        private readonly userService: UserService,
        private readonly activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ users }) => {
            this.userList = users
        })
    }

    private fetchUsers() {
        this.userService.getList().subscribe(users => {
            this.userList = users
        })
    }

    protected enableNewUserPanel(user?: User) {
        if (user) this.editUser = { ...user }
        this.showNewUserPanel = true
    }

    protected saveUser() {
        this.userService.save(this.editUser).subscribe(saved => {
            if (saved && saved.id) {
                this.fetchUsers()
                this.editUser = cleanUser()
                this.showNewUserPanel = false
            } else {
                alert('Usuário já cadastrado!')
            }
        })
    }

    protected cancel() {
        this.editUser = cleanUser()
        this.showNewUserPanel = false
    }

    protected remove(id: number) {
        this.userService.remove(id).subscribe(removed => this.fetchUsers())
    }

}
