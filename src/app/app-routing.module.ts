import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SwapComponent} from './swap/swap.component';
import {SendComponent} from './send/send.component';
import {PoolComponent} from './pool/pool.component';


const routes: Routes = [
 { path: "send", component: SendComponent },
  { path: " ", component: SwapComponent },
  { path: "swap", component: SwapComponent },
  { path: "pool", component: PoolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
