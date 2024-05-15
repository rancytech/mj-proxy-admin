import { Card, Form, FormInstance, Input, InputNumber } from 'antd';
import { useEffect } from 'react';

const EditorContent = ({
  form,
  onSubmit,
  record,
}: {
  form: FormInstance;
  onSubmit: (values: any) => void;
  record: Record<string, any>;
}) => {
  // 当组件挂载或者record更新时，设置表单的初始值
  useEffect(() => {
    form.setFieldsValue(record);
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
      <Form.Item label="id" name="id" hidden>
        <Input />
      </Form.Item>
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
    </Form>
  );
};

export default EditorContent;
