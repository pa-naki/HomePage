// /** @jsx jsx */
// import { hexToRGBA } from 'gatsby-interface';

// import { ShowcaseSidebarMaxWidth } from '../../components/shared/constants/layout';

const sticky = {
  position: `sticky`,
  top: `0`,
};

export const SidebarContainer = ({ children, className }) => (
  <div
    className={className}
    // sx={theme => ({
    //   display: `none`,
    //   [theme.mediaQueries.desktop]: {
    //     borderColor: theme.colors.ui.border.subtle,
    //     borderRightStyle: `solid`,
    //     borderRightWidth: `1px`,
    //     display: `block`,
    //     flexBasis: ShowcaseSidebarMaxWidth,
    //     height: `100vh`,
    //     minWidth: ShowcaseSidebarMaxWidth,
    //     pt: 0,
    //   },
    // })}
    // css={sticky}
  >
    {children}
  </div>
);

export const SidebarBody = ({ children }) => (
  <div
  // sx={{
  //   display: `flex`,
  //   flexDirection: `column`,
  //   height: `100vh`,
  //   paddingLeft: 7,
  // }}
  >
    {children}
  </div>
);

export const SidebarHeader = () => (
  <h3
  // sx={theme => ({
  //   margin: 0,
  //   [theme.mediaQueries.desktop]: {
  //     color: theme.colors.text.secondary,
  //     flexShrink: 0,
  //     fontSize: 3,
  //     fontWeight: `body`,
  //     verticalAlign: `center`,
  //     margin: 0,
  //     paddingLeft: theme.space[7],
  //   },
  // })}
  >
    Filters
  </h3>
);

export const ContentContainer = ({ children }) => (
  <div /*sx={{ width: `100%` }}*/>{children}</div>
);

export const ContentHeader = ({ children }) => (
  <div
  // sx={_ => ({
  //   alignItems: `center`,
  //   backgroundColor: theme => hexToRGBA(theme.colors.white, 0.985, true),
  //   display: `flex`,
  //   flexDirection: `row`,
  //   flexWrap: `wrap`,
  //   justifyContent: `space-between`,
  //   px: 7,
  //   zIndex: 1,
  //   ...sticky,
  // })}
  >
    {children}
  </div>
);

const ResultCount = ({ children }) => (
  <small
  // sx={{
  //   color: `text.secondary`,
  //   fontSize: 2,
  //   fontWeight: `body`,
  // }}
  >
    {children}
  </small>
);

export const ContentTitle = ({
  search,
  items,
  filters,
  nodes,
  label,
  // TODO smooth that out ("Starters" uses "size")
  what = `length`,
}) => (
  <h1
  // sx={{
  //   fontSize: 4,
  //   lineHeight: `solid`,
  //   margin: 0,
  //   fontWeight: `bold`,
  // }}
  >
    {search.length === 0 ? (
      filters[what] === 0 ? (
        // no search or filters
        <span>
          {label}s <ResultCount>({nodes.length})</ResultCount>
        </span>
      ) : (
        <span>
          {items.length}
          {` `}
          {filters[what] === 1 && filters.values()[0]}
          {` `}
          {label}
          {items.length > 1 && `s`}
          {` `}
          <ResultCount>(filtered)</ResultCount>
        </span>
      )
    ) : (
      <span>
        {items.length} search result
        {items.length !== 1 && `s`}
      </span>
    )}
  </h1>
);
