import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfpages;

  //criando uma variável de output, que é instanciada como um event emitter
  @Output() pageNumberClick = new EventEmitter<number>();

  pages: number[];

  constructor() {
  }

  ngOnInit() {
    //este array com valor no parametro, cria um array do tamanho exato do parametro
    this.pages = new Array(this.numberOfpages);
  }

  //com isto, o método de paginação é reusável
  //porém, para fechar, o parent component tem de ouvir o evento, senão não funciona
  pageNumberClicked(pageNumber) {
    this.pageNumberClick.emit(pageNumber);

  }

}
