import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core'
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router'
import { UserService } from './user.service'
import { User } from './user.dto'

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User[]> {

    constructor(private readonly userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
        try {
            return this.userService.getList()
        } catch (error) {
            console.error('Error on get user list: ', error)
        }
        
        return of([])
    }
}
