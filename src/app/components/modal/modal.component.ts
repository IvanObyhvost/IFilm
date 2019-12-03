import { Component, OnInit, Input, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { environment } from 'src/environments/environment';
import { QualityType } from 'src/app/models/film/qualityType';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(TemplateRef, { static: false }) tpl: TemplateRef<any>;
  @ViewChild('myModal', { static: false }) myModal: NgxSmartModalComponent; 
  public data: any = null;
  public qualityType = QualityType;
  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  onClose() {
    this.myModal.removeData();
    this.data = null;
  }
  onAddData(data: any) {
    this.data = data;
    this.data.key = `${environment.youtube_url}${this.data.key}?rel=0&autoplay=0&controls=1&showinfo=0&ecver=0&enablejsapi=1`;
  }
}
