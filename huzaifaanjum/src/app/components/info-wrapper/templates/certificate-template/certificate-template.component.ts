import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-certificate-template',
  templateUrl: './certificate-template.component.html',
  styleUrls: ['./certificate-template.component.css']
})
export class CertificateTemplateComponent implements OnInit {
  imgSrc: any;

  constructor(
    public dialogRef: MatDialogRef<CertificateTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
    this.imgSrc = this.data;
  }

}
