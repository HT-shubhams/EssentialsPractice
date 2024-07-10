import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [
    BrowserModule,
    UserInputModule, // Import UserInputModule here
  ],
  bootstrap: [AppComponent], // Only AppComponent should be bootstrapped
})
export class AppModule {}
