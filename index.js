const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");

const desktop = require("os").homedir() + "/Desktop";

const hello = {
    say() {
        console.log("hello");
    },

    python() {
        fs.writeFileSync(
            path.join(desktop, "hello.py"),
            'print("hello")'
        );
    },

    text() {
        fs.writeFileSync(
            path.join(desktop, "hello.txt"),
            "hello"
        );
    },

    async qr() {
        await QRCode.toFile(
            path.join(desktop, "hello.png"),
            "hello"
        );
    },

    async qrConsole() {
        await QRCode.toFile(
            path.join(desktop, "hello-console.png"),
            'console.log("hello")'
        );
    },

    async everything() {
        this.say();
        this.python();
        this.text();
        await this.qr();
        await this.qrConsole();
    }
};

module.exports = hello;
