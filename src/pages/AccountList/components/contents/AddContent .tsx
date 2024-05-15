import { Card, Col, Form, FormInstance, Input, InputNumber, Row } from 'antd';
import { useEffect } from 'react';

const AddContent = ({
  form,
  onSubmit,
}: {
  form: FormInstance;
  onSubmit: (values: any) => void;
}) => {
  // 使用 useEffect 来在组件挂载时设置表单的初始值
  useEffect(() => {
    form.setFieldsValue({
      sessionId: '9c4055428e13bcbf2248a6b36084c5f3',
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      coreSize: 3,
      queueSize: 10,
      timeoutMinutes: 5,
    });
  });

  return (
    <Form
      form={form}
      labelAlign="left"
      layout="horizontal"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onSubmit}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card type="inner" title="账户信息">
            <Form.Item
              label="服务器ID"
              name="guildId"
              rules={[{ required: true, message: '请输入服务器ID' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="频道ID"
              name="channelId"
              rules={[{ required: true, message: '请输入服务器ID' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="用户Token"
              name="userToken"
              rules={[{ required: true, message: '请输入服务器ID' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="用户SessionId" name="sessionId">
              <Input />
            </Form.Item>
            <Form.Item label="用户Agent" name="userAgent">
              <Input />
            </Form.Item>
          </Card>
        </Col>
        <Col span={12}>
          <Card type="inner" title="并发信息">
            <Form.Item label="并发数" name="coreSize">
              <InputNumber min={1} max={12} />
            </Form.Item>
            <Form.Item label="等待队列" name="queueSize">
              <InputNumber min={1} />
            </Form.Item>
            <Form.Item label="任务超时时间(分钟)" name="timeoutMinutes">
              <InputNumber min={1} />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddContent;
