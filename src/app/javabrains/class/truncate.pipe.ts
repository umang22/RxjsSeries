import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  //transform(value: any, ...args: any[]): any {
  //por definição, o pipe deve receber a informação, processar e devolver o resultado
  //mas não deve "se lembrar de nada"

  transform(value: any, args?: any): any {

    //esta variavel limite, é o tamanho da variável que será truncada
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    //a variável trail, contém o que vai ser adicionado no final do truncate
    const trail = args.length > 1 ? args[1] : '...';
    //a linha abaixo retorna o próprio valor, se não for maior que o limite
    //ou então retorna o valur truncado, se for acima do limite
    return value.length > limit ? value.substring(0, limit) + trail : value;

    //return "Test";
    //return null;
  }

}
