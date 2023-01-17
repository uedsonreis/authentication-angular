import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, of } from 'rxjs'
import { User } from './user.dto'
import { Router } from '@angular/router'
import { UserStorageService } from '../services/user.storage.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static readonly URL: string = "http://localhost:3000/users"

    constructor(
        private readonly router: Router,
        private readonly http: HttpClient,
        private readonly storage: UserStorageService,
    ) {}

    private getOptions(token: string) {
        return {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    }

    public getList() {
        const logged = this.storage.getLoggedUser()
        if (logged && logged.token) {

            return this.http.get<User[]>(UserService.URL, this.getOptions(logged.token))
            .pipe(catchError(error => {
                console.error('Error on request users endpoint: ', error)
                this.router.navigate(['login'])
                return of([])
            }))
        
        }
        this.router.navigate(['login'])
        return of([])
    }

    public save(user: User) {
        const logged = this.storage.getLoggedUser()
        if (logged && logged.token) {

            if (user.id > 0) {
                return this.http.put<User | null>(`${UserService.URL}/${user.id}`, user, this.getOptions(logged.token))
                .pipe(catchError(this.handleError))
            } else {
                return this.http.post<User | null>(UserService.URL, user, this.getOptions(logged.token))
                .pipe(catchError(this.handleError))
            }
        }
        this.router.navigate(['login'])
        return of(null)
    }

    public remove(id: number) {
        const logged = this.storage.getLoggedUser()
        if (logged && logged.token) {

            return this.http.delete<boolean>(`${UserService.URL}/${id}`, this.getOptions(logged.token))
            .pipe(catchError(this.handleError))

        }
        this.router.navigate(['login'])
        return of(null)
    }

    private handleError(error: any) {
        console.error('Error on request users endpoint: ', error)
        this.router.navigate(['login'])
        return of(null)
    }

}
