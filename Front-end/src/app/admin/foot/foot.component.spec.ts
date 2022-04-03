import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FootComponent } from './foot.component';

describe('FoodcardsComponent', () => {
    let component: FootComponent;
    let fixture: ComponentFixture<FootComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FootComponent],
            providers: [],
            imports: [HttpClientModule,
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("testing html element", () => {

        const data = fixture.nativeElement;
        expect(data.querySelector(".container").textContent).toContain("foot works!")

    })

});
