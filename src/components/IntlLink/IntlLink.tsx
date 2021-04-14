import React from "react"
import { GatsbyLinkProps, Link } from "gatsby"
import { useIntl } from "react-intl"
import { getUrl } from "../../configuration/getTranslations"

export const IntlLink: React.FC<{ to: string; className?: string }> = props => {
  const { locale } = useIntl()
  return <Link {...props} to={getUrl(props.to, locale).url} />
}
