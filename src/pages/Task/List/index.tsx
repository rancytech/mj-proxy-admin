import { queryTask } from '@/services/ant-design-pro/api';
import { useIntl } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Pagination, Row, Space, Table, Tag, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const List: React.FC = () => {
  // 初始化 dataSource 状态为空数组
  const [dataSource, setDataSource] = useState([]);

  const intl = useIntl();
  const defaultHeader = intl.formatMessage({
    id: 'menu.task-list',
    defaultMessage: 'Task Table',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await queryTask({});
      // 使用状态 setter 函数更新 dataSource
      setDataSource(res.content);
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: '任务ID',
      dataIndex: 'id',
      width: 200,
      align: 'center'
    },
    {
      title: '类型',
      dataIndex: 'action',
      width: 120,
      align: 'center',
      render: (text, record) => record['displays']['action'],
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      width: 180,
      align: 'center',
      render: (text, record) => record['displays']['submitTime'],
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 120,
      align: 'center',
      render: (text, record) => {
        let color = 'default';
        if (text == 'NOT_START') {
          color = 'default';
        } else if (text == 'SUBMITTED') {
          color = 'lime';
        } else if (text == 'MODAL') {
          color = 'warning';
        } else if (text == 'IN_PROGRESS') {
          color = 'processing';
        } else if (text == 'FAILURE') {
          color = 'error';
        } else if (text == 'SUCCESS') {
          color = 'success';
        }
        return <Tag color={color}>{record['displays']['status']}</Tag>
      }
    },
    {
      title: '进度',
      dataIndex: 'progress',
      width: 130,
      align: 'center',
      showInfo: false,
      render: (text, record) => {
        let percent = 0;
        if (text && text.indexOf('%') > 0) {
          percent = parseInt(text.substring(0, text.indexOf('%')));
        }
        let status = 'normal';
        if (record['status'] == 'SUCCESS') {
          status = 'success';
        } else if (record['status'] == 'FAILURE') {
          status = 'exception';
        }
        return <Progress percent={percent} status={status} size="small" />
      }
    },
    {
      title: '任务描述',
      dataIndex: 'description',
      ellipsis: true
    },
  ];

  const searchLayout = () => { };
  const afterLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination></Pagination>
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="id" />
        {afterLayout()}
      </Card>
    </PageContainer>
  );
};

export default List;
