import React from "react";
import { GetDashboardComponent } from "../../graphql";
import Layout from "../../layouts/Default";
import Gallery from "./Gallery";
import Hero from "./Hero";

const Dashboard = () => {
  return (
    <Layout>
      <GetDashboardComponent>
        {({ error, loading, data }) => {
          if (error) {
            return `Error!: ${error}`;
          }

          if (loading || data === undefined) {
            return null;
          }

          const { me, gallery } = data;

          return (
            <>
              <Hero {...me} />
              <Gallery items={gallery} />
            </>
          );
        }}
      </GetDashboardComponent>
    </Layout>
  );
};

export default Dashboard;
