import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && (data as IProperty[])[id as unknown as number].SellRent === SellRent){
            propertiesArray.push((data as IProperty[])[id as unknown as number]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
function data(this: (any: any) => void, value: Object, index: number): unknown {
  throw new Error('Function not implemented.');
}

