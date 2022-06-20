/** @jsx jsx */
import { Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';

// import {
//   screenshot as screenshotStyles,
//   screenshotHover,
//   withTitleHover,
// } from './styles';

const ThumbnailLink = () => {
  // let screenshot = false;

  // site showcase
  // if (image) {
  //   screenshot = image.gatsbyImage;
  // } else {
  //   // starter showcase
  //   return 'no screenshot';
  // }

  return (
    <Link
    // to={slug}
    // state={{ isModal: true, ...state }}
    // sx={{
    //   ...withTitleHover,
    //   flexDirection: `column`,
    //   alignItems: `flex-start`,
    //   lineHeight: `dense`,
    //   textDecoration: `none`,
    //   '&&': {
    //     borderBottom: `none`,
    //     color: t => t.colors.text.header,
    //     transition: t => t.transitions.default,
    //     '&:hover': screenshotHover,
    //     '&:hover ~ .meta > .featured-site': {
    //       transform: t => `translateY(-${t.space[2]})`,
    //     },
    //   },
    // }}
    >
      {/* {screenshot ? (
        <GatsbyImage
          image={screenshot}
          alt={`Screenshot of ${title}`}
          sx={screenshotStyles}
        />
      ) : (
        <div sx={{ width: 320, bg: `grey.10` }}>missing</div>
      )} */}
      {children}
    </Link>
  );
};

export default ThumbnailLink;
