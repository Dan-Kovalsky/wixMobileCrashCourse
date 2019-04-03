/*
  This is a module that will only be used inside your example project
  This will be used to mock interactions with the app that will happen outside the
  scope of your module, and to display data or whatever else you wish to be able
  to do or see when developing and testing your module, but not in the full app.
  For full documentation of the API, see here: https://bo.wix.com/one-app-engine-docs#/module-api
 */

import MockTools from 'wix-one-app-engine/lib/MockTools';

export default class ExampleModule {

    // put any initialisation your example module needs to do here
    // normally, this is where you set up the mock state or mock login parameters
    // for when running in fully or partially mocked modes
    init(){


        // const OneAppStateBuilder = require('wix-one-app-engine-tools').OneAppStateBuilder;
        MockTools.setLoginData({
            loginCredentials: {
                email: 'julie@example.com',
                password: '123456'
            },
            selectedBusinessId: '0cb5d2c1-eb52-433a-b7eb-c65da24b66f2'
        });


        // const mockTools = require('wix-one-app-engine/lib/MockTools');
        // const OneAppStateBuilder = require('wix-one-app-engine-tools').OneAppStateBuilder;
        //
        // const mockMode = mockTools.getLoginMode();
        // //provide the mock data depending on what mock level the packager is running at
        // switch (mockMode) {
        //     case 'quickLogin':
        //         mockTools.setLoginData({
        //             loginCredentials: {
        //                 email: 'julie@example.com',
        //                 password: '123456'
        //             }
        //         });
        //         break;
        //     case 'offline':
        //         const oneAppState = new OneAppStateBuilder()
        //             .withUserId(1234)
        //             .withBusiness('MetaSiteId1', 'Site1', true, 'exampleService1')
        //             .withBusiness('MetaSiteId2', 'Site2', false, 'exampleService1')
        //             .withBusinessService('MetaSiteId2', 'exampleService2')
        //             .build();
        //
        //         mockTools.setLoginData({
        //             oneAppState
        //         });
        //         break;
        //
        //     default:
        //         console.warn('Unhandled mock Mode: ' + mockMode);
        // }

    }

    components(){
        return [];
    }

    methods(){
        return [];
    }

    prefix() {
        return 'example';
    }

    onAppStateChanged(appState) {
    }

    getTabs(appState) {
        return [];
    }
}
