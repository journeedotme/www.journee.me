import React from "react"
import { render, waitFor } from "../../../utils/test-utils"
import { Seo } from "../Seo"

describe("<Seo /> test suite", () => {
  it("as an english user in the home page, the default url to fr should be /fr/ and not /", async () => {
    render(
      <Seo
        index
        title={"title"}
        description={"description"}
        pathname={"/"}
        lang={"en"}
        canonical={"/"}
      />
    )

    await waitFor(() => {
      const head = document.head
      expect(
        head.querySelector("[hreflang=x-default]")?.getAttribute("href")
      ).toEqual("https://www.journee.me")
      expect(head.querySelector("[hreflang=fr]")?.getAttribute("href")).toEqual(
        "https://www.journee.me/fr/"
      )
      expect(head.querySelector("[hreflang=en]")?.getAttribute("href")).toEqual(
        "https://www.journee.me"
      )
    })
  })

  it("as a french user in the contact page, the default url to english should be /contact/ and not /en/contact", async () => {
    render(
      <Seo
        index
        title={"title"}
        description={"description"}
        pathname={"/fr/contact/"}
        lang={"fr"}
        canonical={"/contact/"}
      />
    )

    await waitFor(() => {
      const head = document.head
      expect(
        head.querySelector("[hreflang=x-default]")?.getAttribute("href")
      ).toEqual("https://www.journee.me/contact/")
      expect(head.querySelector("[hreflang=fr]")?.getAttribute("href")).toEqual(
        "https://www.journee.me/fr/contact/"
      )
      expect(head.querySelector("[hreflang=en]")?.getAttribute("href")).toEqual(
        "https://www.journee.me/contact/"
      )
    })
  })

  it("as a page that should not be indexed, the attribute no-index should be set", async () => {
    render(
      <Seo
        index={false}
        title={"title"}
        description={"description"}
        pathname={"/fr/contact/"}
        lang={"fr"}
        canonical={"/contact/"}
      />
    )

    await waitFor(() => {
      const head = document.head
      expect(
        head.querySelector("[name=robots]")?.getAttribute("content")
      ).toEqual("noindex")
    })
  })

  it("as a page that should be indexed, the attribute no-index should not be set", async () => {
    render(
      <Seo
        index
        title={"title"}
        description={"description"}
        pathname={"/fr/contact/"}
        lang={"fr"}
        canonical={"/contact/"}
      />
    )

    await waitFor(() => {
      expect(document.head.querySelector("[name=robots]")).toEqual(null)
    })
  })
})
