import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private static readonly URL: string = "http://localhost:3000/auth/login"

    constructor(private readonly http: HttpClient) {}

    public login(username: string, password: string) {
        return this.http.post<{ token: string }>(AuthService.URL, { username, password })
    }

}
