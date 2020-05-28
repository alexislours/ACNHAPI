### 28/05/2020
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