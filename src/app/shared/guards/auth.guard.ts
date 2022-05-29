import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserInfoModel} from '../../core/models/user-info.model';
import * as CONST from '../../core/constants';
import {CommonService} from '../../core/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser!: UserInfoModel;

  constructor(private commonService: CommonService, private router: Router) {
    this.commonService.currentUser.subscribe(res => this.currentUser = res);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUser) {
      return this.router.navigate([CONST.FrontURI.HOME]);
    }
    return true;
  }

}
