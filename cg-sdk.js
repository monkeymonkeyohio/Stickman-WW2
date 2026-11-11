// Stickman WW2 - Lowercase Crazygames Compatibility Shim
(function () {
    "use strict";

    window.Crazygames = {
        init: function (successCallback, errorCallback) {
            console.log("[Standalone] Crazygames SDK initialized.");
            if (typeof successCallback === "function") {
                successCallback();
            }
            return Promise.resolve();
        },
        gameplayStart: function () {
            console.log("[Standalone] Gameplay started.");
        },
        gameplayStop: function () {
            console.log("[Standalone] Gameplay stopped.");
        },
        happytime: function () {},
        requestAd: function (type, callbacks) {
            console.log("[Standalone] Ad requested:", type);
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success();
            } else if (callbacks && typeof callbacks.finished === "function") {
                callbacks.finished();
            }
        },
        requestBanners: function () {},
        requestInviteUrl: function () {
            return Promise.resolve("");
        }
    };

    // Cross-alias just in case anything checks capitalized
    window.CrazyGames = window.Crazygames;

    console.log("[Standalone] Lowercase Crazygames shim loaded.");
})();
