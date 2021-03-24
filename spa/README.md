# README

This is a simple application to fetch recipes from Contentful and display them as described in the challenge. I tried to make it as realistic as possible both inside and outside, but it still could use quite a few improvements.

This is my preferred solution. It could be built and hosted with a CDN.

## Dependencies:

* nodejs 14.16.0
* yarn 1.22.10

## Environment Variables

This app requires 2 environment variables: `REACT_APP_CONTENTFUL_SPACE` and `REACT_APP_CONTENTFUL_TOKEN`. You can add them to the `.env` file and it will work fine.

## Running

Install packages using `yarn` then run the development server with `yarn start`. You can also build the app for production with `yarn build`.
