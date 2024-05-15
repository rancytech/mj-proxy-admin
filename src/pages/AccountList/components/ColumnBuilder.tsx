import EditContent from '@/pages/AccountList/components/contents/EditContent ';
import MoreContent from '@/pages/AccountList/components/contents/MoreContent ';
import { EditOutlined, ToolOutlined } from '@ant-design/icons';
import { Button, FormInstance, Space, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import moment from 'moment';
import DelButton from './button/DelButton';
import SyncButton from './button/SyncButton';

const ColumnBuilder = ({
  form,
  modalFooter,
  openModal,
  triggerRefreshAccount,
  handleEdit,
}: {
  form: FormInstance;
  modalFooter: any;
  openModal: (title: string, content: any, footer: any, modalWidth: number) => void;
  triggerRefreshAccount: () => void;
  handleEdit: (values: Record<string, string>) => void;
}) => {
  const columns = [
    {
      title: '账号名',
      dataIndex: 'name',
      render: (text: string, record: Record<string, any>) => (
        <a onClick={() => openModal('账户信息', <MoreContent record={record} />, null, 1000)}>
          {text}
        </a>
      ),
    } as ColumnType<Record<string, any>>,
    {
      title: '状态',
      dataIndex: 'enable',
      width: 100,
      align: 'center',
      render: (enable: boolean) => {
        let color = enable ? 'green' : 'volcano';
        let text = enable ? '启用' : '未启用';
        return <Tag color={color}>{text}</Tag>;
      },
    } as ColumnType<Record<string, any>>,
    {
      title: 'Remix',
      dataIndex: 'remix',
      width: 100,
      align: 'center',
      render: (remix: boolean) => {
        let color = remix ? 'green' : 'volcano';
        let text = remix ? '开启' : '关闭';
        return <Tag color={color}>{text}</Tag>;
      },
    } as ColumnType<Record<string, any>>,
    {
      title: '模式',
      dataIndex: 'mode',
      width: 120,
      align: 'center',
      render: (text: string, record: Record<string, any>) => record['displays']['mode'],
    } as ColumnType<Record<string, any>>,
    {
      title: '快速时间剩余',
      dataIndex: 'fastTimeRemaining',
    } as ColumnType<Record<string, any>>,
    {
      title: '续订时间',
      dataIndex: 'renewDate',
      align: 'center',
      render: (renewData: number) => {
        return moment(renewData).format('YYYY-MM-DD HH:mm');
      },
    } as ColumnType<Record<string, any>>,
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (value: any, record: Record<string, string>) => {
        return (
          <Space>
            <SyncButton record={record} onSuccess={triggerRefreshAccount} />
            <Button
              key="Edit"
              type={'primary'}
              icon={<EditOutlined />}
              onClick={() =>
                openModal(
                  '修改账户',
                  <EditContent form={form} record={record} onSubmit={handleEdit} />,
                  modalFooter,
                  500,
                )
              }
            />
            <Button
              key="EditAndReconnect"
              icon={<ToolOutlined />}
              onClick={() =>
                openModal(
                  '更新账户并重连',
                  <EditContent form={form} record={record} onSubmit={handleEdit} />,
                  modalFooter,
                  500,
                )
              }
            />
            <DelButton record={record} onSuccess={triggerRefreshAccount} />
          </Space>
        );
      },
    } as ColumnType<Record<string, any>>,
  ];

  return columns;
};

export default ColumnBuilder;
