## 31/07/2020
- A few fixes related to bugs and fish.

## 30/07/2020
- 1.4.0 furnitures

## 28/07/2020
- Fix the location string for the spider.

## 20/07/2020
- Fix the shadow size for the koi and the carp.

## 15/07/2020
- Fix goliath beetle availability string.
- Fix the time array for giant isopod
- Fix the month array for gigas giant clam

## 14/07/2020
- Fix time array for goliath beetle.

## 13/07/2020
- Fix the month array for single month fish and bugs.

## 06/07/2020
- Added the museum description for arts.
- Added Blather's facts for sea creatures.

## 05/07/2020
- Added sea creatures catch-phrase.

## 04/07/2020
- Added Sea Creatures endpoint
- Updated furnitures for 1.3.0

### 01/06/2020
- Added an array containing the months when a critter is available.
- Added an array containing the hours (24h format) when a critter is available.

### 29/05/2020
- Compressed the K.K. Album cover from 42mb down to 12mb (with minimal quality loss) to reduce bandwidth for end users.

### 28/05/2020
- Added a "catch-translation" object containing the translations of villager catch phrases.
- Fix the species of Rocco.

### 27/05/2020
- The documentation should now be a valid OpenAPI doc.
- Fix file-name and URI for the dimetrodon torso.

### 25/05/2020:
- Fix the species of Curly.
- Calling the endpoints on **/v1a/** instead of **/v1/** return the response in a JSON array instead of a keyed JSON (see in v1a folder).

### 24/05/2020:
- All endpoints are now located on /v1/ instead of the root of the domain.
- Language codes have been changed to match those found in the game (see [#5](https://github.com/alexislours/ACNHAPI/issues/5)).
- Art images have been moved to /v1/images/art from /icons/art.
- A whole lot of changes back-end to make request processing faster.
- New Houseware, Wall mounted and Misc endpoints.
- Hourly music endpoint has been added to the documentation.