import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../../_services/compte.service';
import { HttpClient } from '@angular/common/http';
import { UploadDocumentService } from '../../../_services/upload-document.service';

@Component({
  selector: 'app-registeraccount',
  templateUrl: './registeraccount.component.html',
  styleUrls: ['./registeraccount.component.scss']
})
export class RegisteraccountComponent implements OnInit {

  constructor(private compteService : CompteService, private httpClient: HttpClient, private uploadDocumentService : UploadDocumentService) { }
  selectedFile!: any;
  selectedFile2: any;
  documents : Array<any> = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  onUpload(event) {
    this.selectedFile = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let doc = {name : this.selectedFile.name, type : "image", content : fileReader.result.toString().split(",")[1]};
      this.documents.push(doc);
    }
    fileReader.readAsDataURL(this.selectedFile);
  }

  onUpload2(event) {
    this.selectedFile2 = event.target.files[0];
    let fileReader2 = new FileReader();
    fileReader2.onload = (e) => {
      let doc = {name : this.selectedFile2.name, type : "image", content : fileReader2.result.toString().split(",")[1]};
      this.documents.push(doc);
    }
    fileReader2.readAsDataURL(this.selectedFile2);
  }

  submit(){
    this.compteService.addAccount({"documents" : this.documents}).subscribe((res=>{
      console.log("success")
    }))
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:3030/image/get/' + this.imageName)
        .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            }
        );
  }

  ngOnInit(): void {
  }

}
