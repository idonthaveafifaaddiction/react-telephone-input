Reactjs Component for International Telephone Input
===================================================

This is a fork of https://github.com/mukeshsoni/react-telephone-input.

I removed the dropdown and a bunch of things i wasn't interested in and made it so
this component just returns a raw <input>

```js
var ReactTelInput = require('react-telephone-input-simple');
React.render(<ReactTelInput
                defaultCountry="in"
                onChange={handleInputChange}/>
                onBlur={handleInputBlur}
                document.getElementById('my-container'));
```

## Features
* Automatically format the number as the user types
* Typing a different dial code will automatically update the displayed flag

You can try the app by downloading everything and running the commands given below -

```
$ npm install
$ npm start

go to your browser and type `http://localhost:8000`
```
