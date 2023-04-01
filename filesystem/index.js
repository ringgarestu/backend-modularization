const fs = require('fs');
const { resolve } = require('path');
const fileReadCallBack = (error, data) => {
    if (error) {
        console.log("Gagal membaca berkas");
        return
    }
    console.log(data);
}

fs.readFile(resolve(__dirname, 'text.txt'), 'utf-8', fileReadCallBack);