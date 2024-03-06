import SelectedItem from "../../atoms/SelectedItem";
import { ISelectedListProps } from "../../../interfaces/SearchProps";

const SelectedList = ({
  isEvilMode,
  selectedItems,
  setSelectedItems,
}: ISelectedListProps) => {
  return (
    <>
      {selectedItems.map((item: { id: string; name: string }) => {
        return (
          <SelectedItem
            isEvilMode={isEvilMode}
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
