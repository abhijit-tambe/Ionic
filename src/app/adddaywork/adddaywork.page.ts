import {Component, OnInit, ViewChild} from '@angular/core';
// import {Item} from '../services/storage.service';
import {Work , WorkstorageService} from '../services/workstorage.service';
import {Platform, ToastController, IonList} from '@ionic/angular';
import {Item} from '../services/storage.service';
// import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-adddaywork',
  templateUrl: './adddaywork.page.html',
  styleUrls: ['./adddaywork.page.scss'],
})
export class AdddayworkPage   {
  works: Work[] = [];

  newWork: Work = <Work> {};
  @ViewChild('mylist')mylist: IonList;
  constructor(private workstorage: WorkstorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadWorks();
    });
  }
  // ngOnInit() {
  // }
  addWork() {
    this.newWork.modified = Date.now();
    this.newWork.id = Date.now();

    this.workstorage.addWork(this.newWork).then(work => {
      this.newWork = <Work> {};
      this.showToast('Item added!');
      this.loadWorks(); // Or add it to the array directly
    });
  }

  // READ
  loadWorks() {
    this.workstorage.getWorks().then(works => {
      this.works = works;
    });
  }

  // DELETE
  deleteWork(work: Work) {
    this.workstorage.deleteWork(work.id).then(work => {
      this.showToast('work removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadWorks(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


}
