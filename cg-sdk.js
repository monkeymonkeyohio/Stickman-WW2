// Stickman WW2 - Standalone CrazyGames compatibility shim
// No external SDK required.

(function () {
    "use strict";

    window.Crazygames = {
        init: function (options) {
            console.log("[Standalone] SDK initialization skipped.", options);
        },

        gameplayStart: function () {
            console.log("[Standalone] Gameplay started.");
        },

        gameplayStop: function () {
            console.log("[Standalone] Gameplay stopped.");
        },

        happytime: function () {},

        screenshotReceived: function (image) {},

        requestAd: function (type) {
            console.log("[Standalone] Ads unavailable:", type);
        },

        requestBanners: function (banners) {
            console.log("[Standalone] Banners unavailable.");
        },

        requestInviteUrl: function (url) {
            console.log("[Standalone] Invites unavailable.");
        }
    };

    console.log("[Standalone] CrazyGames dependency replaced.");
})();
