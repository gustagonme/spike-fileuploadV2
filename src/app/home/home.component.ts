import { HttpClient } from '@angular/common/http';
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

    constructor(private messageService: MessageService, private http: HttpClient) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
          }
          
          this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    upload(event:any){
     const files:any = event.files;
     const path:string = "http://localhost:8080/api/upload";
      const formData: FormData = new FormData();
      formData.append("file", files[0])
    // for (let i = 0; i < files.length; i++) {
    //   formData.append(i.toString(), files[i], files[i].name);
    // }

    this.http.post(path, formData).subscribe(
      (data =>{
        console.log(data);
        
      })
    )
      
    }

}
