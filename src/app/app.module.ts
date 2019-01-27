import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WhiteWidgetComponent } from './components/white-widget/white-widget.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TableComponent } from './components/table/table.component';
import { EmployerlistComponent } from './employerlist/employerlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterEmployeComponent } from './register-employe/register-employe.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ContentComponent } from './content/content.component';
import { PromolistComponent } from './promotions/promolist/promolist.component';
import { RegisterPromoComponent } from './promotions/register-promo/register-promo.component';
import { EditPromoComponent } from './promotions/edit-promo/edit-promo.component';

import { ConsolelistComponent } from './consoles/consolelist/consolelist.component';
import { RegisterConsoleComponent } from './consoles/register-console/register-console.component';
import { EditConsoleComponent } from './consoles/edit-console/edit-console.component';
import { ButtonComponent } from './components/button/button.component';
import { TimerComponent } from './components/timer/timer.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { SingleComputerComponent } from './single-computer/single-computer.component';
import { ShopFridgeComponent } from './shop-fridge/shop-fridge.component';
import { ModalBoxComponent } from './modal-box/modal-box.component';
import { ConfirmModalComponent } from './modal-box/confirm-modal/confirm-modal.component';
import { StopTimeComponent } from './modal-box/stop-time/stop-time.component';
import { SinglePromotionComponent } from './components/single-promotion/single-promotion.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteWidgetComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    MenuComponent,
    StartPageComponent,
    TableComponent,
    EmployerlistComponent,
    FooterComponent,
    RegisterEmployeComponent,
    ContentComponent,
    ProductlistComponent,
    RegisterProductComponent,
    PromolistComponent,
    RegisterPromoComponent,
    EditPromoComponent,
    ConsolelistComponent,
    RegisterConsoleComponent,
    EditConsoleComponent,
    ButtonComponent,
    TimerComponent,
    SelectBoxComponent,
    SingleComputerComponent,
    ShopFridgeComponent,
    ModalBoxComponent,
    ConfirmModalComponent,
    StopTimeComponent,
    SinglePromotionComponent,
    CalendarComponent,
    UserProfileComponent
  ],
  imports: [
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
