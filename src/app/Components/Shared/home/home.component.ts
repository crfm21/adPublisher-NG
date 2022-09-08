import { Component, OnInit } from '@angular/core';
import { Ad, AdTypes } from 'src/app/Interface';
import { AdServicesService } from 'src/app/Services/Ads/ad-services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads!: Ad[];
  imoAds!: Ad[];
  autoAds!: Ad[];
  jobAds!: Ad[];
  types = Object.values(AdTypes).splice(0, (Object.values(AdTypes).length) / 2)
  selectedAd!: Ad;

  constructor(
    private adService: AdServicesService
  ) { }

  ngOnInit(): void {
    this.adService.getAll()
      .subscribe(
        (data: Ad[]) => {
          this.ads = data;

          this.imoAds = this.ads.filter(
            (ad) => {
              return ad.adType == AdTypes.Imóvel;
            }
          );

          this.autoAds = this.ads.filter(
            (ad) => {
              return ad.adType == AdTypes.Automóvel;
            }
          );

          this.jobAds = this.ads.filter(
            (ad) => {
              return ad.adType == AdTypes.Emprego;
            }
          );

        }
      );
  }

  sendAd(selectedAdId: number) {
    this.adService.getAnAd(selectedAdId)
      .subscribe(
        (data) => {
          this.selectedAd = data;
          this.adService.selectedAd.next(this.selectedAd);
        }
      );
  }

}
