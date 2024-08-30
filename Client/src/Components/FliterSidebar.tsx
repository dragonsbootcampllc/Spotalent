import {Checkbox , Flex, Typography,InputNumber,Select, Space, Input,Form} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

import type { FormProps } from 'antd';

export default function FilterSidebar(){
    // function onSubmit(e:any) : any{
    //     e.preventDefault();
    //     console.log("Form submitted");
    // }
    // const onFormVariantChange = ({ variant }: { variant: FormProps['variant'] }) => {
    //     console.log(variant);
    //   };
    return (
    <Form 
        // onSubmit={onSubmit}
        // onValuesChange={onFormVariantChange}
    >
        <Flex vertical className="shadow" gap="12px" style={{maxWidth:"20%",padding:"2rem"}} >
            <Title level={2}>Filters</Title>
            <Flex vertical gap="small">
                <Flex horizontal justify="space-between" align="center">
                    <Title level={3}>Category</Title>
                    <Link>Clear</Link>
                </Flex>
                    <Checkbox>
                        <Text>Hourly Rate</Text>
                    </Checkbox>
                <Checkbox>
                    <Text>Fixed Price</Text>
                </Checkbox>
            </Flex>
            <Flex vertical gap="small">
                <Flex horizontal justify="space-between" align="center">
                    <Title level={3}>Fixed price</Title>
                    <Link>Clear</Link>
                </Flex>
                <Space direction='vertical' size={0}>
                    <Text strong>min</Text>
                    <InputNumber prefix="$" suffix="USD" min={0} max={100000} defaultValue={0} style={{width:"100%",borderRadius:"5px",paddingBlock:"0.25rem"}}/>
                </Space>
                <Space direction='vertical'size={0}>
                    <Text strong>max</Text>
                    <InputNumber prefix="$" suffix="USD" min={0} max={100000} defaultValue={0} style={{width:"100%",borderRadius:"5px",paddingBlock:"0.25rem"}}/>
                </Space>
            </Flex>
            <Flex vertical gap="small">
                <Flex horizontal justify="space-between" align="center">
                    <Title level={3}>Hourly rate</Title>
                    <Link>Clear</Link>
                </Flex>
                <Space direction='vertical' size={0}>
                    <Text strong>min</Text>
                    <InputNumber prefix="$" suffix="USD" min={0} max={100000} defaultValue={0} style={{width:"100%",borderRadius:"5px",paddingBlock:"0.25rem"}}/>
                </Space>
                <Space direction='vertical'size={0}>
                    <Text strong>max</Text>
                    <InputNumber prefix="$" suffix="USD" min={0} max={100000} defaultValue={0} style={{width:"100%",borderRadius:"5px",paddingBlock:"0.25rem"}}/>
                </Space>
            </Flex>
            <Flex vertical gap="small">
                <Flex horizontal justify="space-between" align="center">
                    <Title level={3}>Skills</Title>
                    <Link>Clear</Link>
                </Flex>
                <Input placeholder="Search Skills" prefix={<SearchOutlined />} style={{width:"100%",borderRadius:"50px",paddingBlock:"0.5rem"}} />
                <Checkbox >
                    <Text>.NET</Text>
                </Checkbox>
                <Checkbox >
                    <Text>SQL</Text>
                </Checkbox>
                <Checkbox >
                    <Text>C# Programming</Text>
                </Checkbox>
                <Checkbox >
                    <Text>HTML5</Text>
                </Checkbox>
                <Checkbox >
                    <Text>Unity 3D</Text>
                </Checkbox>
            </Flex>
        </Flex>
    </Form>
);
}

