import React from 'react';
import Popular from './PopularComponent/Popular';
import Trending from './TrendingComponent/Trending';
import Line from './LineComponent/Line';
import GroupComponent from './RecentComponent/GroupComponent';
import YourCommunity from './YourCommunityComponent/YourCommunityGroup';
import YourCommunityGroup from './YourCommunityComponent/YourCommunityGroup';


const West = () => {
  return (
    <div
      style={{
        //position: 'fixed',
        //top: 100, // Adjust according to the height of your north component
        //left: 200,
        width: 450, // Adjust width as needed
        height: '100%', // Take the full height of the viewport
        backgroundColor: 'transparent',
        // border: '1px solid yellow', // Border to make it visible
        zIndex: 9998, // Ensure it's above other content, but below the NorthComponent
        overflow: 'hidden', // Ensure child components don't overflow
        padding: '50px',
        paddingBottom: '0px'//B'CAUSE PAGE GETTING SCROLLED
      }}
    >
      <Popular />
      <Trending/>
      <Line style={{padding: '1em'}}/>
      <GroupComponent />
      <Line style={{padding: '1em'}}/>     
      <YourCommunityGroup />
      
      
    </div>
  );
};

export default West;
