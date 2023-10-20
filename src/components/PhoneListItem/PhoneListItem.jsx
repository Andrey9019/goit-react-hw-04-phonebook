import { ButtonItem, ListItem } from "./PhoneListItem.style"


export const PhoneListItem = ({id,firstName,number,onRemove}) => {
    return (
        <ListItem key={id} >
      {firstName}: {number}
        <ButtonItem
          onClick={() => onRemove(id)}>
        Remove
      </ButtonItem>
    </ListItem>
)
}