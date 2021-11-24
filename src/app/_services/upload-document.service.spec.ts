/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UploadDocumentService } from './upload-document.service';

describe('Service: UploadDocument', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadDocumentService]
    });
  });

  it('should ...', inject([UploadDocumentService], (service: UploadDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
