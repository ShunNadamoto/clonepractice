import { Tab } from '@/components/Tab203';
import { useState } from 'react';

const tabList = [
  { id: '1', title: 'りんご', content: <div>りんごは安いよ</div> },
  { id: '2', title: 'みかん', content: <div>みかんは安いよ</div> },
  { id: '3', title: 'バナナ', content: <div>バナナは高いよ</div> },
];

const Tabs: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>('1');
  return (
    <div>
      <Tab
        selectedId={selectedTabId}
        tabList={tabList}
        handleClickTab={(tabId) => setSelectedTabId(tabId)}
      />
    </div>
  );
};

export default Tabs;
