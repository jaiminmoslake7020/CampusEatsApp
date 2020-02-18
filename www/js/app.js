/* global $,document,console */

document.addEventListener("deviceready", init, false);
function init() {


}; //end of init function

const menuCtrl = document.querySelector('ion-menu-controller');

function openFirst() {
    menuCtrl.enable(true, 'first');
    menuCtrl.open('first');
}

function openEnd() {
    menuCtrl.open('end');
}

function openCustom() {
    menuCtrl.enable(true, 'custom');
    menuCtrl.open('custom');
}

function openMenu() {
    document.querySelector('ion-menu-controller')
        .open();
}