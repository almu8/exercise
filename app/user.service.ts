import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './models/user';

@Injectable()
export class UserService{

    private usersUrl : string = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http){}

    //Getting list of users from server
    getUsers() : Promise<User[]> {
        return this.http.get(this.usersUrl).toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    //Getting list of users from server and select one with id
    getUser(id: number) : Promise<User>{
        return this.getUsers().then(users => users.find(user => user.id === id));
    }

    //Show info about error
    private handleError(error: any): Promise<any> {
        //Todo normal error window with message)
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}