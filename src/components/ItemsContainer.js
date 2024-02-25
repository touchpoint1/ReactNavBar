import Item from "./Item";
import { CONTACT,COMPANY, RESOURCES, } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={RESOURCES} title="RESOURCES" />
    </div>
  );
};

export default ItemsContainer;