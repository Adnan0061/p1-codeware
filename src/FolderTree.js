import FolderTree from "react-folder-tree";
import { structure } from "./data";
const BasicTree = () => {
  const onTreeStateChange = (state) => console.log("tree state: ", state);

  return <FolderTree data={structure} onChange={onTreeStateChange} />;
};

export default BasicTree;
