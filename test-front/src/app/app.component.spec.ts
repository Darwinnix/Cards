import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DeckOfCardsModule} from "./components/deckOfCards/deck-of-cards.module";
import {Router, Routes} from "@angular/router";
import {DeckOfCardsService} from "./components/deckOfCards/service/deck-of-cards.service";
import {Location} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";

describe('AppComponent', () => {

  const routes: Routes = [
    {
      path: 'deckofcards',
        loadChildren: () => DeckOfCardsModule
    },
    {
      path: '',
        redirectTo: 'deckofcards',
      pathMatch: 'full'
    }
  ];
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatGridListModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [DeckOfCardsService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test-front');
  });

  it('should navigate to deckofcards', fakeAsync(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/deckofcards');
  }));
});
