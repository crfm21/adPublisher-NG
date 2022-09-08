import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ad } from 'src/app/Interface';
import { AdServicesService } from 'src/app/Services/Ads/ad-services.service';

@Component({
  selector: 'app-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.css']
})
export class AdViewComponent implements OnInit, OnDestroy {
  adId!: number;
  ad!: Ad;
  subscription!: Subscription;

  constructor(public adService: AdServicesService,
    private route: ActivatedRoute) {
    this.subscription = this.adService.selectedAd
      .subscribe(
        (data) => {
          this.ad = data;
        }
      );
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.adId = params['id'];
        });

    this.getAd();
  }

  getAd() {
    this.adService.getAnAd(this.adId)
      .subscribe(
        (data: Ad) => {
          this.ad = data;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
