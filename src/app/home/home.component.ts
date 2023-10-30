import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  maxSize:number = 100000000;
  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
          }
          
          this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
          console.log("🚀 ~ file: home.component.ts:24 ~ HomeComponent ~ onUpload ~ this.uploadedFiles:", this.uploadedFiles)
    }

    upload(event:any){
      console.log(event.files);
      
    }

}
