import { Routes } from '@angular/router';
import { PageNotFoundComponent  } from "./page-not-found/page-not-found.component";
import { UserComponent  } from './user/user.component';

export const appRoutes: Routes = [
    { path: 'user', component: UserComponent },
    
    { path: '',
      redirectTo: '/user',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

