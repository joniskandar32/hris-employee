import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
		canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
	},
	{
		path: 'intro',
		loadChildren: () => import('./pages/intro/intro.module').then((m) => m.IntroPageModule)
	},
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
		canLoad: [AuthGuard] // Secure all child pages
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'permitpropose',
		loadChildren: () => import('./pages/permitpropose/permitpropose.module').then( m => m.PermitproposePageModule)
	},
  {
    path: 'permitposted',
    loadChildren: () => import('./pages/permitposted/permitposted.module').then( m => m.PermitpostedPageModule)
  },
  {
    path: 'otpropose',
    loadChildren: () => import('./pages/otpropose/otpropose.module').then( m => m.OtproposePageModule)
  },
  {
    path: 'otposted',
    loadChildren: () => import('./pages/otposted/otposted.module').then( m => m.OtpostedPageModule)
  },
  {
    path: 'claimpropose',
    loadChildren: () => import('./pages/claimpropose/claimpropose.module').then( m => m.ClaimproposePageModule)
  },
  {
    path: 'claimposted',
    loadChildren: () => import('./pages/claimposted/claimposted.module').then( m => m.ClaimpostedPageModule)
  },
  {
    path: 'postedpermit',
    loadChildren: () => import('./modals/postedpermit/postedpermit.module').then( m => m.PostedpermitPageModule)
  },
  {
    path: 'proposepermit',
    loadChildren: () => import('./modals/proposepermit/proposepermit.module').then( m => m.ProposepermitPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  }
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}