import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <h1>Landing Zone Availability</h1>
      <p>
        <ul>
          <li>Container Apps</li>
          <li>Web Apps</li>
          <li>OpenAI</li>
        </ul>
      </p>

      <h1>Prioritize Applications</h1>
      <p>
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Name</th>
              <th>Responsible Team</th>
              <th># Dependencies</th>
              <th>Type</th>
              <th>Resource Link</th>
              <th>Questionnaire / Risk</th>
              <th>Estimated Azure Cost</th>
              <th>AppCat Results</th>
              <th>Vender Offers SaaS/PaaS</th>
            </tr>
          </thead>

          <tbody id="embark-table">
            <tr>
              <th>1</th>
              <td>App 1</td>
              <td>me@microsoft.com</td>
              <td>Main CRM Dependency</td>
              <td>COTS</td>
              <td>-</td>
              <td>Low</td>
              <td>Very low</td>
              <td>-</td>
              <td>Run quickcheck with AI</td>
            </tr>
            <tr>
              <th>2</th>
              <td>App 2</td>
              <td>me@microsoft.com</td>
              <td>Oracle Exadata</td>
              <td>COTS</td>
              <td>-</td>
              <td>High</td>
              <td>Very low</td>
              <td>-</td>
              <td>Show</td>
            </tr>
            <tr>
              <th>3</th>
              <td>App 3</td>
              <td>me@microsoft.com</td>
              <td>-</td>
              <td>Developed Inhouse</td>
              <td><a href="#">Show</a></td>
              <td>Medium</td>
              <td>Very low</td>
              <td><button type="button">Show</button></td>
              <td>-</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Unmapped Servers</td>
              <td>me@microsoft.com</td>
              <td>SQL</td>
              <td>Developed External</td>
              <td>-</td>
              <td>Low</td>
              <td>Very low</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </p>
    </>
  );
}
