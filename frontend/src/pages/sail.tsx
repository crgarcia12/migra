import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Users - ${CONFIG.appName}`}</title>
      </Helmet>

      <h1>Application Progress</h1>
      <p>
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Name</th>
              <th>Responsible Team</th>
              <th>Initial Mandatory Issues</th>
              <th>Remaining Mandatory Issues</th>
              <th>Create DevOps Pipeline</th>
              <th>Create Auto-Remediations</th>
              <th>Create Dockerfile</th>
              <th>Create Test Plan</th>
              <th>Tests passing</th>
            </tr>
          </thead>

          <tbody id="embark-table">
            <tr>
              <th>3</th>
              <td>App 3</td>
              <td>me@microsoft.com</td>
              <td>500</td>
              <td>170</td>
              <td><button type="button">Create</button></td>
              <td><button type="button">Create</button></td>
              <td><button type="button">Create</button></td>
              <td><button type="button">Create</button></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </p>
    </>
  );
}
