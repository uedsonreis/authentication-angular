import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { User } from './user.dto'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    protected userList: User[] = []

    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ users }) => {
            this.userList = users
            this.userList.push(
                { id: 2, name: 'Fulano de Tal', username: 'fulano.tal' }
            )
        })
    }

}
