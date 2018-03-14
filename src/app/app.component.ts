import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

declare var WindowsAzure: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  client: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      console.log('app.components.ts');
      this.client = new WindowsAzure.MobileServiceClient("https://mobionictest.azurewebsites.net").withFilter(filter);
      var table = this.client.getTable('test4');
      
  //--------------------- Read ----------------------------------------------    
      function success(results) {
        var numItemsRead = results.length;
     
        for (var i = 0 ; i < results.length ; i++) {
            var row = results[i];
            // Each row is an object - the properties are the columns
        }
     }
     
     function failure(error) {
         throw new Error(error);
     }
     
     table
         .read()
         .then(success, failure);
  //----------------------------------------------------------------------------       

  //---------------------- Insert --------------------------
    // var newItem = {
    //     id: "2",
    //     name: "abc"
    // };
  
    // table
    //     .insert(newItem)
    //     .done(function (insertedItem) {
    //         var id = insertedItem.id;
    //     }, failure);

  //--------------------------------------------------------------
  
  
        function filter(request, next, callback) {
          // Do any pre-request requirements here
          console.log('request = ', request);                     // Example: Logging
          request.headers['ZUMO-API-VERSION'] = "2.0.0";  
          request.headers['Access-Control-Allow-Origin'] = "*";  
          request.headers['Access-Control-Allow-Methods'] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
          
          next(request, callback);
      }
    });
  }
}
