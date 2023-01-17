import { Injectable } from '@angular/core'

import { User } from '../user/user.dto'

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {

    private static readonly KEY = '@storage_user_info'

    public getLoggedUser(): User | null {
        const jsonValue = localStorage.getItem(UserStorageService.KEY)
        return jsonValue ? JSON.parse(jsonValue) : null
    }
    
    public setLoggedUser(user: User) {
        const jsonValue = JSON.stringify(user)
        localStorage.setItem(UserStorageService.KEY, jsonValue)
    }

    public removeLoggedUser() {
        localStorage.clear()
    }

}
