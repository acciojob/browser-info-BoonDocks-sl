//your JS code here. If required.
// Get the browser name and version using the navigator object
var browserName = navigator.appName;
var version = navigator.appVersion;

// Find the browser name from the user agent string
if (navigator.userAgent.indexOf("Opera") !== -1 || navigator.userAgent.indexOf('OPR') !== -1) {
    browserName = 'Opera';
} else if (navigator.userAgent.indexOf("Edge") !== -1) {
    browserName = 'Microsoft Edge';
} else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    browserName = 'Google Chrome';
} else if (navigator.userAgent.indexOf("Safari") !== -1) {
    browserName = 'Safari';
} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    browserName = 'Mozilla Firefox';
} else if (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode === true) {
    browserName = 'Internet Explorer';
}

// Find the browser version
if (navigator.userAgent.indexOf("Version") !== -1) {
    version = navigator.userAgent.split("Version")[1].split(" ")[1];
} else if (navigator.userAgent.indexOf("Edge") !== -1) {
    version = navigator.userAgent.split("Edge/")[1];
} else {
    version = navigator.userAgent.split(browserName + "/")[1];
    if (version.indexOf(" ") !== -1)
        version = version.split(" ")[0];
}

// Display the browser information on the page
var browserInfo = "You are using " + browserName + " version " + version;
document.getElementById('browser-info').innerText = browserInfo;
