import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'asterisks'
})
export class AsterisksPipe implements PipeTransform {
  transform(amount: number): string {
let sub="";

while(amount>0){
  sub+='✶';
  amount--;
}
return sub;
  }
}
