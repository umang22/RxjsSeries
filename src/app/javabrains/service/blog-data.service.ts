import {Injectable} from '@angular/core';
import {BlogPost} from "../class/blog-post";

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  getData(): BlogPost[][] {
    return [
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
    ];

  }
}
