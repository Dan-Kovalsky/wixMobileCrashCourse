/*
  This is the class that defines your module.
  For full documentation, see here: https://bo.wix.com/one-app-engine-docs#/module-api
 */

// NOTICE - no imports in this file! Any external code is required on demand.

export default class OneAppExampleModule {

    // put any initialisation your module needs to do here
    init() {}

    // returns an array of components that your module provides
    // [{id: string, generator: () => Component, description: string}]
    components() {
        return [
            {
                id: 'wixMobileCrashCurse.AddPostScreen',
                generator: () => require('./posts/screens/AddPost').default,
                description: 'Screen to show as the root of the AddPost tab'
            },
            {
                id: 'wixMobileCrashCurse.EditPostScreen',
                generator: () => require('./posts/screens/EditPost').default,
                description: 'Screen to show as the root of the EditPost tab'
            },
            {
                id: 'wixMobileCrashCurse.PostsListScreen',
                generator: () => require('./posts/screens/PostsList').default,
                description: 'Screen to show as the root of the PostsList tab'
            },
            {
                id: 'wixMobileCrashCurse.ViewPostScreen',
                generator: () => require('./posts/screens/ViewPost').default,
                description: 'Screen to show as the root of the ViewPost tab'
            },
        ];
    }

    // returns an array of methods that your module provides
    // [{id: string, generator: () => function, description: string}]
    methods() {
        return [];
    }

    // returns a string that will be used as a prefix for your module's exports
    prefix() {
        return 'blog';
    }

    onAppStateChanged(appState) {
        require('./stores/appState/actions').onAppStateChanged(appState);
    }

    getClientApps(appState) {
        return [{
            id: 'postsListTab',
            label: 'postsList',
            screenId: 'wixMobileCrashCurse.PostsListScreen',
            testID: 'wixMobileCrashCurse.BOTTOM_TAB_postsList',
        }];
    }

    getManagerApps(appState) {
        return [{
            id: 'postsListTab',
            label: 'postsList',
            screenId: 'wixMobileCrashCurse.PostsListScreen',
            testID: 'wixMobileCrashCurse.BOTTOM_TAB_postsList',
        }];
    }

}
