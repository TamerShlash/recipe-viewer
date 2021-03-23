## Thought Process

I know that the expectations are to a Ruby/React app for this challenge, but given the specific and narrow use case, I found it very unnecessary to have any form of backend at all.

Contentful is a content delivery API and it provides CDN features, it seems redundant to fetch our recipes from Contentful to our Ruby app, only to serve it again to the browser. Our Ruby app has pretty much become a data proxy which also takes away the CDN features of Contentful.

The right thing to do is to simply make an SPA that fetches the data directly from Contentful, we compile this SPA into static assets that also get hosted on CDN and guarantee optimal performance.

Nonetheless, I know that the purpose of this challenge includes assessing Ruby skill, therefore I've included two solutions: a Ruby one for convenience, and a React one as a better approach.
