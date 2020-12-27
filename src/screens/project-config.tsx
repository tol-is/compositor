import * as React from "react";
import styled from "styled-components";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import { useProject } from "../mst";

import { TextStylesView } from "../editor/text-styles-view";
import { FontsView } from "../editor/fonts-view";

interface ConfigViewComponentProps {}

const StyledEditorView = styled.section`
  display: grid;
  flex: 1;
  grid-template-columns: 230px 1fr;
  grid-template-areas: "left main";
`;

const LeftPane = styled.section`
  grid-area: left;
  border-right: 3px solid #2a2a2a;
  flex: 1;
  padding: 8px;
  font-size: 14px;
`;

const MainPane = styled.section`
  grid-area: main;
  position: relative;
  flex: 1;
`;

export const ProjectConfig = (props: ConfigViewComponentProps) => {
  const { path } = useRouteMatch();
  const project = useProject();

  if (!project) return null;

  const page = project.pages[0];

  return (
    <StyledEditorView>
      <LeftPane>
        <Link to={`${path}/fonts`}>Fonts</Link>
        <br />
        <Link to={`${path}/type`}>Text Styles</Link>
      </LeftPane>
      <MainPane>
        <Switch>
          <Route path={`${path}/fonts`} exact={false}>
            <FontsView project={project} />
          </Route>
          <Route path={`${path}/type`} exact={false}>
            <TextStylesView project={project} />
          </Route>
        </Switch>
      </MainPane>
    </StyledEditorView>
  );
};