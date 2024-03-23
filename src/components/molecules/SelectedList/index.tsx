import { ISelectedListProps } from "../../../Interfaces/mortyUniverseInterface";
import SelectedItem from "../../atoms/SelectedItem";

const SelectedList = ({
  selectedItems,
  setSelectedItems,
}: ISelectedListProps) => {
  return (
    <>
      {selectedItems.map((item: { id: string; name: string }) => {
        return (
          <SelectedItem
            key={`selectedItem-${item.id}-${item.name}`}
            id={item.id}
            value={item.name}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        );
      })}
    </>
  );
};

export default SelectedList;
