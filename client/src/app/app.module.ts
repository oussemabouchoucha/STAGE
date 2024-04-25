import { NgModule } from '@angular/core';
import { MaterialModule } from './Material.Module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { MemberModule } from './member/member.module';
// import { DialogsModule } from './dialogs/dialogs.module';




@NgModule({
    declarations: [
        AppComponent,
        BarChartComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
        }),
        AuthModule,
        FormsModule,
        HttpClientModule,
        DashboardModule,
        MaterialModule,
        // MemberModule,
        // DialogsModule
    ]
})
export class AppModule {}
