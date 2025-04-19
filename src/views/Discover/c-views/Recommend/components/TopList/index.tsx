import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import TopListWrapper from "./style";
import Title from "../Title";
import TopTable from "../TopData";
import { getTopList } from "@/apis";

interface IProps {
  children?: ReactNode;
}

const TopList: FC<IProps> = () => {
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    getTopList().then(({ list }) => {
      setTopList(list.slice(0, 3));
    });
  },[]);

  return (
    <TopListWrapper>
      <Title title="榜单" morePath='/discover/ranking' />
      <TopTable columns={topList}></TopTable>
    </TopListWrapper>
  );
};

export default memo(TopList);
