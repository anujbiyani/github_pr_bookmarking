chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(tree) {
    var nodes = tree[0].children[0].children

    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].title == "open issues") {
        var jiraId = tab.title.match(/NS-[0-9]+:/)[0];
        var repoName = tab.url.split("/")[4];

        chrome.bookmarks.create({
          "parentId": nodes[i].id,
          "title": jiraId + " " + repoName,
          "url": tab.url
        })

        break;
      }
    }
  });
});
