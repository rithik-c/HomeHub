import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && (data as IPropertyBase[])[id as unknown as number].SellRent === SellRent){
            propertiesArray.push((data as IPropertyBase[])[id as unknown as number]);
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
