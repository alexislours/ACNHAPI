# ACNH API

**PSA: The API will be updated on Sunday, May 24 at 1 PM PST. This will lead to a minute or two of downtime.**

Up until now, I tried to avoid making breaking changes due to the high number of users. But a few major modifications are necessary to go forward. As of now, this mainly concern the "name" keys which will change to respect the ones found in the game.

You can test the changes and prepare your app by making the calls on port 1304 (HTTP) and 1305 (HTTPS) (eg: http://acnhapi.com:1304/fish ). The doc on these ports isn't yet updated but you can find the signification of these codes [here](https://github.com/alexislours/ACNHAPI/issues/5). 

### Introduction:

ACNH API is a **free RESTful API** for **critters**, **fossils**, **art**, **music** and **villagers** from Animal Crossing: New Horizons.

This started for me as a little side project for me but ended up getting much attraction than I ever thought it would get (~100 000 requests per day). I'll be working on making the API documentation and website better in the coming days.

If any of the information on the website is wrong or outdated, you can either contact me on Discord (Alexis#8717) or make a pull request on this repository.

Buy me a [coffee](https://www.buymeacoffee.com/acnhapi) and help contribute toward the server costs to keep this service free!

### Usage:

All the JSON data from this API is under MIT license, the images and music assets are the sole property of Nintendo.

The documentation for the API can be found [here](https://acnhapi.com/doc).

No authentification is required to make requests to any of the endpoints which can be accessed over HTTP or HTTPS.

### Projects using this data: 
- [ACNH Travel Guide](https://apps.apple.com/us/app/acnh-travel-guide/id1502818559)
- [Nook Plaza](https://nookplaza.net/)
- [Critterpedia Plus](https://critterpedia-plus.mutoo.im/)
- [AC Helper (app)](https://apps.apple.com/us/app/id1508764244)
- [AC Helper (source)](https://github.com/Dimillian/ACHNBrowserUI)

### Other projects that can help you build your app:
- [ACNH Item Sheet](https://tinyurl.com/acnh-sheet)
- [ACNH Translation Sheet](https://tinyurl.com/acnh-translation) (also maintained by me).
- [Google Sheets to JSON](https://github.com/acdb-team/google-sheets-to-json) (converts the item spreadsheet to JSON format).
- [Translations Sheet to JSON](https://github.com/Stun3R/acnh-translations-sheet-to-json) (converts the translation spreadsheet to JSON format).

#### Disclaimer: 
ACNH API is a fan made API/Website and claims no ownership of any intellectual property associated with Nintendo or Animal Crossing.
