import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: number): number {
    let hour;
    let minute;
    let t=time;
    let cnt=0;
    let fixTime;
    if(time>60){
  while(t>=60){
   cnt++;
   t-=60;
   minute=t;
  }
  hour=cnt;
  if(minute==0)
  fixTime=hour+' שעות';
  else
  fixTime= hour+':'+minute+' דקות';
return fixTime;
}
else if(time==60){
  fixTime=1+' שעה'
  return fixTime;
}
else{
  fixTime=time+' דקות'
return fixTime;
}
  }
}
