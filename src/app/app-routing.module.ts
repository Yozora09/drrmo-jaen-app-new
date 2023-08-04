import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agreement',
    loadChildren: () => import('./authentication/agreement/agreement.module').then( m => m.AgreementPageModule)
  },
  {
    path: 'registration-form1',
    loadChildren: () => import('./authentication/registration/registration-form1/registration-form1.module').then( m => m.RegistrationForm1PageModule)
  },
  {
    path: 'registration-form2',
    loadChildren: () => import('./authentication/registration/registration-form2/registration-form2.module').then( m => m.RegistrationForm2PageModule)
  },
  {
    path: 'registration-form3',
    loadChildren: () => import('./authentication/registration/registration-form3/registration-form3.module').then( m => m.RegistrationForm3PageModule)
  },
  {
    path: 'homescreen',
    loadChildren: () => import('./main-content/homescreen/homescreen.module').then( m => m.HomescreenPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./main-content/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./main-content/announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./main-content/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./main-content/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
