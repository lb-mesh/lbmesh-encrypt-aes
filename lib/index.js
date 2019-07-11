/*
 Copyright (c) IBM Corp. 2013,2017. All Rights Reserved.
 This project is licensed under the MIT License, full text below.

Author: Jamil Spain, jamilhassanspain@gmail.com

 --------

 MIT license

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
'use strict'

const CryptoJS         = require('crypto-js');
const debug             = require('debug')('app:utility:encrypt-aes')
let defaultKey        = "LBMesh.IO";
const utf8              = require('utf8');


module.exports = {
    setPrivateKey: (value) => {
        defaultKey = value;
    },
    getPrivateKey: () => {
        return defaultKey;
    },
    encryptObject: (dataObject, key) => {
        if( key == undefined ){ key == defaultKey; }
        let plaintext =  CryptoJS.AES.encrypt(JSON.stringify(dataObject,null,2), key);
        return plaintext.toString();
    },
    decryptObject: (encryptedString, key) => {
        if( key == undefined ){ key == defaultKey; }
        let bytes = CryptoJS.AES.decrypt(encryptedString, key);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    },
    encryptString: (dataString, key) => {
        if( key == undefined ){ key == defaultKey; }
        let plaintext =  CryptoJS.AES.encrypt(dataString, key);
        return plaintext.toString();
    },
    decryptString: (encryptedString, key) => {
        if( key == undefined ){ key == defaultKey; }
        let bytes = CryptoJS.AES.decrypt(encryptedString, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

};

/**
 * 
 * 
 
let bytes = CryptoJS.AES.decrypt(fileString, defaultKey);
return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
let plaintext =  CryptoJS.AES.encrypt(JSON.stringify(dataObject,null,2), defaultKey);

 */
