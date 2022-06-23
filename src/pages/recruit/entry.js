import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import styled from 'styled-components';

const entry = ({ location }) => (
  <Layout>
    <Seo title="recruit_entry" />
    <StaticImage
      src="../../images/recruit_entry/title.jpg"
      layout="fullWidth"
      placeholder="blurred"
    />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.section``;

export default entry;
