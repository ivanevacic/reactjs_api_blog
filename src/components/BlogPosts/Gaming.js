import React from "react";

import { Card } from "antd";
const { Meta } = Card;

const Gaming = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="http://global-img.gamergen.com/dragon-quest-heroes-ps4-edition-limitee-collector-photos-01-09-2014-2_0903D4000000780775.jpg"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};
export default Gaming;
