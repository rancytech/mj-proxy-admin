import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 Midjourney Proxy Admin
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Midjourney Proxy Admin 是一个整合了 umi，Ant Design 和 ProComponents
            的后台管理界面。致力于提供Midjourney Proxy的各种管理功能。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://github.com/novicezk/midjourney-proxy"
              title="了解 midjourney-proxy"
              desc="midjourney-proxy 是一个代理 MidJourney 的 discord 频道的开源项目，实现api形式调用AI绘图。"
            />
            <InfoCard
              index={2}
              title="了解 wechat-ai"
              href="https://github.com/litter-coder/wechat-ai"
              desc="wechat-ai 是基于 chatgpt-on-wechat 和 midjourney-proxy 实现的一个微信机器人项目。"
            />
            <InfoCard
              index={3}
              title="了解 midjourney-proxy-plus"
              href="https://github.com/litter-coder/midjourney-proxy-plus"
              desc="midjourney-proxy 的先行版，采用了全新模式。支持mj所有的指令和相关操作，精准匹配所有提交的任务。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
