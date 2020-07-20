// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //api_url: 'http://localhost:8081/api/'
  api_url: "http://192.168.0.17:8081/api/",
  posts_pictures_url: "http://192.168.0.17:8081/pictures/posts-pictures/",
  default_post_img:
    "http://192.168.0.17:8081/pictures/default/default_post.png",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stac k frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
