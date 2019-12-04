import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { QualityType } from 'src/app/models/film/qualityType';
import { TrailerData } from 'src/app/interfaces/modal/trailerData';
import { getYoutubeUrl } from 'src/app/utils/util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild(TemplateRef, { static: false }) tpl: TemplateRef<any>;
  @ViewChild('myModal', { static: false }) myModal: NgxSmartModalComponent;
  public data: TrailerData = null;
  public qualityType = QualityType;
  constructor() { }

  onClose() {
    this.myModal.removeData();
    this.data = null;
  }
  onAddData(data: TrailerData) {
    this.data = data;
    this.data.key = getYoutubeUrl(this.data.key);
  }
}
