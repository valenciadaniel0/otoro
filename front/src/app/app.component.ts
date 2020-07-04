import { Component, OnInit } from "@angular/core";

import {
  Platform,
  AlertController,
  NavController,
  MenuController,
} from "@ionic/angular";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { Storage } from "@ionic/storage";
import { RestService } from "./core/services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    { title: "Inicio", url: "/dashboard", icon: "home" },
    {
      title: "Perfil",
      url: "users/profile",
      icon: "person",
    },
    {
      title: "Notificaciones",
      url: "/folder/Outbox",
      icon: "notifications",
    },
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public appVersion: AppVersion,
    public storage: Storage,
    public alertController: AlertController,
    public restService: RestService,
    public navController: NavController,
    public router: Router,
    public menuController: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    const { SplashScreen } = Plugins;
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      if (this.platform.is("android")) {
        this.statusBar.styleLightContent();
      } else {
        this.statusBar.styleDefault();
      }

      // Hide the splash (you should do this on app launch)
      SplashScreen.hide();

      // Show the splash for two seconds and then auto hide:
      SplashScreen.show({
        showDuration: 2000,
        autoHide: true,
      });

      this.initCapacitorPushNotification();
      this.appVersion.getVersionNumber().then((version) => {
        this.storage.set("version", version);
      });
    });
  }

  initCapacitorPushNotification() {
    const { PushNotifications } = Plugins;
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        this.storage.set("deviceToken", token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        alert("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }

  async logout() {
    this.selectedIndex = 3;
    let body = new FormData();
    let auth: any = await this.storage.get("auth");
    this.restService
      .queryPost("users/logout", body, auth.token)
      .subscribe((response) => {
        this.storage.remove("auth");
        this.menuController.enable(false);
        this.router.navigate(["/login"]);
        (err) => {
          if (err["status"] == 401) {
            this.storage.remove("auth");
            this.menuController.enable(false);
            this.router.navigate(["/login"]);
          }
        };
      });
  }

  ngOnInit() {
    const path = window.location.pathname.split("/login")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
