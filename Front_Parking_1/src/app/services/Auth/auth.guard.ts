import { jwtDecode } from 'jwt-decode';

import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../User/login.service';
import { Inject, inject } from '@angular/core';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

export const AuthGuard: CanActivateFn = () => {
    const loginService = inject(LoginService);
    const router = inject(Router);

    if(loginService.isLoggedIn()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
};


