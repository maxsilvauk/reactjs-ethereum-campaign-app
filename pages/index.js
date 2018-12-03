import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import {
  Container,
  Card,
  Button,
  Header,
  Menu,
} from 'semantic-ui-react'

class CampaignIndex extends Component {
  // Next handles this. If they dont have JS or on mobile
  // they can still see the content.
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns = () => {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  };

  render() {
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Ethereum KickStarter Campaign
            </Menu.Item>
            <Menu.Item as='a'>List Campaigns</Menu.Item>
            <Menu.Item as='a'>Create New</Menu.Item>
          </Container>
        </Menu>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Campaigns</Header>
          <Button content="Create Campaign" icon="add circle" primary />
          <div>{this.renderCampaigns()}</div>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts.</p>
        </Container>
      </div>
    );
  }
}

export default CampaignIndex;
