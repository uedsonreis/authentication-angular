import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'
import { User } from './user.dto'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static readonly URL: string = "http://localhost:3000/users"

    constructor(private readonly http: HttpClient) {}

    private getOptions(token: string) {
        return {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    }

    public getList() {
        return this.http.get<User[]>(
            UserService.URL,
            this.getOptions(
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlVlZHNvbiBSZWlzIiwidXNlcm5hbWUiOiJ1ZWRzb25yZWlzIiwiaWF0IjoxNjczOTAxNDQ2LCJleHAiOjE2NzM5MDI2NDZ9.pDBpZFRE5YcKOi-4e2crtlhO7ZkQJLeD1ez6jSYC61c'
            )
        )
    }

}
