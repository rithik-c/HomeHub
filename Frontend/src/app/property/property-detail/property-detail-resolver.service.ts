import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Property } from 'app/model/property';
import { HousingService } from 'app/services/housing.service';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private router: Router, private housingService: HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property>{
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of();
      })
    );
  }

}
