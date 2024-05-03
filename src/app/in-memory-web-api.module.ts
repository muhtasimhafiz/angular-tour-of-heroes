// in-memory-web-api.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ]
})
export class InMemoryWebApiAppModule { }
