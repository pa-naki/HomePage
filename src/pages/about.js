import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <div
          css={{
            margin: `0 auto`,
            border: `1px solid gray`,
          }}
        >
          <h1
            css={{
              color: `red`,
              // Pseudo styles are supported!
              ':hover': {
                textDecoration: `underline`,
              },
              // As are media queries!
              '@media (min-width: 400px)': {
                color: `blue`,
              },
            }}
          >
            This is the title!
          </h1>
          <div>
            The body!
          </div>
        </div>
      )
}

export default AboutPage;