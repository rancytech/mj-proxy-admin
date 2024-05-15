import { deleteAccount } from '@/services/ant-design-pro/api';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

// 定义 DelButton 接受的 props 类型
interface DelButtonProps {
  record: Record<string, string>;
  onSuccess: () => void; // 新增成功回调函数
}

const DelButton: React.FC<DelButtonProps> = ({ record, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    // 假设你有一个名为deleteRecord的函数来执行API删除操作
    try {
      await deleteAccount(record.id);
      setOpen(false);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Popconfirm
      title="账户删除"
      description="确认删除该账户？"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
      okText={'删除'}
    >
      <Button danger icon={<DeleteOutlined/>} onClick={showPopconfirm}>
      </Button>
    </Popconfirm>
  );
};

export default DelButton;
