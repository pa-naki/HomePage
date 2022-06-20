/** @jsx jsx */
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// import { Flex } from 'theme-ui';

export default function Collapsible({ heading, fixed, children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
    // sx={{
    //   borderBottom: t =>
    //     collapsed ? 0 : `1px solid ${t.colors.standardLine}`,
    //   display: collapsed ? false : `flex`,
    //   flex: collapsed ? `0 0 auto` : `1 1 auto`,
    //   minHeight: fixed ? `${fixed}px` : `initial`,
    //   maxHeight: fixed ? `${fixed}px` : `initial`,
    //   flexBasis: 0,
    //   overflowY: collapsed ? false : `auto`,
    // }}
    >
      <div>
        {/* <Flex
        sx={{
          flexDirection: `column`,
          minHeight: `100%`,
          width: `100%`,
        }}
      > */}

        <button
          // sx={{
          //   alignItems: `center`,
          //   color: `text.secondary`,
          //   cursor: `pointer`,
          //   display: `flex`,
          //   flexShrink: 0,
          //   fontWeight: `body`,
          //   fontSize: 1,
          //   my: 7,
          //   mr: 5,
          //   p: 0,
          //   letterSpacing: `tracked`,
          //   textTransform: `uppercase`,
          //   background: `none`,
          //   border: `none`,
          //   '&:hover': {
          //     color: `gatsby`,
          //   },
          // }}
          // aria-expanded={!collapsed}
          onClick={() => setCollapsed(collapsed => !collapsed)}
        >
          {` `}
          <span /*sx={{ display: `flex`, ml: `auto` }}*/>
            {collapsed ? <FaAngleDown /> : <FaAngleUp />}
          </span>
        </button>
        <div
        // sx={{
        //   display: collapsed ? `none` : `block`,
        //   overflowY: `auto`,
        // }}
        >
          {children}
        </div>
        {/* </Flex> */}
      </div>
    </div>
  );
}
