import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ad } from 'src/app/Interface';
import { AdServicesService } from 'src/app/Services/Ads/ad-services.service';

@Component({
  selector: 'app-ad-list-view',
  templateUrl: './ad-list-view.component.html',
  styleUrls: ['./ad-list-view.component.css']
})
export class AdListViewComponent implements OnInit {
  type!: string;
  ads!: Ad[];
  specificAdSelected!: Ad;

  constructor(
    public adService: AdServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.type = params['type'];
          this.loadingAds();
        }
      )
  }

  loadingAds() {
    switch (this.type) {
      case 'imoveis':
        this.adService.getByType(0)
          .subscribe(
            (data) => {
              this.ads = data;
              this.type = 'Imóveis';
            }
          );
        break;
      case 'automoveis':
        this.adService.getByType(1)
          .subscribe(
            (data) => {
              this.ads = data;
              this.type = 'Automóveis';
            }
          );
        break;
      case 'empregos':
        this.adService.getByType(2)
          .subscribe(
            (data) => {
              this.ads = data;
              this.type = 'Empregos';
            }
          );
        break;
    }
  }

  sendSpecificAd(adId: number) {
    this.adService.getAnAd(adId)
      .subscribe(
        (data) => {
          this.specificAdSelected = data;
          this.adService.selectedAd.next(this.specificAdSelected);
        }
      );
  }
}
