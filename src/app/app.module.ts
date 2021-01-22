import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ArchetypeComponent } from './archetype/archetype.component';
import { MenuCreationPnjComponent } from './menuCreationPnj/menuCreationPnj.component';
import { FichePnjComponent } from './fiche-pnj/fiche-pnj.component';
import { CaracComponent } from './fiche-pnj/carac/carac.component';
import { CompetenceComponent } from './fiche-pnj/competence/competence.component';
import { DescriptionComponent } from './fiche-pnj/description/description.component';
import { ArmeComponent } from './fiche-pnj/arme/arme.component';
import { ModifComponent } from './fiche-pnj/modif/modif.component';
import { ModalComponent } from './fiche-pnj/modif/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArchetypeComponent,
    MenuCreationPnjComponent,
    FichePnjComponent,
    CaracComponent,
    CompetenceComponent,
    DescriptionComponent,
    ArmeComponent,
    ModifComponent,
    ModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
