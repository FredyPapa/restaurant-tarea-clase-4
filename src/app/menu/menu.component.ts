import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { Pedido } from 'projects/data-models/src/public-api';
import { jsonDishes } from '../../assets/dishes.json';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  pedidos: Pedido[] = [];
  pedido: Pedido = {
    name: '',
    price: 0,
    cantidad: 0,
    total: 0
  };
  //dishesSelected: Dish[] = [];
  average = 0.6589;
  today = 1619278296373;
  selectedDish = 'No hay';

  constructor() {}

  ngOnInit(): void {
    this.dishes = [...jsonDishes];
  }

  getClass(dish: Dish): object {
    console.log(dish.available ?? 'warning!');

    return { available: dish.available };
  }

  getStyles(dish: Dish): object {
    return { backgroundColor: dish.available ? '#2ecc71' : '#c0392b' };
  }

  addDish(dish: Dish): void {
    //this.selectedDish = dish.name;
    this.pedido.name = dish.name;
    this.pedido.price = +dish.price;
    this.pedido.cantidad = 1;
    this.pedido.total = this.pedido.price * this.pedido.cantidad;
    //this.pedidos = [...this.pedido];
    this.pedidos.push(this.pedido);

  }
}
