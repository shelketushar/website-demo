import React from 'react';
import Grid from '@material-ui/core/Grid';

import {
  HomePageRequestedReviewsCard,
  HomePageYourOpenPullRequestsCard,
} from '@roadiehq/backstage-plugin-github-pull-requests';
export const HomePage = () => {
  return (
    <>
      <Grid item md={6} xs={12}>
        <HomePageRequestedReviewsCard query="is:pr is:open review-requested:shelketushar" />
      </Grid>

      <Grid item md={6} xs={12}>
        <HomePageYourOpenPullRequestsCard query="is:pr is:open review-requested:shelketushar" />
      </Grid>
    </>
  );
};
