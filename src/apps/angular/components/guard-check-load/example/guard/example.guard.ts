import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExampleGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1500);
        });
    }
}
