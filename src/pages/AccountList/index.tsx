import ColumnBuilder from '@/pages/AccountList/components/ColumnBuilder';
import AddContent from '@/pages/AccountList/components/contents/AddContent ';
import MyModal from '@/pages/AccountList/components/Modal';
import { createAccount, queryAccount, updateAccount } from '@/services/ant-design-pro/api';
import { useIntl } from '@@/exports';
import { ReloadOutlined, UserAddOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Form, Pagination, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const AccountList: React.FC = () => {
  // 初始化 dataSource 状态为空数组
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [title, setTitle] = useState<string>('');
  const [footer, setFooter] = useState({});
  const [modalWidth, setModalWidth] = useState(1000);
  const [refresh, setRefresh] = useState(0);
  const [form] = Form.useForm();

  const openModal = (title: string, content: any, footer: any, modalWidth: number) => {
    form.resetFields();
    setTitle(title);
    setModalContent(content);
    setFooter(footer);
    setModalWidth(modalWidth);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalContent({});
    setFooter({});
    setModalVisible(false);
  };

  const modalFooter = () => {
    return (
      <>
        <Button key="back" onClick={hideModal}>
          取消
        </Button>
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          提交
        </Button>
      </>
    );
  };

  const intl = useIntl();
  const defaultHeader = intl.formatMessage({
    id: 'menu.list.account-list',
    defaultMessage: 'Account Table',
  });

  // 定义一个 triggerRefresh 函数，使其增加 refresh 的值，从而触发重新渲染
  const triggerRefreshAccount = () => {
    setRefresh(refresh + 1);
  };

  const fetchData = async () => {
    const res = await queryAccount({});
    setDataSource(res.content);
  };

  const handleAdd = async (values: Record<string, string>) => {
    await createAccount(values);
    triggerRefreshAccount();
    hideModal();
  };

  const handleEdit = async (values: Record<string, string>) => {
    await updateAccount(values.id, values);
    triggerRefreshAccount();
    hideModal();
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const beforeLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          {defaultHeader}
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>
            <Button
              type={'primary'}
              icon={<UserAddOutlined />}
              onClick={() => {
                openModal(
                  '新增账户',
                  <AddContent form={form} onSubmit={handleAdd} />,
                  modalFooter,
                  1000,
                );
              }}
            >
              添加
            </Button>
            <Button onClick={triggerRefreshAccount} icon={<ReloadOutlined />}>
              刷新
            </Button>
          </Space>
        </Col>
      </Row>
    );
  };
  const afterLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}></Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination></Pagination>
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      <Card>
        {beforeLayout()}
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={ColumnBuilder({
            form,
            modalFooter,
            openModal,
            triggerRefreshAccount,
            handleEdit,
          })}
          pagination={false}
        />
        {afterLayout()}
      </Card>
      <MyModal
        title={title}
        modalVisible={modalVisible}
        hideModal={hideModal}
        modalContent={modalContent}
        footer={footer}
        modalWidth={modalWidth}
      ></MyModal>
    </PageContainer>
  );
};

export default AccountList;
