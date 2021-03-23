ContentfulClient = Contentful::Client.new(
  space: ENV.fetch('CONTENTFUL_SPACE'),
  access_token: ENV.fetch('CONTENTFUL_TOKEN')
)
