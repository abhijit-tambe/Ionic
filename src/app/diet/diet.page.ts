import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
// import {Item,} from '../services/storage.service';
import {IonList, Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {DietService, Diet} from '../services/diet.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage implements OnChanges {

  // private selectedItem: any;
  diets: Diet[] = [];
  // done = false;
  newDiet: Diet = <Diet> {};
  @ViewChild('myDlist') myDlist: IonList;
  constructor(private dietService: DietService , private plt: Platform, route: ActivatedRoute) {
    this.plt.ready().then(() => {
      this.loadDiets();
    });
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.loadDiets();
    });
  }


  // CREATE
  addDiet() {
    this.newDiet.modified = Date.now();
    this.newDiet.id = Date.now();

    this.dietService.addDiet(this.newDiet).then(diet => {
      this.newDiet = <Diet> {};
      // this.showToast('Item added!');
      this.loadDiets(); // Or add it to the array directly
    });
  }

  // READ
  loadDiets() {
    this.dietService.getDiets().then(diets => {
      this.diets = diets;
      console.log('list', this.diets);
    });
  }

  deleteDiet(diet: Diet) {
    this.dietService.deleteDiet(diet.id).then(diet => {
      // this.showToast('Item removed!');
      this.myDlist.closeSlidingItems();  // Fix or sliding is stuck afterwards
      this.loadDiets(); // Or splice it from the array directly
    });
  }
  // ngOnInit() {
  //   this.loadItems();
  // }
  ngOnChanges() {

    // this.plt.ready().then(() => {
    this.loadDiets();
    // console.log('after', this.items);
    // });

  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  setclasses(diet: Diet) {
    let classes = { diet : true , 'is-done': diet.completed};
    return classes;
  }

  setdone(diet: Diet) {
    // this.done = !this.done;
    diet.completed = !diet.completed;
  }

}
