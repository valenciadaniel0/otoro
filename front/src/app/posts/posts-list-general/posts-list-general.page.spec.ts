import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostsListGeneralPage } from './posts-list-general.page';

describe('PostsListGeneralPage', () => {
  let component: PostsListGeneralPage;
  let fixture: ComponentFixture<PostsListGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsListGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
