import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../class/blog-post";
import {TruncatePipe} from "../class/truncate.pipe";


@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  //usar ViewEncapsulation somente se não for usar o :hosts
  //encapsulation: ViewEncapsulation.None //este encapsulation, da maneira que foi feita (inclusive com o import do angular core)
  //faz com que coisas que estejam inclusive fora do componente, peguem o estilo do arquivo scss
  //é por isso que usar o ViewEncapsulation.None é muito perigoso
})
export class BlogPostTileComponent implements OnInit {

  //para o input funcionar, tem que ser o mesmo nome dado no seletor da classe, arquivo html
  //@Input() title: string;
  //pode funcionar com nome diferente, mas tem que passar no parentesis do input o nome correto
  //dado no arquivo html - neste exemplo está redundante, porque o nome já está correto
  //@Input('summary') summary: string;

  //o trecho abaixo é usado no arquivo html, versão com []
  @Input() post: BlogPost;

  //criando uma variável para guardar o texto completo
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) {
  }

  ngOnInit() {

    //no caso, como foi utilizado o input, nao precisa do trecho abaixo
    /* this.title = "Blog Title";
    this.summary = "Blog Summary"; */

    //e agora antes gerar o resumo, vamos guardar o texto completo
    this.fullSummary = this.post.summary;

    //esta é a outra maneira de usar o truncate pipe
    //a diferença é que desta vez estamos usando o pipe function via injeção de dependencia
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);

  }

  showFullSummary() {
    this.post.summary = this.fullSummary;
  }

  toggleFav() {
    //this.post.isFav = true;
    this.post.isFav = !this.post.isFav;
  }

}
