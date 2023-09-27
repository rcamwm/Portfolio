import { v4 as uuidv4 } from 'uuid';

function ItemizedList(props) {
  const {items, styling} = props;
  return (
    <ul className={"list-disc list-inside" + styling}>
      {Object.entries(items).map(([mainItem, subItems]) => {
        return (
        <li key={uuidv4()}>
          {mainItem}
          <ul className="list-circle list-inside ml-4">
            {subItems.map((subItem) => (
              <li key={uuidv4()}>{subItem}</li>
            ))}
          </ul>
        </li>)
      })}
    </ul>
  );
}

export default ItemizedList;