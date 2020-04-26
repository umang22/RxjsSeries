import {ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BlogPostTileComponent} from '../blog-post-tile/blog-post-tile.component';
import {BlogPost} from "../class/blog-post";
import {BlogDataService} from "../service/blog-data.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {

  //maneira antiga, para quando não tinha paginação
  //blogPosts: BlogPost[] = [];

  //neste novo caso, a variavel blogpost é um array bidimensional
  //o primeiro [] é a pagina e o segundo são os posts do blog
  blogPosts: BlogPost[][];

  currentPage: number;

  //uma diferença entre o meu exemplo, e o do cara do curso, é que no curso o @ViewChild dele só recebe um argumento
  //para funcionar aqui, na verdade exigia dois argumentos, então depois de pesquisar passei um NULL
  //a linha comentada abaixo, vai funcionar mas só vai expandir a primeira linha do post
  //  @ViewChild('tile', null) blogPostTileComponent: BlogPostTileComponent;
  //e como não é uma view somente, tem que mudar a notação de @ViewChild para @ViewChildren
  //e mudou o nome de blogPostTileCompenent para blogPostTileComponents porque não vai ser mais só um
  @ViewChildren('tile', null) blogPostTileComponents: QueryList<BlogPostTileComponent>;

  //o trecho de instanciar as variaveis poderia ser feito no construtor, e iria funcionar perfeitamente
  //não foi feito assim, por boas práticas. O construtor deve ser deixado para fazer injeção de
  //dependências, lighweight

  //depois de tirar o blogdata de hardcoded para o blog-data-service, tem que injetar a dependencia no construtor
  constructor(private blogDataService: BlogDataService) {
  }

  ngOnInit() {

    //esta é uma manera de instanciar a classe blog post
    /* let blog1 = new BlogPost('Blog Post 1', 'Summary of post 1');
    let blog2 = new BlogPost('Blog Post 2', 'Summary of post 2');
    let blog3 = new BlogPost('Blog Post 3', 'Summary of post 3');
    let blog4 = new BlogPost('Blog Post 4', 'Summary of post 4'); */

    //e para trabalhar com paginação, este modelo de dados não vai servir, tem que trocar
    /* this.blogPosts.push(new BlogPost('Blog Post 1', 'Summary of post 1'));
    this.blogPosts.push(new BlogPost('Blog Post 2', 'Summary of post 2'));
    this.blogPosts.push(new BlogPost('Blog Post 3', 'Summary of post 3'));
    this.blogPosts.push(new BlogPost('Blog Post 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.')); */

    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();

    /* this.blogPosts =
      [
        [
          {
            title: 'Post 1',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 2',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 3',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 4',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          }
        ],
        [
          {
            title: 'Post 5',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 6',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 7',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 8',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          }
        ],
        [
          {
            title: 'Post 9',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 10',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 11',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          },
          {
            title: 'Post 12',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan sodales nisl. Aliquam erat volutpat. Curabitur nunc arcu, pellentesque non convallis eu, pretium sed metus. Donec rutrum risus pharetra leo auctor gravida. Morbi vehicula urna eget quam interdum vestibulum. Nunc et vestibulum eros. Integer vitae sem odio. Phasellus ac tellus varius, rhoncus neque eget, dictum leo. Ut molestie convallis risus. Donec faucibus, ipsum ac volutpat auctor, sapien felis vulputate est, non sollicitudin metus tortor et ante. Vivamus venenatis lectus ligula, vel placerat lectus congue a. Sed viverra euismod leo, in dapibus nisl commodo vel. Donec pellentesque tempor justo eget dapibus. Aenean dignissim magna justo, quis imperdiet quam laoreet eu. Phasellus porta nibh ex, quis condimentum eros dictum blandit.'
          }
        ]
      ]
 */
  }

  updatePage(newPage) {
    console.log("Event emitted and method executed");
    this.currentPage = newPage;
  }

  expandAll() {
    this.blogPostTileComponents.forEach(e => e.showFullSummary());
  }

  favoriteAll() {
    //this.blogPosts[this.currentPage].forEach(post => post.isFav = true);

    //teve de mudar do for each para o map porque esta usando change Detection com onPush
    this.blogPosts[this.currentPage] = this.blogPosts[this.currentPage].map(post => ({
      title: post.title,
      summary: post.summary,
      isFav: true
    }));
  }
}
