export class BlogPost {

  /* title: string;
  summary: string; */
  //esta interrogação diz que o isFav é opcional
  isFav?: boolean;

  constructor(public title: string, public summary: string) {
  }
}
