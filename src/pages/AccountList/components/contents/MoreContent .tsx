import { Card, Descriptions, Tag, Tooltip } from 'antd';
import moment from 'moment';

const MoreContent = ({ record }: { record: Record<string, any> }) => {
  const getStatusTag = (enable: boolean, enableText: string, disableText: string) => {
    let color = enable ? 'green' : 'volcano';
    let text = enable ? enableText : disableText;
    return <Tag color={color}>{text}</Tag>;
  };

  const changeDate = (date: string) => {
    return moment(date).format('YYYY-MM-DD HH:mm');
  };

  return (
    <>
      <Card type="inner" title="账户信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="账号名">{record.name}</Descriptions.Item>
          <Descriptions.Item label="服务器ID">{record.guildId}</Descriptions.Item>
          <Descriptions.Item label="频道ID">{record.channelId}</Descriptions.Item>
          <Descriptions.Item label="用户Token">
            <Tooltip title={record.userToken}>
              {(record.userToken && record.userToken.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item label="用户SessionId">
            <Tooltip title={record.sessionId}>
              {(record.sessionId && record.sessionId.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item label="用户UserAgent">
            <Tooltip title={record.userAgent}>
              {(record.userAgent && record.userAgent.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card type="inner" title="基本信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="状态">
            {getStatusTag(record.enable, '启用', '未启用')}
          </Descriptions.Item>
          <Descriptions.Item label="mj版本">{record.version}</Descriptions.Item>
          <Descriptions.Item label="账号模式">{record['displays']['mode']}</Descriptions.Item>
          <Descriptions.Item label="remix">
            {getStatusTag(record.remix, '开启', '关闭')}
          </Descriptions.Item>
          <Descriptions.Item label="raw">
            {getStatusTag(record.raw, '开启', '关闭')}
          </Descriptions.Item>
          <Descriptions.Item label="公开">
            {getStatusTag(record.publicMode, '是', '否')}
          </Descriptions.Item>
          <Descriptions.Item label="快速时间剩余">{record.fastTimeRemaining}</Descriptions.Item>
          <Descriptions.Item label="relax用量">{record.relaxedUsage}</Descriptions.Item>
          <Descriptions.Item label="总用量">{record.lifetimeUsage}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Card type="inner" title="并发信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="并发数">{record.coreSize}</Descriptions.Item>
          <Descriptions.Item label="等待队列">{record.queueSize}</Descriptions.Item>
          <Descriptions.Item label="任务超时时间(分钟)">{record.timeoutMinutes}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card type="inner" title="额外信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="创建时间">{changeDate(record.dateCreated)}</Descriptions.Item>
          <Descriptions.Item label="stylize级别">{record['displays']['stylize']}</Descriptions.Item>
          <Descriptions.Item label="variation级别">
            {record['displays']['variation']}
          </Descriptions.Item>
          <Descriptions.Item label="订阅计划">
            {record['displays']['subscribePlan']}
          </Descriptions.Item>
          <Descriptions.Item label="计费方式">{record['displays']['billedWay']}</Descriptions.Item>
          <Descriptions.Item label="续订时间">{changeDate(record.renewDate)}</Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default MoreContent;
