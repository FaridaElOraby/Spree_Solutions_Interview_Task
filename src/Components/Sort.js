/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function Sort(props) {
  //Selected Filter with predifined Date Newest
  const sorted = props.sorted;
  const setSorted = props.setSorted;

  //OnClick Select
  const onClick = ({ key }) => {
    if (sorted !== key) {
      setSorted(key);
      message.info(`Sorted on ${key}`);
    }
  };

  //Options in dropdown static
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Name A-Z">Name A-Z</Menu.Item>
      <Menu.Item key="Status A-Z">Status A-Z</Menu.Item>
      <Menu.Item key="Supplier A-Z">Supplier A-Z</Menu.Item>
      <Menu.Item key="Date new-old">Date new-old</Menu.Item>
    </Menu>
  );
  return (
    <div>
      Sort by: &nbsp;
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          {sorted} <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}
