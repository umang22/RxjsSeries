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

  // old way, for when there was no pagination

  //blogPosts: BlogPost[] = [];

  // in this new case, the blogpost variable is a two-dimensional array
  // the first [] is the page and the second is the blog posts
  blogPosts: BlogPost[][];

  currentPage: number;

  // a difference between my example, and the guy from the course, is that in the course his @ViewChild only receives one argument
  // to work here, it actually required two arguments, so after searching I passed a NULL
  // the commented line below will work but will only expand the first line of the post
  // @ViewChild ('tile', null) blogPostTileComponent: BlogPostTileComponent;
  // and since it is not a view only, you have to change the notation from @ViewChild to @ViewChildren
  // and changed the name from blogPostTileComponent to blogPostTileComponents because it will no longer be just one

  @ViewChildren('tile', null) blogPostTileComponents: QueryList<BlogPostTileComponent>;


// the section of instantiating variables could be done in the constructor, and it would work perfectly
  // it was not done that way, for good practices. The builder must be left to inject
  // dependencies, lightweight

  // after removing the hardcoded blogdata for the blog-data-service, you have to inject the dependency into the constructor
  constructor(private blogDataService: BlogDataService) {
  }

  ngOnInit() {


// this is a way to instantiate the blog post class
    /* let blog1 = new BlogPost('Blog Post 1', 'Summary of post 1');
    let blog2 = new BlogPost('Blog Post 2', 'Summary of post 2');
    let blog3 = new BlogPost('Blog Post 3', 'Summary of post 3');
    let blog4 = new BlogPost('Blog Post 4', 'Summary of post 4'); */

    // and to work with pagination, this data model will not do, you have to change
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
