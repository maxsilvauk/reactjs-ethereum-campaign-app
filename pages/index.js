import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Card, Button } from "semantic-ui-react";

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
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
        />
        <Head title="Home" />
        <Nav />
        <div className="hero">
          <h1 className="title">Campaigns!</h1>
          <div className="description">
          {this.renderCampaigns()}
          <Button content="Create Campaign" icon="add circle" primary />
          </div>
        </div>
  
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default CampaignIndex;
