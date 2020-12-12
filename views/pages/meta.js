import Head from 'next/head';
import React from 'react';
import config from "../../config"

const Meta = (props) => {
  const { noIndex = false, topic, pageTitle } = props;

  return (
    <Head>
      <title>
        {
          (typeof (topic) !== 'undefined')
            ? (`${topic.title} - ${config.name}`)
            : (typeof (pageTitle) !== 'undefined')
              ? (`${pageTitle} - ${config.name}`)
              : (config.description)
        }
      </title>
      <meta name="keywords" content={config.keywords} />
      <meta name="description" content={config.description} />
      <meta name="author" content="" />
      <meta content="_csrf" name="csrf-param" />
      <meta content="<%= csrf %>" name="csrf-token" />
      {noIndex && (<meta name="robots" content="noindex, follow" />)}
    </Head>
  );
};

export default Meta
