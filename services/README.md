# Services Folder

This folder contains all the functions required to interact with the backend.

For all interactions with the backend API, it's used through `axios`. An `axios` instance has been instantiated in the root folder of `services`, which helps to define the base URL, handles injecting the JWT token (if the user is logged in) as well as error handling.
