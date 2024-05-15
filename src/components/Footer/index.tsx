import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Midjourney Proxy Admin',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Wechat Ai',
          title: 'Wechat Ai',
          href: 'https://github.com/litter-coder/wechat-ai',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/novicezk/midjourney-proxy',
          blankTarget: true,
        },
        {
          key: 'Midjourney Proxy Plus',
          title: 'Midjourney Proxy Plus',
          href: 'https://github.com/litter-coder/midjourney-proxy-plus',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
