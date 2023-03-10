import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:5242/api/city");
  }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id == id) as Property;
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];

        if (localStorage.getItem('newProp')){
          const localProperties = JSON.parse(localStorage.getItem('newProp')!);

          if (localProperties){
            for (const id in localProperties) {
              if (SellRent){
                if (localProperties.hasOwnProperty(id) && (localProperties as Property[])[id as unknown as number].SellRent === SellRent){
                  propertiesArray.push((localProperties as Property[])[id as unknown as number]);
                }
              } else {
                propertiesArray.push((localProperties as Property[])[id as unknown as number]);
              }
            }
          }
        }


        for (const id in data) {
          if (SellRent){
            if (data.hasOwnProperty(id) && (data as Property[])[id as unknown as number].SellRent === SellRent){
              propertiesArray.push((data as Property[])[id as unknown as number]);
            }
          } else {
            propertiesArray.push((data as Property[])[id as unknown as number]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')){
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID(){
    if (localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
