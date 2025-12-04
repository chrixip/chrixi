/**
 * Starting in version 2.2.0, Webamp includes a `webamp/butterchurn`
 * entrypoint which includes the Butterchurn library to enable the
 * Milkdrop visualizer.
 */
import Webamp from "https://unpkg.com/webamp@^2/butterchurn";
    const webamp = new Webamp({
        initialTracks: [
            {
            metaData: {
                artist: "DJ Mike Llama",
                title: "Llama Whippin' Intro",
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://docs.webamp.org/docs/guides/cors
            url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
            duration: 5.322286,
            },
        ],

        initialSkin:{ 
            url: "assets/webamp styles/Winamp98_plus_IE5.wsz"
        },

        availableSkins: [
            { url: "assets/webamp styles/calculator.wsz", name: "Casio Calculator" },
            { url: "assets/webamp styles/memorial2.wsz", name: "Never Forget" },
            { url: "assets/webamp styles/Photoshop_60_v141.wsz", name: "Photoshop" },
            { url: "assets/webamp styles/tricorder.wsz", name: "Tricorder" },
            { url: "assets/webamp styles/White_and_Black.wsz", name: "White & Black" },
            { url: "assets/webamp styles/Winamp98_plus_IE5.wsz", name: "Winamp98 Plus IE5" },
            { url: "assets/webamp styles/WindowsXP.wsz", name: "Windows XP" },
        ],

        windowLayout: {
            main: {
                position: { top: -102, left: 0 },
                shadeMode: false,
                closed: false,
            },
            equalizer: {
                position: { top: 14, left: 0 },
                shadeMode: false,
                closed: false,
            },
            playlist: {
                position: { top: 130, left: 0 },
                shadeMode: false,
                size: {extraHeight: 4, extraWidth: 0},
                closed: false,
            }
        },

        zIndex: 5,
});

webamp.renderWhenReady(document.getElementById("winamp-container"));