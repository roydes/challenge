import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render search input', async(() => {
    fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input')).toBeDefined();
  }));
  it('should render search button', async(() => {
    fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.search-button')).toBeDefined();
  }));
  it('should be valid form', () => {
    component.searchForm.controls.searchInput.setValue('Angular');
    expect(component.searchForm.valid).toBeTruthy();
  });
});
