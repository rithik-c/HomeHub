import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], filterString: string, propName: string): any[] {

        const resultArray = [];
        if (value){
            if (value.length === 0 || filterString === '' || propName === '') {
                return value;
            }

            for (const item of value) {
                if ((item[propName] as string).toLowerCase() === (filterString as string).toLowerCase()) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }

        return []; // Empty return for empty value
    }
}
