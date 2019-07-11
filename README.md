# lbmesh-encrypt-aes

This NPM is a refactor of the [Password-Encrypt-Cli](https://www.npmjs.com/package/password-encrypt-cli) NPM to be included in your Node.JS Express Applications.  It is specifically used in the LB Mesh Framework to enable string and object encryption/decryption.     

 
## Installation

 ```
 npm install --save lbmesh-encrypt-aes

```

Activate the module within your route file or objects like so:

```
  let security = require('lbmesh-encrypt-aes');
```

## Usage

By default, we provide a default private key to be used in the module.  In order to view the private key at any time, you can use this method. 

```
  let privKey = security.getPrivateKey();
  
  console.log( privKey ) // returns 'LBMesh.IO'
```

You can set a new private key to be used for all encrypt/decrypt subsequent methods like so:

```
  security.setPrivateKey('my new pass');
  
  console.log( security.getPrivateKey() ) // returns 'my new pass'
  
```

Once you handle your private key, you can then encrypt objects and strings.  Let's go over the syntax for strings. 

To Encrypt a string, use this method:

```
  let encrypted = security.encryptString('string to encrypt', [optionalKey] )
  
  console.log( encrypted ) 
  // returns object for success
  { status: 'success',
  success: true,
  encryptedString: 'U2FsdGVkX18xOahjWk4mscM3' ' }
   
   // returns object for error
   { status: 'error',
  success: false,
  message: 'error message text' }

```

If you do not specify a key after the string to encrypt, it will use the default private key or the value you set in setPrivateKey()

To Decrypt a encrypted string, use this method:

```
  let decrypted = security.decryptString('2FsdGVkX18xOahjWk4mscM3', [optionalKey] );

  console.log( decrypted )

  // returns object on success
  { status: 'success',
  success: true,
  encryptedString: 'U2FsdGVkX1/IqpgAp0KySRJCJg6oijw8J7go7MUCk5E=' }

  // returns object on error
  { status: 'error',
  success: false,
  message: 'Invalid Key/Phrase' }

```

## Changelog

Click to view the [CHANGELOG.MD](https://github.com/lb-mesh/lbmesh-encrypt-aes/blob/master/CHANGELOG.md)

<div style="height:18px;"></div>

## How can I report an issue or make a request?

The easiest way is to start a git issue, and I will attempt to answer ASAP. [GitHub Issues](https://github.com/lb-mesh/lbmesh-encrypt-aes/issues)

<div style="height:18px;"></div>

## Authors

Jamil Spain 
* Twitter: [@iamjamilspain](https://www.twitter.com/iamjamilspain)
* LinkedIn: [Jamil Spain Profile](https://www.linkedin.com/in/jamilspain/)
* Blog: [Jamil Spain Blog](https://blog.iamjamilspain.com)

<div style="height:12px;"></div>


## Source

[GitHub Source Code](https://github.com/lb-mesh/lbmesh-encrypt-aes)





 
