// This module was fully migrated to Angular 2
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SthCmp} from './settings_cmp';
import {PageSthSizeCmp} from './page_size_cmp';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'sth', children: [
        { path: '', component: SthCmp },
        { path: 'pagesize', component: PageSthSizeCmp }
      ] },
    ])
  ],
  declarations: [SthCmp, PageSthSizeCmp]
})
export class SthNgModule {
}
