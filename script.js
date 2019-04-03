var notifications = new PageNotifications();

function showInfoNotification() {
    notifications.push("Info","Information notification.","info",false);
}
function showSuccessNotification() {
    notifications.push("Success","Success notification.","success",false);
}
function showWarningNotification() {
    notifications.push("Warning","Warning notification.","warning",false);
}
function showErrorNotification() {
    notifications.push("Error","Error notification.","error",false);
}
function showLongNotification() {
    notifications.push("Long Notification","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","info",false);
}
function showTimedNotification() {
    notifications.push("5 Secs","Timed notification for only 5 seconds.","success",5000);
}
function closeAllNotifications() {
    notifications.closeAll();
}
