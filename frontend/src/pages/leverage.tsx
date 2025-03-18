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
              <th>Code Optimizations</th>
              <th>Current Cost</th>
              <th>Modernization Drivers</th>
            </tr>
          </thead>

          <tbody id="embark-table">
            <tr>
              <th>3</th>
              <td>App 3</td>
              <td>me@microsoft.com</td>
              <td>3530</td>
              <td>800</td>
              <td>Managed Redis</td>
            </tr>
          </tbody>
        </table>
      </p>
    </>
  );
}
