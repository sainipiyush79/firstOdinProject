import { MenuList } from "./menu-list";
import "./styles.css";

export const TreeView = ({ menuData = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menuData} />
    </div>
  );
};
