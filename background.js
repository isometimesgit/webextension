const Background = (() => {


    const onBrowserActionHandler = () => {
        const url = browser.runtime.getURL('popup.html');
        browser.tabs.create({ url: url, active: true });
    }
    return {
        init: () => {
            chrome.browserAction.onClicked.addListener(onBrowserActionHandler);
        }
    }
})();
Background.init();