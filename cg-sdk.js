// Stickman WW2 - CrazyGames SDK v3 Compatibility Shim
(function () {
    "use strict";

    window.CrazyGames = window.CrazyGames || {};

    window.CrazyGames.SDK = {
        init: function () {
            console.log("[Standalone V3] SDK initialized successfully.");
            return Promise.resolve();
        },
        environment: "local",
        game: {
            gameplayStart: function () {
                console.log("[Standalone V3] Gameplay started.");
            },
            gameplayStop: function () {
                console.log("[Standalone V3] Gameplay stopped.");
            },
            happytime: function () {
                console.log("[Standalone V3] Happytime triggered.");
            },
            loadingStart: function () {},
            loadingStop: function () {}
        },
        ad: {
            requestAd: function (type, callbacks) {
                console.log("[Standalone V3] Ad requested:", type);
                if (callbacks && typeof callbacks.finished === "function") {
                    callbacks.finished();
                } else if (callbacks && typeof callbacks.success === "function") {
                    callbacks.success();
                }
            },
            hasAdBlocker: function () {
                return Promise.resolve(false);
            }
        },
        user: {
            isUserAccountAvailable: false,
            getUser: function () {
                return Promise.resolve(null);
            }
        },
        data: {
            setItem: function () {},
            getItem: function () {
                return Promise.resolve(null);
            }
        }
    };

    console.log("[Standalone V3] CrazyGames SDK v3 shim loaded.");
})();
