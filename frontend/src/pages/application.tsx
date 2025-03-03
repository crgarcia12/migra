import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ApplicationView } from 'src/sections/application/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Application - ${CONFIG.appName}`}</title>
      </Helmet>

      <ApplicationView />
    </>
  );
}
