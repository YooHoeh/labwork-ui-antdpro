import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Card,
  AutoComplete,
} from 'antd';
import { formatMessage } from 'umi/locale';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Card title={formatMessage({ id: 'contact.config' })}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label={formatMessage({ id: 'contact.email' })}>
            {getFieldDecorator('email', {})(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={formatMessage({ id: 'contact.phone' })}>
            {getFieldDecorator('tel', {})(<Input type="password" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={formatMessage({ id: 'contact.address' })}>
            {getFieldDecorator('address', {})(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={formatMessage({ id: 'contact.zipCode' })}>
            {getFieldDecorator('zipCode', {})(<Input />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
