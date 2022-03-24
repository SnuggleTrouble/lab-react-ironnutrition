import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

export function Search(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        name="Search"
        placeholder="Enter Search Query"
        onChange={handleSearch}
      />
    </>
  );
}
