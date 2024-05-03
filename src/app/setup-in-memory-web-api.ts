import { NgModuleRef, ApplicationRef } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export function setupInMemoryWebApi(appRef: ApplicationRef): () => void {
  return () => {
    const moduleRef = appRef.components[0].injector.get(NgModuleRef);
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }).providers.forEach(provider => {
      moduleRef.injector.get(provider.provide, provider);
    });
  };
}
