import {Component, OnInit, ViewChild} from '@angular/core';
// import {Diet, StorageService} from '../services/storage.service';
import {IonList, Platform, ToastController} from '@ionic/angular';
import {DietService, Diet} from '../services/diet.service';

@Component({
  selector: 'app-addnutrition',
  templateUrl: './addnutrition.page.html',
  styleUrls: ['./addnutrition.page.scss'],
})
export class AddnutritionPage  {
  diets: Diet[] = [];

  newDiet: Diet = <Diet> {};
  p = 4;
  c = 4;
  f = 9;
  ptemp:number;
  ctemp:number;
  ftemp:number;
  utemp:number;
  cal:number;
  // @ViewChild('mylist')mylist: IonList;
  constructor(private dietService: DietService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadDiets();
    });
  }

  // CREATE
  addDiet() {
    this.ptemp = Number(this.newDiet.pro) * this.p;
    this.ctemp = Number(this.newDiet.carb) * this.c;
    this.ftemp = Number(this.newDiet.fat) * this.f;
    this.utemp = Number(this.newDiet.unit);
    this.newDiet.modified = Date.now();
    this.newDiet.id = Date.now();
    this.newDiet.completed = false;
    this.newDiet.cal = (this.ptemp + this.ctemp + this.ftemp) *  this.utemp;

    this.dietService.addDiet(this.newDiet).then(diet => {
      this.newDiet = <Diet> {};
      this.showToast('Diet added!');
      this.loadDiets(); // Or add it to the array directly
    });
  }
  // ngOnInit() {
  // }

  loadDiets() {
    this.dietService.getDiets().then(diets => {
      this.diets = diets;
      console.log('home', this.diets);
    });
  }
  // // DELETE
  // deleteItem(diet: Item) {
  //   this.storageService.deleteItem(diet.id).then(diet => {
  //     this.showToast('Item removed!');
  //     this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
  //     this.loadItems(); // Or splice it from the array directly
  //   });
  // }
  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
