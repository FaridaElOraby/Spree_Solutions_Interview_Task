/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function Filter(props) {
  //Selected Filter with predifined no filter
  const filtered = props.filtered;
  const setFiltered = props.setFiltered;

  //OnClick Select
  const onClick = ({ key }) => {
    setFiltered(key);
    message.info(`Filtered by ${key}`);
  };

  //Options in dropdown static
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="No Filter">No Filter</Menu.Item>
      <Menu.Item key="Supplier: Amazon">Supplier: Amazon</Menu.Item>
      <Menu.Item key="Supplier: Ebay">Supplier: Ebay</Menu.Item>
      <Menu.Item key="Supplier: Macy's">Supplier: Macy's</Menu.Item>
      <Menu.Item key="Supplier: Craiglist">Supplier: Craiglist</Menu.Item>
    </Menu>
  );
  return (
    <div>
      Filter by: &nbsp;
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          {filtered} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}
