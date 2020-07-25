import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal-image",
  templateUrl: "./modal-image.component.html",
  styleUrls: ["./modal-image.component.scss"],
})
export class ModalImageComponent implements OnInit {
  @Input() url: string;
  @Input() id: string;
  @Input() class: string;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
