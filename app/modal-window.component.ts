import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from './models/user';
import { UserService } from './user.service';

@Component({
    selector: 'modal-window',
    templateUrl: 'templates/modal-window.component.html',
    styleUrls:  ['css/bootstrap.css',
                 'css/modal-window.component.css']
})
export class ModalWindow implements OnInit{

    user: User;

    @ViewChild('modalWindow')
    modal: ModalComponent;

    constructor(private userService: UserService,
                private router: Router,
                private route: ActivatedRoute){}

    close(): void {
        this.modal.close();
        let link = ['/'];
        this.router.navigate(link);
    }

    open(): void {
        this.modal.open();
    }
    
    ngOnInit(): void{

        //Read params from request
        this.route.params.forEach((params: Params)=>{

            //If path has user id, show modal windows for that user
            if(params["id"]) {
                let id = +params["id"];
                this.userService.getUser(id).then(user => {
                    if (user) {
                        this.user = user;
                        this.open();
                    }
                });
            }
            
        })

    }
}
