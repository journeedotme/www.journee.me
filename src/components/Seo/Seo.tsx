import React from "react"
import { Helmet } from "react-helmet"
import { getUrls } from "../../configuration/getTranslations"
import siteMetadata from "../../configuration/metadata.json"

type Breadcrumb = { label: string; url: string }

const getBreadcrumb = (breadcrumbs: Breadcrumb[], endpoint: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map(({ label, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: `${endpoint}${url}`,
    })),
  }
}

export const Seo: React.FC<{
  title: string
  description: string
  lang: string
  index: boolean
  pathname: string
  canonical: string
  breadcrumbs?: Array<Breadcrumb>
  image?: string
  article?: boolean
}> = props => {
  const image = `${siteMetadata.url}${props.image || siteMetadata.banner}`
  const url = `${siteMetadata.url}${props.pathname}`

  return (
    <Helmet title={props.title} htmlAttributes={{ lang: props.lang }}>
      {getUrls(props.canonical).map(({ lang, url }) => (
        <link rel="alternate" hrefLang={lang} href={url} key={lang} />
      ))}

      <link rel="alternate" hrefLang={"x-default"} href={props.canonical} />

      <link rel="icon" href={siteMetadata.favicon} />

      <meta name="viewport" content="width=device-width, user-scalable=no" />

      <meta name="description" content={props.description} />

      <meta name="image" content={image} />

      {url && <meta property="og:url" content={url} />}

      {(props.article ? true : null) && (
        <meta property="og:type" content="article" />
      )}

      <meta property="og:title" content={props.title} data-testid="og:title" />

      {!props.index && <meta name="robots" content="noindex" />}

      {props.description && (
        <meta property="og:description" content={props.description} />
      )}

      {props.image && <meta property="og:image" content={props.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}

      {props.title && <meta name="twitter:title" content={props.title} />}

      {props.description && (
        <meta name="twitter:description" content={props.description} />
      )}

      {props.image && <meta name="twitter:image" content={props.image} />}

      {props.breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumb(props.breadcrumbs, siteMetadata.url))}
        </script>
      )}
    </Helmet>
  )
}
