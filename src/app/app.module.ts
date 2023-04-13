import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapHomeComponent } from './components/bootstrap-home/bootstrap-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridSystemResponsiveComponent } from './components/grid-system-responsive/grid-system-responsive.component';
import { GridVerticalAlignmentComponent } from './components/grid-vertical-alignment/grid-vertical-alignment.component';
import { GridHorizontalAlignmentComponent } from './components/grid-horizontal-alignment/grid-horizontal-alignment.component';
import { FlexboxClassComponent } from './flexbox-class/flexbox-class.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { CollapseAccordionComponent } from './components/collapse-accordion/collapse-accordion.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { StretchedLinkComponent } from './components/stretched-link/stretched-link.component';
import { IconLinkComponent } from './components/icon-link/icon-link.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ValidationComponent } from './components/validation/validation.component';
import { TablesComponent } from './components/tables/tables.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapHomeComponent,
    GridSystemResponsiveComponent,
    GridVerticalAlignmentComponent,
    GridHorizontalAlignmentComponent,
    FlexboxClassComponent,
    CarouselSliderComponent,
    CollapseAccordionComponent,
    PopoversComponent,
    SpinnersComponent,
    StretchedLinkComponent,
    IconLinkComponent,
    ButtonGroupComponent,
    BadgeComponent,
    AlertComponent,
    AccordionComponent,
    ValidationComponent,
    TablesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
