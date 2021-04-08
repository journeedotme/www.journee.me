import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

type Breadcrumb = { label: string; url: string }

const getBreadcrumb = (breadcrumbs: Breadcrumb[], endpoint) => {
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
  image?: string
  lang: string
  article?: boolean
  breadcrumbs?: Array<Breadcrumb>
  index?: boolean
  defaultLangUrl: string
  langUrls: Array<{ lang: string; url: string }>
}> = ({
  title,
  description,
  image,
  article,
  breadcrumbs,
  index = true,
  lang,
  langUrls,
  defaultLangUrl,
}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const { siteUrl, favicon, defaultImage, twitterUsername } = site.siteMetadata

  const seo = {
    title,
    favicon: favicon,
    description: description,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang }}>
      {langUrls.map(({ lang, url }) => (
        <link rel="alternate" hrefLang={lang} href={url} key={lang} />
      ))}
      <link rel="alternate" hrefLang={"x-default"} href={defaultLangUrl} />

      <link rel="icon" href={seo.favicon} />

      <meta name="viewport" content="width=device-width, user-scalable=no"/>

      <meta name="description" content={seo.description} />

      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {!index && <meta name="robots" content="noindex" />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumb(breadcrumbs, siteUrl))}
        </script>
      )}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        favicon
      }
    }
  }
`
