import {Component, OnInit, OnChanges, AfterViewInit,  ViewChild} from '@angular/core';
import {Item, StorageService} from '../services/storage.service';
import {IonList, Platform} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage  implements OnChanges {
  // private selectedItem: any;
  items: Item[] = [];
  // done = false;
  newItem: Item = <Item> {};
  @ViewChild('mylist')mylist: IonList;
  constructor(private storageService: StorageService , private plt: Platform, route: ActivatedRoute) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.loadItems();
    });
  }


  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item> {};
      // this.showToast('Item added!');
      this.loadItems(); // Or add it to the array directly
    });
  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
      console.log('list', this.items);
    });
  }

  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      // this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }
  // ngOnInit() {
  //   this.loadItems();
  // }
  ngOnChanges() {

    // this.plt.ready().then(() => {
      this.loadItems();
      // console.log('after', this.items);
    // });

  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  setclasses(item: Item) {
    let classes = { item : true , 'is-done': item.completed};
    return classes;
  }

  setdone(item: Item) {
    // this.done = !this.done;
    item.completed = !item.completed;
  }
}
