import { Input } from "@arco-design/web-react";
import { memo, useState } from "react"; // 1. 导入useState
import type { FC, ReactNode } from "react";
import { InputWrapper } from "./styles";
import Icon from "../Icon";

interface IProps {
  children?: ReactNode;
}

const Search: FC<IProps> = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    
  };

  return (
    <InputWrapper>
      <Input
        allowClear
        value={searchValue}
        onChange={setSearchValue}
        onPressEnter={() => onSearch()}
        prefix={<Icon onClick={() => onSearch()} name="search" />}
        placeholder="音乐/视频/电台/用户"
        className="search"
      />
    </InputWrapper>
  );
};

export default memo(Search);
