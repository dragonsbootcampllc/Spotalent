import MyJobPosts from "../Components/HomePageForRecuiters/MyJobPosts";
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Flex, Rate } from 'antd';


const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-80 box-border">
      <MyJobPosts />
      <Flex gap="middle" vertical>
        <Rate defaultValue={2} character={({ index = 0 }) => index + 1} />
        <Rate defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />
      </Flex>
    </div>
  );
}

