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
// const jsontoxml         = require('jsontoxml');
// const jsonfile          = require('jsonfile');
const utf8              = require('utf8');


module.exports = {
    setPrivateKey: (value) => {
        defaultKey = value;
    },
    getPrivateKey: () => {
        return defaultKey;
    },
    encryptObject: (dataObject, key) => {
        //let answer = {"status": "error", "success": false, "message":"Invalid Key/Phrase"};
        let plaintext =  CryptoJS.AES.encrypt(JSON.stringify(dataObject), (key == undefined)? defaultKey:key);

        return plaintext.toString();
    },
    decryptObject: (encryptedString, key) => {
        let answer = {"status": "error", "success": false, "message":"Invalid Key/Phrase"};
        let bytes = CryptoJS.AES.decrypt(encryptedString, (key == undefined)? defaultKey:key);
        
        if( bytes.toString().length > 0 ){
            answer.status = "success";
            answer.success = true;
            answer.originalObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            delete answer.message;
        }

        debug('decryptObject() Response:' );
        debug( answer );

        return answer;
    },
    encryptString: (dataString, key) => {
        debug('key passed in: ', key);

        let plaintext =  CryptoJS.AES.encrypt(dataString, (key == undefined)? defaultKey:key) ;
        return plaintext.toString();
    },
    decryptString: (encryptedString, key) => {
        let answer = {"status": "error", "success": false, "message":"Invalid Key/Phrase"};
        let bytes = CryptoJS.AES.decrypt(encryptedString, (key == undefined)? defaultKey:key);
            
        if( bytes.toString().length > 0 ){
            answer.status = "success";
            answer.success = true;
            answer.originalString = bytes.toString(CryptoJS.enc.Utf8);
            delete answer.message;
        }
        debug('decryptString() Response:' );
        debug( answer );

        return answer;
    }

};
