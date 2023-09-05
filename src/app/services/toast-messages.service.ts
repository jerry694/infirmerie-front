import { Injectable } from '@angular/core';
// import { MessageService } from 'primeng/api/public_api';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastMessagesService {

  constructor(private messageService:MessageService) { }
  show(message:string,tete:string,type:string) {
    this.messageService.add({ severity: type, summary: tete, detail: message });
}
}
