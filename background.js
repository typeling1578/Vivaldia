browser.browserAction.onClicked.addListener(function () {
    browser.tabs.create({ url: browser.runtime.getURL("game/index.html") })
})

