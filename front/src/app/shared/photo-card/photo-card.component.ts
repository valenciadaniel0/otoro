import { Component, OnInit, Input } from "@angular/core";
import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-photo-card",
  templateUrl: "./photo-card.component.html",
  styleUrls: ["./photo-card.component.scss"],
})
export class PhotoCardComponent implements OnInit {
  @Input() uploadImage: (webPatth: string) => void;

  private photo: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  async selectPhoto() {
    const ab = await this.getPhoto(CameraSource.Photos);
    await this.uploadImage(ab);
  }

  async takePicture() {
    const ab = await this.getPhoto(CameraSource.Camera);
    await this.uploadImage(ab);
  }

  private async getPhoto(source: CameraSource) {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.webPath
    );
    return image.webPath;
  }
}
