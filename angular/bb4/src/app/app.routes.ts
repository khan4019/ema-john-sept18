import { Routes } from '@angular/router';

import { UsersComponent  } from "./users/users.component";
import { PageNotFoundComponent  } from "./page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: '',
      redirectTo: '/users',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];