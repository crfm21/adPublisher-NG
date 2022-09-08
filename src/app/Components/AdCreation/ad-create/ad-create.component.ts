import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdTypes } from 'src/app/Interface';
import { AdServicesService } from 'src/app/Services/Ads/ad-services.service';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.css']
})
export class AdCreateComponent implements OnInit {
  form!: FormGroup;
  types = Object.values(AdTypes).splice(0, (Object.values(AdTypes).length / 2))

  constructor(
    public adService: AdServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        subject: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl('', [Validators.required, Validators.maxLength(400)]),
        contact: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        adType: new FormControl('', [Validators.required])
      }
    )
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
    this.adService.create(this.form.value)
      .subscribe(
        (res: any) => {
          alert(res.value);
          this.router.navigateByUrl('home');
        }
      )
  }
}

