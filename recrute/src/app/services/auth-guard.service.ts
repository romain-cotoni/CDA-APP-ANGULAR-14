import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
@Injectable({ providedIn: 'root' })  
export class AuthGuardService implements CanActivate 
{
    constructor(private router: Router) { }  
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
        if(sessionStorage.getItem("username"))
        {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}