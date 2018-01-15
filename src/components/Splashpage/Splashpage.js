import React from 'react';
import Square from '../Square';
import './Splashpage.css';

export const SplashpageRow = () => {
  let squares = [];
  for (let i = 0; i < 50; i++) {
    squares.push(i);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
      { squares.map((square, index) => {
          return <Square key={index} />
        })
      }
    </div>
  );
}

export const Splashpage = () => {
  let rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(i);
  }

  return(
    <div style={{ marginTop: '115px' }}>

      <div className="splash_content">
        <div className="card">
        <h1
          style={{ fontFamily: '"Work Sans", sans-serif', fontSize: '3em', fontWeight: '400', textAlign: 'right' }}
        >
          Autonomous Web Solutions
        </h1>
          <h2 className="services">full-stack web development</h2>
          <h2 className="services">content strategy</h2>
          <h2 className="services">ux design</h2>
          <h2 className="services">branding and identity design</h2>
          <h2 className="services">customizeable content management</h2>
        </div>

        <div className="logo"></div>
      </div>

      <div className="services_container_right">
        <div className="card_right">
          <h2
            style={{ fontFamily: '"Work Sans", sans-serif', fontSize: '3em', fontWeight: '400', textAlign: 'left' }}
          >
            Proprietary, not pre-packaged.
          </h2>
          <p className="description">
            up.io uses pure code to build your website. Nowhere in the process will you be asked to choose a "theme."
            You'll work with a UX designer to comp your dream app, and our developers will implement your design to work on all screen sizes.
          </p>
          <p className="description">
            The custom content-management features you specify come along for the ride on<strong> your domain</strong> &mdash; not Wix's, not Squarespace's, not Wordpress'.
            With up.io, there's no learning curve. Your app just handles it.
          </p>
        </div>
      </div>

      <div className="services_container">
        <div className="card">
          <h2
            style={{ fontFamily: '"Work Sans", sans-serif', fontSize: '3em', fontWeight: '400', textAlign: 'left' }}
          >
            On the cusp.
          </h2>
          <p className="description">
            Unlike a lot of agencies that are stuck in their ways with outdated and outgrown technologies, up.io uses the latest to build your web application.
            We're redefining the agency scene to make your app's tech scalable and relevant in the long term.
          </p>
        </div>
      </div>

      <div className="background"
        style={{ position: 'absolute', top: '115px', width: '100%'}}
      >
        { rows.map((row, index) => {
            return <SplashpageRow key={index} />
          })
        }
      </div>
    </div>
  );
}