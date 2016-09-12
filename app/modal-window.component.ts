import { Component , ViewChild} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { User } from './models/user';

@Component({
    selector: 'modal-window',
    templateUrl: 'templates/modal-window.component.html',
    styleUrls:  ['css/bootstrap.css',
                 'css/modal-window.component.css']
})
export class ModalWindow {

    user: User;

    @ViewChild('modalWindow')
    modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

    setUser(user: User){
        this.user = user;
        this.open();
    }
}
