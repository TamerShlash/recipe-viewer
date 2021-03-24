# README

This is a simple application to fetch recipes from Contentful and display them as described in the challenge. I tried to make it as realistic as possible both inside and outside, but it still could use a few improvements, such has:

* Custom error pages
* Caching views
* Using the Synchronization feature offered by Contentful instead of fetching data on every request. This might be handy since the recipes are updated every week only.

I have not invested time in any of these improvements, nor in testing, because of time limits, and because having this app is probably not a good idea to begin with as I described in the README.md document in the root directory of the repo.

## Dependencies:

* Ruby 2.7.2

## Environment Variables

This app requires 2 environment variables: `CONTENTFUL_SPACE` and `CONTENTFUL_TOKEN`. I've added `dotenv-rails` for development and testing, so feel free to use the `.env` file.

## Running

After `bundle install`, you can just run the app with `rails s` and navigate to `http://localhost:3000`.
