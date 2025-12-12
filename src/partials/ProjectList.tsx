import { GradientText, Section } from 'astro-boilerplate-components';

import { Project } from './Project';
import { ColorTags, Tags } from './Tags';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Brobot"
        description={
          <>
            This{' '}
            <a
              className="text-cyan-400 hover:underline"
              href=""
              target="_blank"
            >
              trading bot
            </a>{' '}
            {}
            is trading bot that is capable of identifying opportunities in the
            Toronto stock exchange. It is capable of tracking stocks and 
            reacting in real time to the market moving on pre-specified stocks.
            It helps to identify opportunities based on a variety of strategies 
            configured by the user trader.
            <a href="/posts/brobot" className="text-cyan-400 hover:underline" target="_blank"> Read more</a>
          </>
        }
        link="/posts/brobot"
        img={{ src: '/assets/images/brobot-logo.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.ruby}>Ruby</Tags>
            <Tags color={ColorTags.css}>HTML/Javascript</Tags>
          </>
        }
        highlights={
          <>
            <div className="max-w mt-4 flex flex-col text-gray-400">
              <div>
                <span className="mr-1">📈</span>
                <span>
                  More than <b>1 Million</b> accounts created
                </span>
              </div>
              <div>
                <span className="mr-1">⭐</span>
                <span>
                  Over <b>10,000</b> 5-star reviews
                </span>
              </div>
              <div>
                <span className="mr-1">❤️</span>
                <span>
                  Changed the lives of <b>thousands</b>
                </span>
              </div>
              <div>
                <span className="mr-1">✨</span>
                <span>Available on all platforms... yup, even web</span>
              </div>

              <div>
                <span className="mr-1">🧪</span>
                <span>Uses and pushes modern science around friendship</span>
              </div>
            </div>
          </>
        }

      />
      <Project
        name="We3"
        description={
          <>
            This{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://www.we3app.com/"
              target="_blank"
            >
              friendship app
            </a>{' '}
            {}
            is a new way for adults to make genuine new friendships. We3 uses
            social science and artificial intelligence to match you with the
            most compatible people around you in groups of three. It was
            designed to make it easy and fun to make genuine new friendships while
            removing the awkwardness around this typically tedious process.
            <a href="/posts/we3" className="text-cyan-400 hover:underline" target="_blank"> Read more</a>
          </>
        }
        link="/posts/we3"
        img={{ src: '/assets/images/we3_2.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.ruby}>Ruby</Tags>
            <Tags color={ColorTags.postgres}>Postgres</Tags>
            <Tags color={ColorTags.angularjs}>Angular.js</Tags>
            <Tags color={ColorTags.rails}>Rails</Tags>
            <Tags color={ColorTags.css}>Ionic</Tags>
            <Tags color={ColorTags.grapeapi}>Grape API</Tags>
          </>
        }
        highlights={
          <>
            <div className="max-w mt-4 flex flex-col text-gray-400">
              <div>
                <span className="mr-1">📈</span>
                <span>
                  More than <b>1 Million</b> accounts created
                </span>
              </div>
              <div>
                <span className="mr-1">⭐</span>
                <span>
                  Over <b>10,000</b> 5-star reviews
                </span>
              </div>
              <div>
                <span className="mr-1">❤️</span>
                <span>
                  Changed the lives of <b>thousands</b>
                </span>
              </div>
              <div>
                <span className="mr-1">✨</span>
                <span>Available on all platforms... yup, even web</span>
              </div>

              <div>
                <span className="mr-1">🧪</span>
                <span>Uses and pushes modern science around friendship</span>
              </div>
            </div>
          </>
        }
      />
      <Project
        name="Insight"
        description={
          <>
            Insight is a web app that helps development teams track and improve
            their development process in an awesome dashboard. Insight integrates directly with{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://www.pivotaltracker.com/"
              target="_blank"
            >
              Pivotal Tracker
            </a>
            ,{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://trello.com/"
              target="_blank"
            >
              Trello
            </a>{' '}
            and{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://github.com/"
              target="_blank"
            >
              Github
            </a>{' '}
            to turn sleeping project data into a powerful and fully customizeable
            dashboards for developers and managers. Those dashboards can be shared, with clients or simply displayed on a big screen for the whole team to see.
            Insight is now shut down.
            <a href="/posts/insight" className="text-cyan-400 hover:underline" target="_blank"> Read more</a>
          </>
        }
        link="/posts/insight"
        img={{
          src: '/assets/images/insight_logo_with_name_white.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.ruby}>Ruby</Tags>
            <Tags color={ColorTags.javascript}>Javascript</Tags>
            <Tags color={ColorTags.postgres}>Postgres</Tags>
            <Tags color={ColorTags.rails}>Rails</Tags>
            <Tags color={ColorTags.css}>CSS</Tags>
            <Tags color={ColorTags.d3js}>D3.js</Tags>
            <Tags color={ColorTags.gridster}>Gridster</Tags>
            <Tags color={ColorTags.coffeescript}>CoffeeScript</Tags>
            <Tags color={ColorTags.batmanjs}>Batman.js</Tags>
            ...
          </>
        }
        highlights={
          <>
            <div className="max-w mt-4 flex flex-col text-gray-400">
              <div>
                <span className="mr-1">💳</span>
                <span>Hundreds of paying customers</span>
              </div>
              <div>
                <span className="mr-1">🖥️</span>
                <span>
                  Source of truth of over <b>200</b> teams around the world.
                </span>
              </div>
              <div>
                <span className="mr-1">✨</span>
                <span>100% browser based (no app required)</span>
              </div>
              <div>
                <span className="mr-1">⚙️</span>
                <span>Stylish and highly customizeable dashboards</span>
              </div>
            </div>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
