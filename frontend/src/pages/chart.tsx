import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Helmet>
                <title> {`Users - ${CONFIG.appName}`}</title>
            </Helmet>

            <h1>Business Case</h1>
            <p>
                <ul>
                    <li>Azure Migrate Results</li>
                    <li>BVA</li>
                </ul>
            </p>

            <h1>Stakeholders</h1>
            <p>
                <ul>
                    <li>PM: XYZ</li>
                    <li>Stakeholder Development: ABC</li>
                    <li>Stakeholder Infra: ABC</li>
                </ul>
            </p>

            <h1>Migration Plan</h1>
            <p>
                <ul>
                    <li>SaaS before PaaS before IaaS</li>
                    <li>PaaS Capabilities required / Technology Set</li>
                    <li>What stays On-Prem</li>
                </ul>
            </p>

            <h1>List of Applications / Services</h1>
            <p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Stakeholder / Owner</th>
                            <th>Dependencies</th>
                            <th>Type</th>
                            <th>Questionnaire / Risk</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>App 1</td>
                            <td>me@microsoft.com</td>
                            <td>Main CRM Dependency</td>
                            <th>COTS</th>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>App 2</td>
                            <td>me@microsoft.com</td>
                            <th>COTS</th>
                            <td>Oracle Exadata</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>App 3</td>
                            <td>me@microsoft.com</td>
                            <th>Developed Inhouse</th>
                            <td>-</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>Unmapped Servers</td>
                            <td>me@microsoft.com</td>
                            <th>Developed External</th>
                            <td>SQL</td>
                            <td>Low</td>
                        </tr>
                    </tbody>
                </table>
            </p>
        </>
    );
}
