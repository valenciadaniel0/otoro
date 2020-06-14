import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { CityService } from "./city.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.component.html",
  styleUrls: ["./select-city.component.scss"],
})
export class SelectCityComponent implements OnInit {
  private auth: any = "";
  private cities: any[] = [];
  private query: string = "";
  public searchForm: FormGroup;
  constructor(
    private modalController: ModalController,
    private cityService: CityService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get("auth").then((auth) => {
      this.auth = auth;
    });

    this.searchForm = new FormGroup({
      queryControl: new FormControl("queryControl", []),
    });
    this.searchForm.controls["queryControl"].setValue(null);
  }

  dismiss(city: any = undefined) {
    this.modalController.dismiss({
      dismissed: true,
      city: city,
    });
  }

  search() {
    let controls = this.searchForm.controls;
    this.query = controls["queryControl"].value;
    if (this.query && this.query.length > 3) {
      this.getCities();
    } else {
      this.cities = [];
    }
  }

  getCities() {
    this.cityService
      .getAll(this.query, this.auth.token)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.cities = result;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }
}
